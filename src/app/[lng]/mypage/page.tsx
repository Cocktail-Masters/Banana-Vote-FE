import SelectGender from '@/components/user/SelectGenderList';
import SelectAge from '@/components/user/SelectAgeList';

const Mypage = () => {
  return (
    <>
      <div className='flex items-start justify-center xl:justify-between'>
        <div>마이페이지</div>
        <SelectGender></SelectGender>
        <SelectAge></SelectAge>
      </div>
    </>
  );
};

export default Mypage;
