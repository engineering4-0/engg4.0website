import { useState } from 'react'
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage'
import FirebaseAppService from '../services/FirebaseApp.service'

interface UseUploadImage {
  uploading: boolean
  uploadError: Error | null
  imageUrl: string | null
  uploadImage: (
    file: File,
    basePath: string,
    fileName: string
  ) => Promise<string>
}

const useUploadImage = (): UseUploadImage => {
  const [uploading, setUploading] = useState(false)
  const [uploadError, setError] = useState<Error | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const uploadImage = async (
    file: File,
    basePath: string,
    fileName: string
  ): Promise<string> => {
    setUploading(true)
    setError(null)
    const firebaseAppInstance = FirebaseAppService.getFirebaseAppInstance()
    const storage = getStorage(firebaseAppInstance)
    const storageRef = ref(storage, `${basePath}/${fileName}`)

    try {
      const snapshot = await uploadBytes(storageRef, file)
      const url = await getDownloadURL(snapshot.ref)
      setImageUrl(url)
      return url
    } catch (err) {
      setError(err as Error)
      return ''
    } finally {
      setUploading(false)
    }
  }

  return { uploading, uploadError, imageUrl, uploadImage }
}

export default useUploadImage
