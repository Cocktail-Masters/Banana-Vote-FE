/**
 * @author mingyu
 * @description 뱃지 이미지
 */
import React from "react";
import Image from "next/image";
import defaultProfile from "@/assets/images/default_profile.png";

type badgeImageProps = {
  user_id: number;
  badge_image_url?: string;
};

const BadgeImage = ({ user_id, badge_image_url }: badgeImageProps) => {
  /**
   * @todo 뱃지 이미지 클릭 시 해당 사용자 정보 화면으로 이동
   */
  const handleBadgeClick = () => {
    console.log("user id : " + user_id);
  };

  return (
    <>
      <Image
        id={`badge-image-${user_id}`}
        className="badge h-10 w-10 cursor-pointer rounded-full"
        src={badge_image_url ? badge_image_url : defaultProfile}
        alt="badge_image"
        width={1000}
        height={1000}
        onClick={() => handleBadgeClick()}
      />
    </>
  );
};

export default BadgeImage;
