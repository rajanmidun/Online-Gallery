import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDOT8SCEOO4_pXQBCH2jtOrnJ934u_9J1c",
  authDomain: "firegram-18d3d.firebaseapp.com",
  databaseURL: "https://firegram-18d3d.firebaseio.com",
  projectId: "firegram-18d3d",
  storageBucket: "firegram-18d3d.appspot.com",
  messagingSenderId: "849946236064",
  appId: "1:849946236064:web:6baa98bff87946bceaa5c5",
  measurementId: "G-W86066QYRG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };