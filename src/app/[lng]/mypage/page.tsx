"use client";

import InputNickname from "@/components/user/InputNickname";
import SelectGender from "@/components/user/SelectGenderList";
import SelectAge from "@/components/user/SelectAgeList";
import useChangeLanguagePath from "@/hooks/useChangeLanguagePath";

import PageTitle from "@/components/common/PageTitle";
import { getDictionary } from "get-dictionary";
import CategoryArea from "@/components/store/CategoryArea";
import { useState } from "react";

const Mypage = ({ params: { lng } }: { params: { lng: string } }) => {
  const { messages } = getDictionary(lng);
  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const MYPAGE_CATEGORIES = [
    {
      id: 0,
      label: `${messages.mypage.category.profile}`,
    },
    {
      id: 1,
      label: `${messages.mypage.category.inventory}`,
    },
    {
      id: 2,
      label: `${messages.mypage.category.vote}`,
    },
    {
      id: 3,
      label: `${messages.mypage.category.point}`,
    },
  ];

  return (
    <div className="flex flex-col items-start justify-center xl:justify-between">
      <PageTitle title={messages.mypage.mypage} />
      <CategoryArea
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        categories={MYPAGE_CATEGORIES}
      />
      <InputNickname />
      <SelectGender></SelectGender>
      <SelectAge></SelectAge>
    </div>
  );
};

export default Mypage;
