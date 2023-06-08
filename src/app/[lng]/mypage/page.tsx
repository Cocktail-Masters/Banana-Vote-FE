import SelectGender from '@/components/user/SelectGenderList';
import SelectAge from '@/components/user/SelectAgeList';
import useChangeLanguagePath from '@/hooks/useChangeLanguagePath';

const Mypage = () => {
  return (
    <>
      <div className='flex items-start justify-center xl:justify-between'>
        <button>마이페이지</button>
        <SelectGender></SelectGender>
        <SelectAge></SelectAge>
      </div>
    </>
  );
};

export default Mypage;
