import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { db } from "../firebase";

export const add = async (e, obj) => {
  try {
    const docRef = await addDoc(collection(db, "profile"), obj);
    console.log("Document written with ID: ", docRef.id);
    // return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const update = async (e, obj) => {
  try {
    const docRef = doc(db, "profile", obj.id);
    await updateDoc(docRef, obj);
    console.log("Document updated with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getLatest = async () => {
  let items = [];
  const q = await getDocs(collection(db, "profile"));
  q.forEach((doc) => items.push({ id: doc.id, data: doc.data() }));
  return items[0];
};

export const upload = async (obj) => {
  console.log(obj);
};
