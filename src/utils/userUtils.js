import { collection, getDocs, doc, getDoc, deleteDoc } from "firebase/firestore";
import { deleteUser } from "firebase/auth";

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

export const deleteProfile = async (auth, authId, db) => {
  const user = auth.currentUser;

  try {
    await deleteDoc(doc(db, "users", authId));

    console.log("user", user, user.uid, authId);

    if (user && user.uid === authId) {
      console.log("Deleting user...");
      await deleteUser(user);
    }
  } catch (error) {
    console.error("Error deleting profile: ", error);
  }
};
