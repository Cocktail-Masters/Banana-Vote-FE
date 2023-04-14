"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { picketType } from "@/types";
import useTranslation from "@/hooks/useTranslation";

const PicketDropzone = ({
  change,
  price,
  position,
}: {
  change: boolean;
  price?: number;
  position?: number;
}) => {
  const [file, setFile] = useState<File>();
  const [fileType, setFileType] = useState<string>();
  const { translation } = useTranslation();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);

  const removePicture = () => {
    setFile(undefined);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div
      className={`ltems-center mb-[20px] flex w-full flex-col items-center  justify-center`}
    >
      {file ? (
        <div
          className={`relative flex h-[250px] justify-center rounded-2xl border p-4 `}
        >
          <div
            className={`absolute right-[10px] top-[5px] w-fit`}
            onClick={removePicture}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <Image
            src={URL.createObjectURL(file)}
            width={1280}
            height={720}
            style={{
              height: "200px",
              width: "auto",
              maxWidth: "800",
              margin: "auto",
            }}
            alt={"미리보기"}
          />
        </div>
      ) : (
        <div
          className={`h-[250px] w-full max-w-lg rounded-2xl border`}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <div
              className={`flex h-full w-full flex-col items-center justify-center`}
            >
              <div className={`text-2xl`}>
                {translation(
                  "vote.detail.picket_area.modal.content.dropzone.upload_hint1"
                )}
              </div>
              <div className={`text-2xl`}>
                {translation(
                  "vote.detail.picket_area.modal.content.dropzone.upload_hint2"
                )}
              </div>
              <div className={`text-lg`}>
                {translation(
                  "vote.detail.picket_area.modal.content.dropzone.upload_hint3"
                )}
              </div>
            </div>
          ) : (
            <div
              className={`flex h-full w-full flex-col items-center justify-center`}
            >
              <div className={`text-2xl`}>
                {translation(
                  "vote.detail.picket_area.modal.content.dropzone.upload_hint1"
                )}
              </div>
              <div className={`text-2xl`}>
                {translation(
                  "vote.detail.picket_area.modal.content.dropzone.upload_hint2"
                )}
              </div>
              <div className={`text-lg`}>
                {translation(
                  "vote.detail.picket_area.modal.content.dropzone.upload_hint3"
                )}
              </div>
            </div>
          )}
        </div>
      )}
      <div className={`mt-[5%] flex h-[20%] w-full flex-col items-center`}>
        <div>
          {translation(
            "vote.detail.picket_area.modal.content.dropzone.min_banana"
          )}{" "}
          : {change ? price : "1000"}
        </div>
        <div className={`flex`}>
          <input></input>
          <button>
            {translation(
              "vote.detail.picket_area.modal.content.dropzone.submit"
            )}
          </button>
        </div>
        <div>
          <div>
            {translation(
              "vote.detail.picket_area.modal.content.dropzone.has_banana"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicketDropzone;
