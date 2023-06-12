'use client';
import useModifiedUserGenderMutation from '@/hooks/reactQuery/mutation/useModifiedUserGenderMutation';
import useTranslation from '@/hooks/useTranslation';
import { useState } from 'react';
import SelectList, { selectedType } from './SelectList';

type SelectValueType = 'MALE' | 'FEMALE';

const SelectGender = () => {
  const { translation } = useTranslation();
  const genderList: selectedType<SelectValueType>[] = [
    { name: translation('mypage.profile.gender.남성'), value: 'MALE' },
    { name: translation('mypage.profile.gender.여성'), value: 'FEMALE' },
  ];

  const [selected, setSelected] = useState(genderList[0]);
  const mutation = useModifiedUserGenderMutation();

  const onClickSelectedHandler = (select: selectedType<SelectValueType>) => {
    mutation.mutate({ gender: select.value });
  };

  return (
    <div>
      <SelectList<SelectValueType>
        list={genderList}
        selected={selected}
        setSelected={setSelected}
        callback={onClickSelectedHandler}
      />
    </div>
  );
};
export default SelectGender;
