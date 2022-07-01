import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyCXDkqcbrsvbVuuFlcvJ-xuiJlrWLf-pZs",
  authDomain: "fir-first-project-a9efb.firebaseapp.com",
  projectId: "fir-first-project-a9efb",
  storageBucket: "fir-first-project-a9efb.appspot.com",
  messagingSenderId: "478143878454",
  appId: "1:478143878454:web:222ab37d70046126f94f97",
  measurementId: "G-391FPF69NZ",
});

const databs = getFirestore(app);

export { databs };
