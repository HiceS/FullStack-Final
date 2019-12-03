  import firebase from 'firebase/app';
  import 'firebase/firestore';
  
  // these api keys don't matter they are just a reference
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCJNHCXHmwYEQDPiA5y70JxeatvKkW3f_Y",
    authDomain: "harnecwebapp.firebaseapp.com",
    databaseURL: "https://harnecwebapp.firebaseio.com",
    projectId: "harnecwebapp",
    storageBucket: "harnecwebapp.appspot.com",
    messagingSenderId: "574097612736",
    appId: "1:574097612736:web:f29595d031374ce579b225",
    measurementId: "G-VTPWL2BRGK"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;