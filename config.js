import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBBgq-e8WVxuRU6hiWxyiKfHHeWgJTjKOI",
    authDomain: "teamvoting-73579.firebaseapp.com",
    databaseURL: "https://teamvoting-73579-default-rtdb.firebaseio.com",
    projectId: "teamvoting-73579",
    storageBucket: "teamvoting-73579.appspot.com",
    messagingSenderId: "481161029198",
    appId: "1:481161029198:web:54e25126562a422cd3c51f"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();