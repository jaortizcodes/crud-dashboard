import { db } from "../config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
class DatabaseService {
  collectionName;

  constructor(collectionName) {
    this.collection = collection(db, collectionName);
  }

  getAll = async () => {
    const snapshot = await getDocs(this.collection);
    return snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  };

  getOne = async ({ queryKey }) => {
    const { id } = queryKey[1];
    if (!id) return;
    const snapshot = await this.collection.doc(id).get();
    return snapshot.data();
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
    const result = await addDoc(this.collection, data);
    return result;
  };

  update = async (id, values) => {
    return await this.collection.doc(id).update(values);
  };

  remove = async (id) => {
    return await this.collection.doc(id).delete();
  };
}

// Create services for each entity type
export const UserService = new DatabaseService("users");

export const DistributorService = new DatabaseService("distributors");
