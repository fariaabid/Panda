import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDWIO9yxlDIwBJBmrCD67-sLFfJr1-B09o",
  authDomain: "fire-auth-recap-5ca96.firebaseapp.com",
  projectId: "fire-auth-recap-5ca96",
  storageBucket: "fire-auth-recap-5ca96.appspot.com",
  messagingSenderId: "351136651876",
  appId: "1:351136651876:web:83dd23fd2d664eb5ed5d71",
  measurementId: "G-9VP01NDSXJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
