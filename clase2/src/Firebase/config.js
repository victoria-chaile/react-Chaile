import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8-MnwPO4WZ_w7zs9Y2Sf4H56uaTKS-fY",
  authDomain: "black-and-white-bd02f.firebaseapp.com",
  projectId: "black-and-white-bd02f",
  storageBucket: "black-and-white-bd02f.appspot.com",
  messagingSenderId: "1039652793758",
  appId: "1:1039652793758:web:4a1bd62a9a45425955ba8f",
};

const app = initializeApp(firebaseConfig);
export const getFirestoreApp = () => {
  return app;
};
