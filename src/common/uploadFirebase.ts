import { storage } from "@common/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const uploadFirebase = async (file: File): Promise<string | null> => {
  const storageRef = ref(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  let url = null;
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      //   const progress = Math.round(
      //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      //   );
      //   setProgresspercent(progress);
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: string) => {
        url = downloadURL;
      });
    }
  );
  return url;
};
export default uploadFirebase;
