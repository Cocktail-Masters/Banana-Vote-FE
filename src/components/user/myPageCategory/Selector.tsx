"use client";
import InputNickname from "@/components/user/myPageCategory/InputNickname";
import SelectGender from "@/components/user/myPageCategory/SelectGenderList";
import SelectAge from "@/components/user/myPageCategory/SelectAgeList";
import useTranslation from "@/hooks/useTranslation";
import useChangeLanguagePath from "@/hooks/useChangeLanguagePath";
const Selector = ({ id }: { id: number }) => {
  const { translation } = useTranslation();

  switch (id) {
    case 0:
      return (
        <div className="h-full w-full">
          <div className="mb-10 flex w-1/2 ">
            <div className="flex w-full items-center">
              <div className={`w-28`}>
                {translation("mypage.profile.nickname")}
              </div>
              <InputNickname />
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex w-1/2 items-center">
              <div className="w-24">
                {translation("mypage.profile.age.나이")}
              </div>
              <SelectGender></SelectGender>
            </div>
            <div className="flex w-1/2 items-center">
              <div className="w-24">
                {translation("mypage.profile.gender.성별")}
              </div>
              <SelectAge></SelectAge>
            </div>
          </div>
        </div>
      );
    case 1:
      return <div>인벤토리</div>;
    case 2:
      return <div>투표</div>;
    case 3:
      return <div>포인트</div>;
    default:
      return null;
  }
};

export default Selector;
