import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAVJY0ZUiWNB31VIp2EjLwpGyYlcrYSERk",
  authDomain: "project-x-6a08b.firebaseapp.com",
  projectId: "project-x-6a08b",
  storageBucket: "project-x-6a08b.appspot.com",
  messagingSenderId: "514888243154",
  appId: "1:514888243154:web:3ea390091a32cf18e0da0b",
  measurementId: "G-DTG21WR49X"
};


// Initializing Firebase
const app = initializeApp(firebaseConfig);

export default app;