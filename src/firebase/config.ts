// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTIEd8KmMK5P0Lv4se68UsGvYtIYwMZeU",
  authDomain: "cars-react-393b5.firebaseapp.com",
  projectId: "cars-react-393b5",
  storageBucket: "cars-react-393b5.appspot.com",
  messagingSenderId: "356727389786",
  appId: "1:356727389786:web:9f5eaedf356f075fdbe263"
};

// Initialize Firebase
const projectFirestore = initializeApp(firebaseConfig);

export { projectFirestore };