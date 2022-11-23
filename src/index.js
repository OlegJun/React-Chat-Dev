import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/nullStyle.css'
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


firebase.initializeApp({
    apiKey: "AIzaSyAMqg9hPxcf_F0HkzzKsDPdGpUWFEXajIM",
    authDomain: "chat-react-5deac.firebaseapp.com",
    projectId: "chat-react-5deac",
    storageBucket: "chat-react-5deac.appspot.com",
    messagingSenderId: "249902252328",
    appId: "1:249902252328:web:407a212380b2324c0fd01d"
})

const auth = firebase.auth()
const fireStore = firebase.firestore()

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        firebase,
        auth,
        fireStore
    }}>
        <App />
    </Context.Provider>
);

