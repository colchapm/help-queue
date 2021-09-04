import * as firebase from 'firebase';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcSJpkActCXKsyJ3qegrMsZSK7hzuNZSI",
  authDomain: "redux-help-queue-ef116.firebaseapp.com",
  projectId: "redux-help-queue-ef116",
  storageBucket: "redux-help-queue-ef116.appspot.com",
  messagingSenderId: "440074196642",
  appId: "1:440074196642:web:5e2e7acb8539e19cf529fb"
};


firebase.initializeApp(firebaseConfig);
// Initialize our Firebase application

firebase.firestore();
//call this because we are using Firestore as our database

export default firebase;