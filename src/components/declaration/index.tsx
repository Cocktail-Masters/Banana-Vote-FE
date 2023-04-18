"use client";
import { ReactElement, useState } from "react";
import Modal from "../common/modal";

const DeclarationModal = ({
  onClose,
  title,
  type,
}: {
  title: string;
  type: number;
  onClose: () => void;
}) => {
  const [select, setSelect] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelect((prev) => {
      return e.target.value;
    });
  };
  return (
    <Modal onClose={onClose}>
      <div
        className={`flex h-full w-full flex-col items-center justify-center`}
      >
        <div className="flex w-full justify-center">🚨신고🚨</div>
        <div className="flex w-full justify-center">{title}</div>
        <div className="mb-4 flex w-full justify-center">
          신고 하기 위한 사유를 선택해주세요.
        </div>
        <div className="flex w-full flex-col items-center justify-center text-sm">
          <div className="w-[250px]">
            <input
              checked={select === "스팸, 광고"}
              type="radio"
              value={"스팸, 광고"}
              onChange={onChange}
            ></input>
            스팸, 광고
          </div>
          <div className="w-[250px]">
            <input
              checked={select === "음란물"}
              type="radio"
              value={"음란물"}
              onChange={onChange}
            ></input>
            음란물
          </div>
          <div className="w-[250px]">
            <input
              type="radio"
              checked={select === "상대방에 대한 심각한 비난"}
              value={"상대방에 대한 심각한 비난"}
              onChange={onChange}
            ></input>
            상대방에 대한 심각한 비난
          </div>
          <div className="mb-4 w-[250px]">
            <input
              checked={select === "기타"}
              type="radio"
              value={"기타"}
              onChange={onChange}
            ></input>
            기타
          </div>
          <textarea
            className={`w-full max-w-[350px] rounded-2xl p-2 disabled:bg-[#D9D9D9]`}
            placeholder={"신고 사유를 상세하게 작성해 주십시오."}
            disabled={select !== "기타"}
          />
        </div>
        <button
          className={"mt-6 mb-4 h-11 w-24 rounded-2xl bg-bg-button-yellow"}
        >
          제출
        </button>
      </div>
    </Modal>
  );
};

export default DeclarationModal;
