/**
 * @author mingyu
 * @description 뱃지 이미지
 */
import React from "react";
import Image from "next/image";
import defaultProfile from "@/assets/images/default_profile.png";

type badgeImageProps = {
  userId: number;
  badgeImageUrl?: string;
};

const BadgeImage = ({ userId, badgeImageUrl }: badgeImageProps) => {
  /**
   * @todo 뱃지 이미지 클릭 시 해당 사용자 정보 화면으로 이동
   */
  const handleBadgeClick = () => {
    console.log("user id : " + userId);
  };

  return (
    <>
      <Image
        id={`badge-image-${userId}`}
        className="badge h-10 w-10 cursor-pointer rounded-full"
        src={badgeImageUrl ? badgeImageUrl : defaultProfile}
        alt="badge_image"
        width={1000}
        height={1000}
        onClick={() => handleBadgeClick()}
      />
    </>
  );
};

export default BadgeImage;
