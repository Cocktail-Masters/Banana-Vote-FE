/**
 * @author mingyu
 * @description 카드 상단 이미지 영역
 */
import Image from "next/image";
import banana from "@/assets/icons/banana_svgrepo.com.svg";

type cardImageProps = {
  image_url?: string;
  imgRef?: React.RefObject<HTMLImageElement>;
};

const CardImage = ({ image_url, imgRef }: cardImageProps) => {
  return (
    <div className="h-2/3 w-full overflow-hidden rounded-t-2xl border-b border-inherit bg-white">
      <Image
        src={!image_url || image_url.length < 1 ? banana : image_url}
        className="flex h-full w-full items-center justify-center"
        alt="default item image"
        width={800}
        height={600}
        ref={imgRef}
      />
    </div>
  );
};

export default CardImage;
