"use client";

import { useStore } from "@/hooks/useStore";
import { useMainStore } from "@/store";
import { picketType } from "@/types";
import Image from "next/image";
import PicketDropzone from "./PicketDropzone";
import { picketChangeType } from "./PicketModal";

type changeStateType = {
  setChangeState: ({ change, picket }: picketChangeType) => void;
};

const SelectPicketImage = ({
  picketImageUrl,
  position,
  price,
  ownerId,
  setChangeState,
}: picketType & Pick<changeStateType, "setChangeState">) => {
  const user = useStore(useMainStore, (store) => store.user);
  return (
    <div className={`mb-[10px] h-fit w-full`}>
      <div className={`mb-[10px] flex min-h-[300px] w-full justify-center`}>
        <div className={`relative block w-[800px]`}>
          <Image
            src={picketImageUrl}
            alt={"picket Image"}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 800px,
              800px"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      {user !== undefined && (
        <PicketDropzone
          change={true}
          price={price}
          onwerId={ownerId}
          position={position}
          newPicket={user.id === ownerId ? false : true}
          setChangeState={setChangeState}
        />
      )}
    </div>
  );
};

export default SelectPicketImage;
