
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyANNBfTbh4MM7p7EpdrP7M5GwSoBzd3GXE",
  authDomain: "sagebhrigu-372cd.firebaseapp.com",
  projectId: "sagebhrigu-372cd",
  storageBucket: "sagebhrigu-372cd.appspot.com",
  messagingSenderId: "440739000566",
  appId: "1:440739000566:web:e20986289e4d354b34bcd7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};