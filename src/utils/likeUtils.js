import { doc, setDoc, getDoc, deleteDoc, collection, query, where, getDocs } from "firebase/firestore";

export const likeProfile = async (profileOwnerId, targetProfileId, db) => {
  try {
    await setDoc(doc(db, "likes", `${profileOwnerId}_${targetProfileId}`), {
      profileOwnerId,
      targetProfileId,
    });
  } catch (error) {
    console.error("Error liking profile: ", error);
  }
};

export const removeLike = async (profileOwnerId, targetProfileId, db) => {
  try {
    await deleteDoc(doc(db, "likes", `${profileOwnerId}_${targetProfileId}`));
  } catch (error) {
    console.error("Error removing like: ", error);
  }
};

export const hasLikedProfile = async (profileOwnerId, targetProfileId, db) => {
  const docRef = doc(db, "likes", `${profileOwnerId}_${targetProfileId}`);
  const docSnap = await getDoc(docRef);
  return docSnap.exists();
};

export const getAllLikesForProfile = async (targetProfileId, db) => {
  const q = query(collection(db, "likes"), where("targetProfileId", "==", targetProfileId));
  const querySnapshot = await getDocs(q);
  const likes = [];
  querySnapshot.forEach((doc) => {
    likes.push(doc.data().userId);
  });
  return likes;
};
