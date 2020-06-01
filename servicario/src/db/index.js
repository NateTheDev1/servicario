import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase
  .initializeApp({
    apiKey: "AIzaSyBwZpZ6DoK81_B-LnRto99NHYaFiOrFwjs",
    authDomain: "servicario-1d25a.firebaseapp.com",
    databaseURL: "https://servicario-1d25a.firebaseio.com",
    projectId: "servicario-1d25a",
    storageBucket: "servicario-1d25a.appspot.com",
    messagingSenderId: "277174835584",
    appId: "1:277174835584:web:e10eedea90cdd554074965",
    measurementId: "G-TZCXTYQNTC",
  })
  .firestore();

export default db;

const { Timestamp } = firebase.firestore;
export { Timestamp };
