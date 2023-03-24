"use client";

import { useState } from "react";
import useSelectData from "@hooks/useSelectData";
import VoteDnd from "@components/vote/dnd/VoteDnd";
import VoteOptionToggleButton from "./VoteOptionToggleButton";
import { nanoid } from "nanoid";
import VoteCreatTag from "@components/tag/VoteCreateTag";
import {
  useRegistrationMutation,
  voteRegistrationItemType,
} from "@/hooks/reactQuery/mutation/useRegistrationMutation";
import uploadFirebase from "@/common/uploadFirebase";

import DatePicker from "@/components/datepicker/DatePicker";
import CreateVoteContent from "./CreateVoteContent";

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
    <div className={"flex h-full w-full justify-center"}>
      <div className="m-1 flex w-[1200px] flex-col lg:m-10">
        <div className="my-4 mr-3 ml-3 flex text-2xl font-bold">투표생성</div>
        <div className="flex flex-col gap-8 rounded-2xl border border-gray-300 p-10">
          <div className="flex flex-col gap-10 lg:flex-row xl:flex-row">
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
            <DatePicker
              title={"투표 마감일"}
              onDateChange={setEndDate}
              endDate={endDate}
            />
          </div>
          <input
            className=" placeholder-font-bold h-16 rounded-2xl border-2 border-solid px-6 text-2xl placeholder-gray-400 outline-secondary-orange"
            type="text"
            placeholder="제목"
            onChange={(e) => setVoteTitle(e.target.value)}
          />

          <hr className="border-b-7 rounded-xl border-gray-300" />
          <VoteDnd voteItems={voteItems} setVoteItems={setVoteItems} />
          <CreateVoteContent setContent={setContent} />
          <VoteCreatTag tagArray={tagArray} setTagArray={setTagArray} />
        </div>
        <div className="m-10 flex justify-end">
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
              mutate(
                { uri: "test", sendData },
                {
                  onSuccess: () => {
                    alert("성공함");
                  },
                }
              );
            }}
            className="h-12 w-32 rounded-lg bg-yellow-400 px-4 py-2 text-xl font-bold drop-shadow-lg hover:bg-white"
          >
            등록
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateVote;
