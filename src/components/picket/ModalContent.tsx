import { picketType } from "@/types";
import Image from "next/image";
import banana from "@assets/icons/banana_svgrepo.com.svg";
import React from "react";
import PicketDropzone from "./PicketDropzone";
import useTranslation from "@/hooks/useTranslation";
import ToastMessage from "../common/ToastMessage";

type picketChangeType = {
  change: boolean;
  picket: picketType;
};

const PicketAreaModalContent = ({
  pickets,
  onChangeState,
}: {
  pickets: picketType[];
  onChangeState: ({ change, picket }: picketChangeType) => void;
}) => {
  const onClick = ({ picket }: { picket: picketType }) => {
    onChangeState({ change: true, picket });
  };
  const { translation } = useTranslation();
  return (
    <div className={`flex h-fit w-full flex-col items-center pb-[20px]`}>
      <ToastMessage />
      {pickets.map((e, i) => (
        <div key={i}>
          <Image
            src={e.picketImageUrl}
            width={1200}
            height={200}
            style={{
              height: "200px",
              width: "auto",
              maxWidth: "800",
              margin: "auto",
            }}
            alt={"picket image"}
          ></Image>
          <div
            className={`flex w-full max-w-5xl items-center justify-between p-3`}
          >
            <button
              className={`flex `}
              onClick={() => {
                onClick({
                  picket: {
                    picketImageUrl: e.picketImageUrl,
                    price: e.price,
                    position: e.position,
                  },
                });
              }}
            >
              <Image src={banana} alt={"바나나"} style={{ width: "30px" }} />
              <div className={`text-xl font-bold`}>
                {e.price}
                {translation("vote.detail.picket_area.modal.content.change")}
              </div>
            </button>
            <button>🚨</button>
          </div>
        </div>
      ))}
      <div className={`my-[20px] mb-[150px] h-fit w-full`}>
        <PicketDropzone change={false} />
      </div>
    </div>
  );
};

export default PicketAreaModalContent;
