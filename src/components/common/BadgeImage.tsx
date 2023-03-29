/**
 * @author mingyu
 * @description 뱃지 이미지
 */
import React from "react";
import Image from "next/image";
import defaultProfile from "@/assets/images/default_profile.png";

const BadgeImage = ({ badge_image_url }: { badge_image_url: string }) => {
  return (
    <>
      <Image
        className="h-10 w-10 rounded-full"
        src={badge_image_url ? badge_image_url : defaultProfile}
        alt="badge_image"
      />
    </>
  );
};

export default BadgeImage;
