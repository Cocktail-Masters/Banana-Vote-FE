"use client";

import { useState } from "react";
import useSelectData from "@hooks/useSelectData";
import { SingleDatepicker } from "../datepicker/Datepicker";
import VoteDnd from "./dnd/VoteDnd";
import VoteOptionToggleButton from "./VoteOptionToggleButton";
import { nanoid } from "nanoid";
import VoteCreatTag from "../tag/VoteCreateTag";
import {
  useRegistrationMutation,
  voteRegistrationItemType,
} from "@/hooks/reactQuery/mutation/useRegistrationMutation";
import uploadFirebase from "@/common/uploadFirebase";

export type voteItemType = {
  id: string;
  imageFile: File | null;
  title: string;
};
export const getDefaultVoteItem = (): voteItemType => {
  return {
    id: nanoid(),
    imageFile: null,
    title: "",
  };
};
export type voteItemTypes = voteItemType[];

const CreateVote = () => {
  const { state: isAnonymouse, onClickHandler: setIsAnonymouse } =
    useSelectData<boolean>(true);
  const { state: isDisclosure, onClickHandler: setIsDisclosure } =
    useSelectData<boolean>(false);
  const { state: endDate, setState: setEndDate } = useSelectData<Date>(
    new Date()
  );
  const [voteTitle, setVoteTitle] = useState("");
  const [voteItems, setVoteItems] = useState<voteItemType[]>([]);
  const [content, setContent] = useState<string>("");
  const [tagArray, setTagArray] = useState<string[]>([]);

  const { mutate } = useRegistrationMutation({ queryKey: ["createVote"] });

  return (
    <div className="flex flex-col m-10">
      <div className="flex text-2xl font-bold my-4">투표생성</div>
      <div className="flex flex-col gap-8 rounded-2xl border border-gray-300 shadow-md p-10">
        <div className="flex flex-col lg:flex-row xl:flex-row gap-10">
          <VoteOptionToggleButton
            title={"공개 여부"}
            isData={isDisclosure}
            onClickHandler={setIsDisclosure}
            toggleContent={[
              { data: true, content: "공개" },
              { data: false, content: "비공개" },
            ]}
          />
          <VoteOptionToggleButton
            title={"로그인 여부"}
            isData={isAnonymouse}
            onClickHandler={setIsAnonymouse}
            toggleContent={[
              { data: false, content: "실명" },
              { data: true, content: "익명" },
            ]}
          />
          <div className="flex items-center">
            <div className="w-40">투표 종료일</div>
            <SingleDatepicker
              name="date-input"
              date={endDate}
              onDateChange={setEndDate}
            />
          </div>
        </div>
        <input
          className=" outline-[#FFA45B] border-2 border-solid rounded-2xl h-16 placeholder-font-bold placeholder-gray-400 text-2xl px-6"
          type="text"
          placeholder="제목"
          onChange={(e) => setVoteTitle(e.target.value)}
        />

        <hr className="border-gray-300 border-b-7 rounded-xl" />
        <VoteDnd voteItems={voteItems} setVoteItems={setVoteItems} />
        <div className="w-full">
          <div className="relative w-full min-w-[200px]">
            <textarea
              className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#FFA45B] focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 shadow-md"
              placeholder=" "
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f69240] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#FFA45B] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#FFA45B] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Content
            </label>
          </div>
        </div>
        <VoteCreatTag tagArray={tagArray} setTagArray={setTagArray} />
      </div>
      <div className="flex justify-end m-10">
        <button
          onClick={async () => {
            const uploadUrls = await Promise.all(
              voteItems.map((v) =>
                v.imageFile ? uploadFirebase(v.imageFile) : ""
              )
            );
            const newVoteItems: voteRegistrationItemType[] = [];
            for (let i = 0; i < voteItems.length; i++) {
              newVoteItems.push({
                title: voteItems[i]["title"],
                imageUrl: uploadUrls[i],
              });
            }
            const sendData = {
              title: voteTitle,
              is_disclosure: isDisclosure,
              is_anonymouse: isAnonymouse,
              end_date: endDate.toString(),
              vote_items: newVoteItems,
              content: content,
              tags: tagArray,
            };
            console.log(sendData);
            mutate(
              { uri: "test", sendData },
              {
                onSuccess: () => {
                  console.log("성공함");
                },
              }
            );
          }}
          className="rounded-lg w-32 h-12 bg-yellow-400 font-bold text-xl px-4 py-2 hover:bg-white shadow-base"
        >
          등록
        </button>
      </div>
    </div>
  );
};
export default CreateVote;
