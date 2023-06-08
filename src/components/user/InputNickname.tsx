"use client";

import { useNicknameMutation } from "@/hooks/reactQuery/mutation/useNicknameMutation";
import useTranslation from "@/hooks/useTranslation";
import { useState } from "react";

const InputNickname = ({
  wrapper = "flex h-full w-full items-center",
  inputStyle = "w-3/4",
  buttonStyle = "w-24 h-10 rounded-lg border-gray-300 border bg-white dark:bg-black ml-3 drop-shadow-xl",
}: {
  wrapper?: string;
  inputStyle?: string;
  buttonStyle?: string;
}) => {
  const { translation } = useTranslation();
  const { mutate } = useNicknameMutation();
  const [nickname, setNickname] = useState<string>("");

  const onClick = () => {
    if (nickname !== undefined && nickname.split("").length > 0) {
      mutate({ nickname });
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setNickname(e.target.value);
    }
  };

  return (
    <div className={wrapper}>
      <div className={`mr-auto`}>{translation("mypage.profile.nickname")}</div>
      <input
        type="text"
        id="text"
        className={`block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 drop-shadow-xl focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 ${inputStyle}`}
        required
        onChange={onChange}
      ></input>
      <button className={`${buttonStyle} text-center`} onClick={onClick}>
        {translation("mypage.profile.change")}
      </button>
    </div>
  );
};
export default InputNickname;
