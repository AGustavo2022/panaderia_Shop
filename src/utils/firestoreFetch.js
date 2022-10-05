import { collection, getDocs, orderBy, query, where } from "@firebase/firestore";
import {doc, getDoc } from "firebase/firestore";
import db from './firebaseConfig';

export const firestoreFetch = async (idCategory) => {
    let q;
    if(idCategory){
        q= query(collection(db, 'products'),where('category', '==', parseInt(idCategory)));       
    }else{
        q= query(collection(db, 'products'), orderBy('title'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(item => ({
         id: item.id,
        ...item.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, 'products', idItem);
    const docSnap = await getDoc(docRef) 
    
    if (docSnap.exists()) {
        let result = {
            id: idItem,
            ...docSnap.data()
        }
        return result;
                
    } else {
        console.log("No such document!");
    }
           
}