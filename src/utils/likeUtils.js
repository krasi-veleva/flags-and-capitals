import { doc, setDoc, getDoc, deleteDoc, collection, query, where, getDocs } from "firebase/firestore";

export const likeProfile = async (currentUserId, profileId, db) => {
  try {
    await setDoc(doc(db, "likes", `${currentUserId}_${profileId}`), {
      currentUserId: currentUserId,
      profileId: profileId,
    });
  } catch (error) {
    console.error("Error liking profile: ", error);
  }
};

export const removeLike = async (currentUserId, profileId, db) => {
  try {
    await deleteDoc(doc(db, "likes", `${currentUserId}_${profileId}`));
  } catch (error) {
    console.error("Error removing like: ", error);
  }
};

export const hasLikedProfile = async (currentUserId, profileId, db) => {
  const docRef = doc(db, "likes", `${currentUserId}_${profileId}`);
  const docSnap = await getDoc(docRef);
  return docSnap.exists();
};

export const getAllLikesForProfile = async (profileId, db) => {
  const q = query(collection(db, "likes"), where("profileId", "==", profileId));
  const querySnapshot = await getDocs(q);
  const likes = [];
  querySnapshot.forEach((doc) => {
    likes.push(doc.data().userId);
  });
  return likes;
};
