"use client";
import { usePredictionMutation } from "@/hooks/reactQuery/mutation/useReportMutation";
import useTranslation from "@/hooks/useTranslation";
import { useParams } from "next/navigation";
import { ChangeEvent, ReactElement, useState } from "react";
import Modal from "../common/modal";
import ModalDescription from "../common/modal/Description";
import ModalHeader from "../common/modal/Header";

const DeclarationModal = ({
  onClose,
  title,
  type,
  id,
}: {
  title: string;
  type: number;
  id: number;
  onClose: () => void;
}) => {
  const [select, setSelect] = useState<string>("");
  const [etc, setEtc] = useState<string>("");
  const { translation } = useTranslation();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "광고") {
      setSelect((prev) => {
        return "ADVERTISEMENT";
      });
      setEtc("");
    } else if (e.target.value === "음란물") {
      setSelect((prev) => {
        return "ADULT";
      });
      setEtc("");
    } else if (e.target.value === "언어폭력") {
      setSelect((prev) => {
        return "VIOLENCE";
      });
      setEtc("");
    } else if (e.target.value === "기타") {
      setSelect((prev) => {
        return "ETC";
      });
    }
  };
  const reportContentOnChangeHandler = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEtc(e.currentTarget.value);
  };

  const { mutate } = usePredictionMutation();
  const onClick = () => {
    if (type === 0) {
      const report = {
        reportedContentType: "VOTE",
        reportedContentId: id,
        reportedReasonType: select,
        reportDetail: etc,
      };
      mutate({ report });
    } else if (type === 1) {
      const report = {
        reportedContentType: "OPINION",
        reportedContentId: id,
        reportedReasonType: select,
        reportDetail: etc,
      };
      mutate({ report });
    } else if (type === 2) {
      const report = {
        reportedContentType: "PICKET",
        reportedContentId: id,
        reportedReasonType: select,
        reportDetail: etc,
      };
      mutate({ report });
    } else if (type === 3) {
      console.log(etc);
      const report = {
        reportedContentType: "MEGAPHONE",
        reportedContentId: id,
        reportedReasonType: select,
        reportDetail: etc,
      };
      mutate({ report });
    }
  };
  return (
    <Modal
      className={`w-full max-w-xl rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-bg-feed-dark dark:text-text-normal-dark`}
      onClose={onClose}
    >
      <ModalHeader className="relative mb-4 flex justify-center text-xl font-extrabold leading-6 text-gray-900">
        <div className="flex w-full justify-center dark:text-white">
          🚨{translation("vote.detail.item.declaration_modal.title")}🚨
        </div>
        <button
          id="picketModalCloseButton"
          className={`absolute top-1 right-3`}
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 transition-colors duration-300 dark:text-text-normal-dark"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </ModalHeader>
      <ModalDescription>
        <div
          className={`flex h-full w-full flex-col items-center justify-center`}
        >
          <div className="flex w-full justify-center">{title}</div>
          <div className="mb-4 flex w-full justify-center">
            {translation("vote.detail.item.declaration_modal.content")}
          </div>
          <div className="flex w-full flex-col items-center justify-center text-sm">
            <div className="w-[250px]">
              <input
                checked={select === "ADVERTISEMENT"}
                type="radio"
                value={"광고"}
                onChange={onChange}
                className={"mr-1"}
              ></input>
              {translation("vote.detail.item.declaration_modal.type_spam")}
            </div>
            <div className="w-[250px]">
              <input
                checked={select === "ADULT"}
                type="radio"
                value={"음란물"}
                onChange={onChange}
                className={"mr-1"}
              ></input>
              {translation("vote.detail.item.declaration_modal.type_porn")}
            </div>
            <div className="w-[250px]">
              <input
                type="radio"
                checked={select === "VIOLENCE"}
                value={"언어폭력"}
                onChange={onChange}
                className={"mr-1"}
              ></input>
              {translation("vote.detail.item.declaration_modal.type_criticism")}
            </div>
            <div className="mb-4 w-[250px]">
              <input
                checked={select === "ETC"}
                type="radio"
                value={"기타"}
                onChange={onChange}
                className={"mr-1"}
              ></input>
              {translation("vote.detail.item.declaration_modal.type_etc")}
            </div>
            <textarea
              className={`h-24 w-full max-w-[350px] resize-none rounded-2xl border p-2 text-black disabled:bg-[#D9D9D9]`}
              placeholder={translation(
                "vote.detail.item.declaration_modal.text_area"
              )}
              value={etc}
              onChange={reportContentOnChangeHandler}
              disabled={select !== "ETC"}
            />
          </div>
          <button
            onClick={onClick}
            className={
              "mt-6 mb-4 h-11 w-24 rounded-2xl bg-bg-button-yellow dark:text-black"
            }
          >
            {translation("vote.detail.item.prediction_modal.submit")}
          </button>
        </div>
      </ModalDescription>
    </Modal>
  );
};

export default DeclarationModal;
