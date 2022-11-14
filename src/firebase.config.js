import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBJhlZu_Eui1T-_MJQBAzcBBBBku2aSJds",
    authDomain: "food-delivery-app-f9048.firebaseapp.com",
    databaseURL: "https://food-delivery-app-f9048-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "food-delivery-app-f9048",
    storageBucket: "food-delivery-app-f9048.appspot.com",
    messagingSenderId: "27838613874",
    appId: "1:27838613874:web:5e085bc3d77fa7c1a835eb"
  };
  
//if there is no apps then only initialise it otherwise use app
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app,firestore,storage};
