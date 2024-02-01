import { db } from "../config/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  serverTimestamp,
  orderBy,
  getCountFromServer,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
class DatabaseService {
  collectionName;

  constructor(collectionName) {
    this.collection = collection(db, collectionName);
  }

  getOne = async ({ queryKey }) => {
    const { id } = queryKey[1];
    if (!id) return;
    const snapshot = await this.collection.doc(id).get();
    return snapshot.data();
  };
  getAll = async () => {
    const snapshot = await getDocs(
      this.collection,
      orderBy("timestamp ", "desc")
    );
    return snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  };

  getReference = async (documentReference) => {
    const res = await documentReference.get();
    const data = res.data();

    if (data && documentReference.id) {
      data.uid = documentReference.id;
    }

    return data;
  };

  create = async (data) => {
    const updatedData = {
      ...data,
      timestamp: serverTimestamp(),
    };
    const result = await addDoc(this.collection, updatedData, { merge: true });
    return result;
  };

  update = async (id, data) => {
    // return await this.collection.doc(id).update(values);
    const myDocRef = doc(this.collection, id);
    const result = await setDoc(myDocRef, data);
    return result;
  };

  remove = async (id) => {
    // this.mydoc = doc(this.collection, id);
    const result = await deleteDoc(doc(this.collection, id));
    return result;
  };

  createAuth = async (data) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, data.username, data.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(userCredential.user, {
          displayName: data.firstName + " " + data.lastName,
        });
        console.log(user);
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        return error;
      });
  };
  signInAuth = async (data) => {
    const auth = getAuth();

    const result = signInWithEmailAndPassword(
      auth,
      data.username,
      data.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        return "400";
      });
    return result;
  };

  countData = async () => {
    const snapshot = await getCountFromServer(this.collection);
    return snapshot.data().count;
  };
}

// Create services for each entity type
export const UserService = new DatabaseService("users");

export const DistributorService = new DatabaseService("distributors");
