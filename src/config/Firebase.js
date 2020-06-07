import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyA6PMmyCYzMc9XEbIj7lGAE9LqzOgBMoLA",
  authDomain: "safe-myreservation-app.firebaseapp.com",
  databaseURL: "https://safe-myreservation-app.firebaseio.com",
  projectId: "safe-myreservation-app",
  storageBucket: "safe-myreservation-app.appspot.com",
  messagingSenderId: "511805724653",
  appId: "1:511805724653:web:bb19d4d69a6f3a835ff9e4",
  measurementId: "G-88W2JRZ6QW",
};
// Initialize Firebase
const Fire = firebase.initializeApp(firebaseConfig);


export default Fire;
