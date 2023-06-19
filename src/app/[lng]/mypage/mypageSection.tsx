"use client";

import CategoryArea from "@/components/store/CategoryArea";
import Selector from "@/components/user/myPageCategory/Selector";
import useTranslation from "@/hooks/useTranslation";
import { useState } from "react";

const MypageSection = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const { translation } = useTranslation();
  const MYPAGE_CATEGORIES = [
    {
      id: 0,
      label: `${translation("mypage.category.profile")}`,
    },
    {
      id: 1,
      label: `${translation("mypage.category.inventory")}`,
    },
    {
      id: 2,
      label: `${translation("mypage.category.vote")}`,
    },
    {
      id: 3,
      label: `${translation("mypage.category.point")}`,
    },
  ];
  return (
    <section className="h-full w-full">
      <CategoryArea
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        categories={MYPAGE_CATEGORIES}
      />
      <div className="mt-4 h-full w-full">
        <Selector id={currentCategory} />
      </div>
    </section>
  );
};
export default MypageSection;
