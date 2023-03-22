import { picketType } from "@/types";
import Image from "next/image";
import PicketDropzone from "./PicketDropzone";

const SelectPicketImage = ({
  picket_image_url,
  position,
  price,
}: picketType) => {
  return (
    <div className={`mb-[10px] h-fit w-full`}>
      <div className={`mb-[10px] min-h-[200px] w-full`}>
        <Image
          src={picket_image_url}
          alt={"picket Image"}
          width={1200}
          height={200}
          style={{
            height: "200px",
            width: "auto",
            maxWidth: "800",
            margin: "auto",
          }}
        />
      </div>
      <PicketDropzone change={true} price={price} position={position} />
    </div>
  );
};

export default SelectPicketImage;
