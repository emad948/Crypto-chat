import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({


    apiKey: "AIzaSyAbRQ2shWKnB6ypeOV_dqsy7FoQK1l8ZbA",
    authDomain: "messenger-clone-500a6.firebaseapp.com",
    projectId: "messenger-clone-500a6",
    storageBucket: "messenger-clone-500a6.appspot.com",
    messagingSenderId: "247325933924",
    appId: "1:247325933924:web:82c630c70dbe5aa0a47a71",
    measurementId: "G-72075XSN6R"

});


const db=firebaseApp.firestore();


export default db;