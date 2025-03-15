import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkHmtL3AYZmVupubtXZzTbl_nBdvgQaVM",
  authDomain: "virasat-bd.firebaseapp.com",
  projectId: "virasat-bd",
  storageBucket: "virasat-bd.firebasestorage.app",
  messagingSenderId: "375871394910",
  appId: "1:375871394910:web:77175d36eb2c6c845790cf",
  measurementId: "G-3W1SFNZZ0P",
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const saveSubscriber = async (email: string, name: string = '') => {
    try {
        const docRef = await addDoc(collection(db, "subscribers"), {
            email,
            name,
            createdAt: serverTimestamp(),
            source: window.location.pathname
        });
        console.log("Document written with ID: ", docRef.id)
    } catch (error) {
        console.error("Error adding subscriber: ", error);
        throw error;
    }
}

export const saveTourismWaitlist = async (email: string) => {
    try {
      const docRef = await addDoc(collection(db, "tourismWaitlist"), {
        email,
        createdAt: serverTimestamp()
      });
      console.log("Tourism waitlist entry saved with ID: ", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error saving to tourism waitlist: ", error);
      throw error;
    }
};


  