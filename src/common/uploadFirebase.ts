import { storage } from "@common/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const uploadFirebase = async (file: File): Promise<string> => {
  const storageRef = ref(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        reject(""); // added this line
        alert(error);
      },
      () => {
        const result = getDownloadURL(uploadTask.snapshot.ref);
        resolve(result);
      }
    );
  });
};
export default uploadFirebase;
