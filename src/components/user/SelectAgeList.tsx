'use client';
import { useState } from 'react';
import useTranslation from '@/hooks/useTranslation';
import SelectList, { selectedType } from './SelectList';
import useModifiedUserAgeMutation from '@/hooks/reactQuery/mutation/useModifiedUserAgeMutation';

type SelectValueType = number;

const SelectAge = () => {
  const { translation } = useTranslation();
  const ageList = [
    { name: translation('mypage.profile.age.10대'), value: 10 },
    { name: translation('mypage.profile.age.20대'), value: 20 },
    { name: translation('mypage.profile.age.30대'), value: 30 },
    { name: translation('mypage.profile.age.40대'), value: 40 },
    { name: translation('mypage.profile.age.50대'), value: 50 },
    { name: translation('mypage.profile.age.60대 이상'), value: 60 },
  ];
  const [selected, setSelected] = useState(ageList[0]);
  const mutation = useModifiedUserAgeMutation();

  const onChangeSelectedHandler = (select: selectedType<SelectValueType>) => {
    setSelected(select);
    mutation.mutate({ age: select.value });
  };
  return (
    <>
      <div></div>
      <SelectList<SelectValueType>
        list={ageList}
        selected={selected}
        onChangeHandler={onChangeSelectedHandler}
      />
    </>
  );
};
export default SelectAge;
