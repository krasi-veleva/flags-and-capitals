import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export const getAllUsers = async (db) => {
  const userCollection = collection(db, "users");
  const usersSnapshot = await getDocs(userCollection);
  const userList = usersSnapshot.docs.map((doc) => ({
    uid: doc.id,
    ...doc.data(),
  }));
  return userList;
};

export const getUserById = async (uid, db) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { uid: docSnap.uid, ...docSnap.data() };
  } else {
    console.error("No such document");
    return null;
  }
};
