import { FirebaseOptions, initializeApp, FirebaseApp } from 'firebase/app'

export default class FirebaseAppService {
  private static firebaseApp: FirebaseApp | null = null

  private static firebaseAppConfig: FirebaseOptions = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  }

  public static getFirebaseAppInstance(): FirebaseApp {
    if (!FirebaseAppService.firebaseApp) {
      FirebaseAppService.firebaseApp = initializeApp(
        FirebaseAppService.firebaseAppConfig,
        'engineering4.0'
      )
    }

    return FirebaseAppService.firebaseApp
  }
}
