// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgAUXwCYydqWVFZmQVwyVKbQeuis1PxcI",
  authDomain: "my-app-react-1.firebaseapp.com",
  projectId: "my-app-react-1",
  storageBucket: "my-app-react-1.appspot.com",
  messagingSenderId: "533986572446",
  appId: "1:533986572446:web:17288fe398aa039343238f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);