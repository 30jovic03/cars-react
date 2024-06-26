import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { firestore } from "../firebase/config";

const addDocument = async (collectionName, document) => {
  try {
    const docRef = await addDoc(collection(firestore, collectionName), document);

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const getDocuments = async (collectionName) => {
  try {
    const documents = [];
    const querySnapshot = await getDocs(collection(firestore, collectionName));

    querySnapshot.forEach((doc) => {
      documents.push({...doc.data(), id: doc.id});
    });

    return documents;
  } catch (e) {
    console.error("Error getting documents: ", e);
  }
}

export { addDocument, getDocuments };