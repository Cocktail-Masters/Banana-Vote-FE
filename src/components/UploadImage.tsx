"use client";

import { ChangeEvent, useRef, useState } from "react";

import uploadAsset from "@assets/images/uploadAsset.png";
import Image from "next/image";
import { Button } from "@chakra-ui/react";

type UploadImagePropsType = {
  onClickHandler: (file: File | null) => void;
};

const UploadImage = ({ onClickHandler }: UploadImagePropsType) => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
      onClickHandler(e.target.files[0]);
    }
  };

  const deleteFileHandler = () => {
    onClickHandler(null);
  };

  const uploadClickHandler = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <Button variant={"unstyled"} onClick={uploadClickHandler}>
        <Image
          src={uploadAsset}
          alt="upload asset"
          style={{
            margin: "auto",
            objectFit: "contain",
          }}
        />
      </Button>
      <input
        type="file"
        ref={inputRef}
        onChange={fileChangeHandler}
        style={{ display: "none" }}
      />
    </>
  );
};
export default UploadImage;
