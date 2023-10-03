// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxvfxo1JfpWSuGh7B87c7D7SwIkipOjVU",
  authDomain: "online-news-project.firebaseapp.com",
  projectId: "online-news-project",
  storageBucket: "online-news-project.appspot.com",
  messagingSenderId: "788585930074",
  appId: "1:788585930074:web:f59c367d16c61d4440e763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app