import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDCSKqWJtPztu6IG1lN_8erJ4ivTSmB0ho",
    authDomain: "cookbook-7a788.firebaseapp.com",
    databaseURL: "https://cookbook-7a788-default-rtdb.firebaseio.com",
    projectId: "cookbook-7a788",
    storageBucket: "cookbook-7a788.appspot.com",
    messagingSenderId: "336695128931",
    appId: "1:336695128931:web:87ba4d95431e706e839956",
    measurementId: "G-4WYW2MKYYD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore()

export default firebaseApp;