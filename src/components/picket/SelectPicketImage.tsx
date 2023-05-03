import { picketType } from "@/types";
import Image from "next/image";
import PicketDropzone from "./PicketDropzone";

const SelectPicketImage = ({ picketImageUrl, position, price }: picketType) => {
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
      <PicketDropzone change={true} price={price} position={position} />
    </div>
  );
};

export default SelectPicketImage;
