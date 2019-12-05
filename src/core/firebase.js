import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB96TsUW0Z73H4SniIn_dYsM9BOteSqDBY",
  authDomain: "users-de333.firebaseapp.com",
  databaseURL: "https://users-de333.firebaseio.com",
  projectId: "users-de333",
  storageBucket: "users-de333.appspot.com"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
