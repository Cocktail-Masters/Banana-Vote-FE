"use client";

import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import useTranslation from "@/hooks/useTranslation";
import { usePicketUploadMutation } from "@/hooks/reactQuery/mutation/usePicketModifyUploadMutatation";
import { useParams } from "next/navigation";
import uploadFirebase from "@/common/uploadFirebase";
import { useStore } from "@/hooks/useStore";
import { useMainStore } from "@/store";
import { picketChangeType } from "./PicketModal";
import { toast } from "react-toastify";

const PicketDropzone = ({
  change,
  price,
  position,
  newPicket,
  onwerId,
  setChangeState,
}: {
  change: boolean;
  price?: number;
  position?: number;
  onwerId?: number;
  newPicket: boolean;
  setChangeState: ({ change, picket }: picketChangeType) => void;
}) => {
  const params = useParams();
  const [file, setFile] = useState<File>();
  const [fileType, setFileType] = useState<string>();
  const { translation } = useTranslation();
  const { mutate } = usePicketUploadMutation({
    queryKey: ["picket", parseInt(params.detail)],
    newPicket,
  });
  const [guestPrice, setGuestPrice] = useState<number>(0);
  const user = useStore(useMainStore, (state) => state.user);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const removePicture = () => {
    setFile(undefined);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div
      className={`ltems-center flex w-full flex-col items-center  justify-center`}
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
        {user && onwerId !== user.id && (
          <div className={`text-base font-bold dark:text-white`}>
            {translation(
              "vote.detail.picket_area.modal.content.dropzone.min_banana"
            )}{" "}
            : {price !== undefined ? price + 1 : "1"}
          </div>
        )}

        <div className={`mt-1 flex h-10 w-full justify-center`}>
          {user && onwerId !== user.id && (
            <input
              onChange={(e) => {
                setGuestPrice((prev) => {
                  return parseInt(e.target.value);
                });
              }}
              className={`w-1/3 rounded-xl border `}
            ></input>
          )}
          <button
            className={`${
              !change && `ml-2`
            } h-full w-24 rounded-xl bg-bg-button-yellow active:bg-bg-button-yellow-light`}
            onClick={async () => {
              if ((newPicket || change) && position != undefined && file) {
                const imageUploadResponse = await uploadFirebase(file);
                mutate(
                  {
                    voteId: parseInt(params.detail),
                    picketImageUrl: imageUploadResponse,
                    paidPrice: guestPrice,
                    position,
                    curPrice: price ? price : 0,
                  },
                  {
                    onSuccess: () => {
                      {
                        setChangeState({
                          change: false,
                          picket: {
                            picketImageUrl: "",
                            position: 0,
                            price: 0,
                            id: 0,
                            ownerId: 0,
                            voteId: params.detail ? parseInt(params.detail) : 0,
                          },
                        });
                      }
                    },
                    onError: () => {
                      
                    },
                  }
                );
              }
            }}
          >
            {translation(
              "vote.detail.picket_area.modal.content.dropzone.submit"
            )}
          </button>
        </div>
        <div>
          <div className={`text-sm`}>
            {translation(
              "vote.detail.picket_area.modal.content.dropzone.has_banana"
            )}
            {": "}
            {user !== undefined && user.points}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicketDropzone;
