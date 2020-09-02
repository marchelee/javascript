import * as firebase from 'firebase';

//Your web app's Firebase configuration 
var firebaseConfig = {
  piKey: "AIzaSyD3RmKx6CgAeHZS9-EMmYDelwMEnIzUUhE",
  authDomain: "react-firebase-crud-52421.firebaseapp.com",
  databaseURL: "https://react-firebase-crud-52421.firebaseio.com",
  projectId: "react-firebase-crud-52421",
  storageBucket: "react-firebase-crud-52421.appspot.com",
  messagingSenderId: "1019049876925",
  appId: "1:1019049876925:web:04c16a6b487c3e7ed1c6d4"
};

// Initialize Firebase
var fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();