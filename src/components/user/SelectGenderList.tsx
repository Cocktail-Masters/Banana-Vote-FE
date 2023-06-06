'use client';
import useModifiedUserGenderMutation from '@/hooks/reactQuery/mutation/useModifiedUserGenderMutation';
import useTranslation from '@/hooks/useTranslation';
import { useState } from 'react';
import SelectList, { selectedType } from './SelectList';

type SelectValueType = string;

const SelectGender = () => {
  const { translation } = useTranslation();
  const genderList = [
    { name: translation('mypage.profile.gender.남성'), value: 'Male' },
    { name: translation('mypage.profile.gender.여성'), value: 'Female' },
  ];
  console.log(genderList);
  const [selected, setSelected] = useState(genderList[0]);
  const mutation = useModifiedUserGenderMutation();

  const onChangeSelectedHandler = (select: selectedType<SelectValueType>) => {
    setSelected(select);
    mutation.mutate({ gender: select.value });
  };
  return (
    <div>
      <SelectList<SelectValueType>
        list={genderList}
        selected={selected}
        onChangeHandler={onChangeSelectedHandler}
      />
    </div>
  );
};
export default SelectGender;
