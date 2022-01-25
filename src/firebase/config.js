import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyD1qNt6fevC1OonTjsLN56zz2yHC4haU58",
    authDomain: "new-events-35577.firebaseapp.com",
    projectId: "new-events-35577",
    storageBucket: "new-events-35577.appspot.com",
    messagingSenderId: "291859443693",
    appId: "1:291859443693:web:10b19d0c44fe2bbd6481e4",
    measurementId: "G-PPNE12TKH0"
  };

export default firebase.initializeApp(firebaseConfig)  
