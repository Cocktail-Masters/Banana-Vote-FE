"use client";
import { useState } from "react";
import useSelectData from "@hooks/useSelectData";
import VoteDnd from "@components/vote/dnd/VoteDnd";
import VoteOptionToggleButton from "./VoteOptionToggleButton";
import VoteCreatTag from "@components/tag/VoteCreateTag";
import {
  useRegistrationMutation,
  voteRegistrationItemType,
} from "@/hooks/reactQuery/mutation/useVoteRegistrationMutation";
import uploadFirebase from "@/common/uploadFirebase";

import DatePicker from "@/components/date/Datepicker";
import CreateVoteContent from "./CreateVoteContent";
import { createVoteItemType } from "@/types";
import { translatedText } from "@/common/translation";
import { useParams } from "next/navigation";

const CreateVote = () => {
  const { lng } = useParams();
  const { state: isAnonymouse, onClickHandler: setIsAnonymouse } =
    useSelectData<boolean>(true);
  const { state: isDisclosure, onClickHandler: setIsDisclosure } =
    useSelectData<boolean>(false);
  const { state: endDate, setState: setEndDate } = useSelectData<Date>(
    new Date()
  );
  const [voteTitle, setVoteTitle] = useState("");
  const [voteItems, setVoteItems] = useState<createVoteItemType[]>([]);
  const [content, setContent] = useState<string>("");
  const [tagArray, setTagArray] = useState<string[]>([]);

  const { mutate } = useRegistrationMutation({ queryKey: ["createVote"] });

  const onClickVoteAddHandler = async () => {
    const uploadUrls = await Promise.all(
      voteItems.map((v) => (v.imageFile ? uploadFirebase(v.imageFile) : ""))
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
      { createVoteData: sendData },
      {
        onSuccess: () => {
          alert("성공함");
        },
      }
    );
  };

  return (
    <div className={"flex h-full w-full justify-center"}>
      <div className="m-1 flex w-[1200px] flex-col lg:m-10">
        <div className="my-4 mr-3 ml-3 flex text-2xl font-bold">
          {translatedText({
            lng,
            textKey: "vote.create.vote_generation",
          })}
        </div>
        <div className="flex flex-col gap-8 rounded-2xl border border-gray-300 p-10">
          <div className="flex flex-col gap-10 lg:flex-row xl:flex-row">
            <VoteOptionToggleButton
              title={translatedText({
                lng,
                textKey: "vote.create.is_disclosure",
              })}
              isData={isDisclosure}
              onClickHandler={setIsDisclosure}
              toggleContent={[
                {
                  data: true,
                  content: translatedText({
                    lng,
                    textKey: "vote.create.disclosure_true",
                  }),
                },
                {
                  data: false,
                  content: translatedText({
                    lng,
                    textKey: "vote.create.disclosure_false",
                  }),
                },
              ]}
            />
            <VoteOptionToggleButton
              title={translatedText({
                lng,
                textKey: "vote.create.is_anonymouse",
              })}
              isData={isAnonymouse}
              onClickHandler={setIsAnonymouse}
              toggleContent={[
                {
                  data: false,
                  content: translatedText({
                    lng,
                    textKey: "vote.create.anonymouse_true",
                  }),
                },
                {
                  data: true,
                  content: translatedText({
                    lng,
                    textKey: "vote.create.anonymouse_false",
                  }),
                },
              ]}
            />
            <DatePicker
              title={translatedText({
                lng,
                textKey: "vote.create.vote_deadline",
              })}
              onDateChange={setEndDate}
              endDate={endDate}
            />
          </div>
          <input
            className=" placeholder-font-bold h-16 rounded-2xl border-2 border-solid px-6 text-2xl placeholder-gray-400 outline-secondary-orange"
            type="text"
            placeholder={translatedText({
              lng,
              textKey: "vote.create.title",
            })}
            onChange={(e) => setVoteTitle(e.target.value)}
          />

          <hr className="border-b-7 rounded-xl border-gray-300" />
          <VoteDnd voteItems={voteItems} setVoteItems={setVoteItems} />
          <CreateVoteContent content={content} setContent={setContent} />
          <VoteCreatTag tagArray={tagArray} setTagArray={setTagArray} />
        </div>
        <div className="m-10 flex justify-end">
          <button
            onClick={onClickVoteAddHandler}
            className="h-12 w-32 rounded-lg bg-yellow-400 px-4 py-2 text-xl font-bold drop-shadow-lg hover:bg-white"
          >
            {translatedText({
              lng,
              textKey: "vote.create.registration",
            })}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateVote;
