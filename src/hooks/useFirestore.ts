import { useState, useEffect, useCallback } from 'react'
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  DocumentData,
  getFirestore
} from 'firebase/firestore'
import FirebaseAppService from '../services/FirebaseApp.service'

type FirestoreError = {
  message: string
}

const useFirestore = (collectionName: string) => {
  const [data, setData] = useState<DocumentData[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<FirestoreError | null>(null)
  const firebaseAppInstance = FirebaseAppService.getFirebaseAppInstance()
  const db = getFirestore(firebaseAppInstance)
  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const querySnapshot = await getDocs(collection(db, collectionName))
      const docsData = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
      }))
      setData(docsData)
    } catch (err) {
      setError({ message: (err as Error).message })
    } finally {
      setLoading(false)
    }
  }, [collectionName, db])

  const addDocument = useCallback(
    async (newData: DocumentData) => {
      setLoading(true)
      try {
        const docRef = await addDoc(collection(db, collectionName), newData)
        setData(prevData => [...prevData, { id: docRef.id, ...newData }])
      } catch (err) {
        setError({ message: (err as Error).message })
      } finally {
        setLoading(false)
      }
    },
    [collectionName, db]
  )

  const updateDocument = useCallback(
    async (id: string, updatedData: DocumentData) => {
      setLoading(true)
      try {
        const docRef = doc(db, collectionName, id)
        await updateDoc(docRef, updatedData)
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
