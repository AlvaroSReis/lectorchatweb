//import {useContext, createContext } from "react";
//import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, 
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import { doc, collection, getDoc, query, where, getDocs, setDoc, onSnapShot } from "firebase/firestore/lite";


import {auth, fire} from "./firebaseConfig.js";

/*
const AuthContext = createContext()

export async function AuthContextProvider({children}) {
    function googleSingIn() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }
    
    return ( <AuthContextProvider value={{googleSingIn}}>
        {children}
    </AuthContextProvider>)
}

export default async function Api () {
    return useContext(AuthContext)
}
*/


//const firebaseApp = initializeApp(firebaseConfig);
//const db = firebaseApp.firestore();

export default {
    googlePopup:async () => {
        const provider = new GoogleAuthProvider()
        let result = await signInWithPopup(auth, provider)
        return result;
    },
    addUser:async (u) => {
        const usersCollection = doc(fire, "users", u.email)
        const userSnapshot = await setDoc(usersCollection, {
            name: u.name,
            email: u.email,
            profpic: u.profpic,
            username: u.name,
        })
    },
    getContactList:async (useremail) => {
        let list = []
        const usersCollection = collection(fire, "users", useremail, "friends")
        let results = await getDocs(usersCollection)

        results.forEach(result => {
            let data = result.data();

            list.push({
                name: data.name,
                username: data.username,
                email: data.email,
                profpic: data.profpic,
            })
        })
        return list;
    },
    getMessages:async(user1, user2) => {
        let list = []
        const messages = query(collection(fire,"messages"), where('members', 'array-contains', user1 && user2))
        const results = getDocs(messages, (querySnapshot) => {
            results.forEach((result) => {
                let data = result.data();
                console.log(data)
            
            list.push({
                name: data.name,
                email: data.email,
                profpic: data.profpic,
            })
            })
        })


        return list;
    },
    getContacts:async (useremail, setChatList) => {
        let list = []
        const usersCollection = collection(fire, "users", useremail, "friends")
        let results = await getDocs(usersCollection)
            results.forEach((result) => {
                let data = result.data();
                list.push({
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    profpic: data.profpic,
                })
            })
        
        return setChatList(list)
        
    },
}

