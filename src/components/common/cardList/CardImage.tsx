/**
 * @author mingyu
 * @description 카드 상단 이미지 영역
 */
import Image from "next/image";
import banana from "@/assets/icons/banana_svgrepo.com.svg";

type cardImageProps = {
  imageUrl?: string;
  imgRef?: React.RefObject<HTMLImageElement>;
};

const CardImage = ({ imageUrl, imgRef }: cardImageProps) => {
  return (
    <div className="h-2/3 w-full overflow-hidden rounded-t-2xl border-b border-border bg-bg-feed dark:border dark:border-border-dark dark:bg-bg-feed-dark">
      <Image
        src={!imageUrl || imageUrl.length < 1 ? banana : imageUrl}
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
