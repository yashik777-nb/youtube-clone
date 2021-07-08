import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmBQFvUbrJjO682wCcadqereS2dqYULxM",
  authDomain: "yt-clone-yash.firebaseapp.com",
  projectId: "yt-clone-yash",
  storageBucket: "yt-clone-yash.appspot.com",
  messagingSenderId: "564083728004",
  appId: "1:564083728004:web:8a3404cc11abf274c22cd1",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
