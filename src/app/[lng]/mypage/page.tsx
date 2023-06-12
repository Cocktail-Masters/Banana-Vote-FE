import InputNickname from '@/components/user/InputNickname';
import SelectGender from '@/components/user/SelectGenderList';
import SelectAge from '@/components/user/SelectAgeList';
import useChangeLanguagePath from '@/hooks/useChangeLanguagePath';

import PageTitle from '@/components/common/PageTitle';
import { getDictionary } from 'get-dictionary';

const Mypage = ({ params: { lng } }: { params: { lng: string } }) => {
  const { messages } = getDictionary(lng);

  return (
    <div className='flex flex-col items-start justify-center xl:justify-between'>
      <PageTitle title={messages.mypage.mypage} />
      <InputNickname />
      <div className='flex w-full justify-between'>
        <SelectGender></SelectGender>
        <SelectAge></SelectAge>
      </div>
    </div>
  );
};

export default Mypage;
