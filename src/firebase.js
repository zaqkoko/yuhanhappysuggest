import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyASqNH4CO8vGDqR4wdfDIymOtlrE86vWk8",
    authDomain: "yuhan-happy-suggest.firebaseapp.com",
    databaseURL: "https://yuhan-happy-suggest.firebaseio.com",
    projectId: "yuhan-happy-suggest",
    storageBucket: "yuhan-happy-suggest.appspot.com",
    messagingSenderId: "693011282838",
    appId: "1:693011282838:web:ba8ebf4479b06785d4bbb7",
    measurementId: "G-HHBS1Q1SST"
  };

  export default firebase.initializeApp(firebaseConfig);