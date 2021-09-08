// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCq6PuwuZVuvrwMqyiGpcaox2wdGkYrgdA',
  authDomain: 'vue-firebase-sites-peluso.firebaseapp.com',
  projectId: 'vue-firebase-sites-peluso',
  storageBucket: 'vue-firebase-sites-peluso.appspot.com',
  messagingSenderId: '550483390363',
  appId: '1:550483390363:web:28a790e644da70fc8dbb3e'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore(app)

export { db }
