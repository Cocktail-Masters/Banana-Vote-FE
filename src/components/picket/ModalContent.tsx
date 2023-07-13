import { picketType } from "@/types";
import Image from "next/image";
import banana from "@assets/icons/banana_svgrepo.com.svg";
import React from "react";
import PicketDropzone from "./PicketDropzone";
import useTranslation from "@/hooks/useTranslation";
import { useStore } from "@/hooks/useStore";
import { useMainStore } from "@/store";
type picketChangeType = {
  change: boolean;
  picket: picketType;
};

const PicketAreaModalContent = ({
  pickets,
  onChangeState,
  declarationHandler,
  setChangeState,
}: {
  pickets: picketType[];
  onChangeState: ({ change, picket }: picketChangeType) => void;
  declarationHandler: () => void;
  setChangeState: ({ change, picket }: picketChangeType) => void;
}) => {
  const onClick = ({ picket }: { picket: picketType }) => {
    onChangeState({ change: true, picket });
  };
  const userId = useStore(useMainStore, (state) => state.user.id);
  const { translation } = useTranslation();
  return (
    <div className={`flex h-fit w-full flex-col items-center pb-[20px]`}>
      {userId &&
        pickets.map((e, i) => (
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
                      id: e.id,
                      ownerId: e.ownerId,
                      voteId: e.voteId,
                    },
                  });
                }}
              >
                <Image src={banana} alt={"바나나"} style={{ width: "30px" }} />
                {userId === e.ownerId ? (
                  <div className={`text-xl font-bold`}>
                    {translation(
                      "vote.detail.picket_area.modal.content.modify"
                    )}
                  </div>
                ) : (
                  <div className={`text-xl font-bold`}>
                    {e.price + 1}
                    {translation(
                      "vote.detail.picket_area.modal.content.change"
                    )}
                  </div>
                )}
              </button>
              <button onClick={declarationHandler}>🚨</button>
            </div>
          </div>
        ))}
      <div className={`my-[20px] mb-[150px] h-fit w-full`}>
        <PicketDropzone
          setChangeState={setChangeState}
          change={true}
          position={pickets.length}
          newPicket={true}
        />
      </div>
    </div>
  );
};

export default PicketAreaModalContent;
