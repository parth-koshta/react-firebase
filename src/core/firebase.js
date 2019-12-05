import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCV9rjHxJb8RpvJb1yugDKlTW_HzVhP-dA",
  authDomain: "assignment-f19f4.firebaseapp.com",
  databaseURL: "https://assignment-f19f4.firebaseio.com",
  projectId: "assignment-f19f4",
  storageBucket: "assignment-f19f4.appspot.com",
  messagingSenderId: "872761569152",
  appId: "1:872761569152:web:ae8fce962e80f51afe5b65",
  measurementId: "G-YQX5DHMT3D"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
