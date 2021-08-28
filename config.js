import firebase from 'firebase'
require("@firebase/firestore")
import "firebase/auth";

var firebaseConfig = {
 
  apiKey: "AIzaSyCOQlM0J1AB4KPJpknCxNZT3exGdyPFq0g",
  authDomain: "complaint-forum-87476.firebaseapp.com",
  projectId: "complaint-forum-87476",
  storageBucket: "complaint-forum-87476.appspot.com",
  messagingSenderId: "949080663317",
  appId: "1:949080663317:web:519bc6f025d2bf2800751c"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
 ;

export default firebase.firestore()

