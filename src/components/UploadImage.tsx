import { ChangeEvent, useState } from "react";

import { storage } from "@common/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { css } from "@emotion/react";
import { Input } from "@chakra-ui/react";

const UploadImage = () => {
  const [progresspercent, setProgresspercent] = useState(0);

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  };

  // const handleSubmit = (e: any) => {
  //   console.log("handleSubmit");
  //   e.preventDefault();
  //   const file = e.target[0]?.files[0];

  //   if (!file) return;

  //   const storageRef = ref(storage, `files/${file.name}`);
  //   console.log(file);
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgresspercent(progress);
  //     },
  //     (error) => {
  //       alert(error);
  //     },
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: string) => {
  //         setImgUrl(downloadURL);
  //       });
  //     }
  //   );
  // };

  return (
    <>
      <div
        css={css`
          & > input[type="file"] {
            display: none;
          }
          border: 1px solid #ccc;
          display: inline-block;
          padding: 6px 12px;
          cursor: pointer;
        `}
      >
        <input type="file" onChange={handleFileChange} />

        {/* {!imgUrl && (
          <div className="outerbar">
            <div className="innerbar" style={{ width: `${progresspercent}%` }}>
              {progresspercent}%
            </div>
          </div>
        )}
        {imgUrl && <img src={imgUrl} alt="uploaded file" height={200} />} */}
      </div>
    </>
  );
};
export default UploadImage;
