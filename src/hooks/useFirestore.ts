import { useState, useEffect, useCallback } from 'react'
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  DocumentData,
  getFirestore,
  FirestoreError
} from 'firebase/firestore'
import FirebaseAppService from '../services/FirebaseApp.service'

const useFirestore = <T extends DocumentData>(collectionName: string) => {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<FirestoreError | null | unknown>(null)
  const firebaseAppInstance = FirebaseAppService.getFirebaseAppInstance()
  const db = getFirestore(firebaseAppInstance)

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const querySnapshot = await getDocs(collection(db, collectionName))
      const docsData = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
      })) as unknown as T[]
      setData(docsData)
    } catch (err) {
      if (err instanceof FirestoreError) {
        setError(err)
      } else {
        setError(err)
      }
    } finally {
      setLoading(false)
    }
  }, [collectionName, db])

  const addDocument = useCallback(
    async (newData: T) => {
      setLoading(true)
      try {
        await addDoc(collection(db, collectionName), newData)
        fetchData()
      } catch (err) {
        setError({ message: (err as Error).message })
      } finally {
        setLoading(false)
      }
    },
    [collectionName, db, fetchData]
  )

  const updateDocument = useCallback(
    async (id: string, updatedData: Partial<T>) => {
      setLoading(true)
      try {
        const docRef = doc(db, collectionName, id)
        await updateDoc(docRef, updatedData as DocumentData)
        setData(prevData =>
          prevData.map(item =>
            item.id === id ? { ...item, ...updatedData } : item
          )
        )
      } catch (err) {
        setError({ message: (err as Error).message })
      } finally {
        setLoading(false)
      }
    },
    [collectionName, db]
  )

  const deleteDocument = useCallback(
    async (id: string) => {
      setLoading(true)
      try {
        const docRef = doc(db, collectionName, id)
        await deleteDoc(docRef)
        setData(prevData => prevData.filter(item => item.id !== id))
      } catch (err) {
        setError({ message: (err as Error).message })
      } finally {
        setLoading(false)
      }
    },
    [collectionName, db]
  )

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error, addDocument, updateDocument, deleteDocument }
}

export default useFirestore
