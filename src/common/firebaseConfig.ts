// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

export const firebaseConfig = {
  apiKey: "AIzaSyCpPnSktRdNMKQK-BolNwzfg_HCHV0sdr8",
  authDomain: "imageserver-c9d94.firebaseapp.com",
  projectId: "imageserver-c9d94",
  storageBucket: "imageserver-c9d94.appspot.com",
  messagingSenderId: "716164818113",
  appId: "1:716164818113:web:e9a431d151db56e0f66040",
  measurementId: "G-RSL4TKQVF1"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);