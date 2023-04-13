"use client";
import { useEffect, useState } from "react";
import useSelectData from "@hooks/useSelectData";
import VoteDnd from "@components/vote/dnd/VoteDnd";
import VoteOptionToggleButton from "./VoteOptionToggleButton";
import VoteCreatTag from "@components/tag/VoteCreateTag";
import {
  fetchCreateVote,
  voteRegistrationItemType,
} from "@/hooks/reactQuery/mutation/useVoteRegistrationMutation";
import uploadFirebase from "@/common/uploadFirebase";

import DatePicker from "@/components/date/Datepicker";
import CreateVoteContent from "./CreateVoteContent";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loading from "@/components/Loading";
import { createVoteItemTypes, voteItemType } from "@/types";
import { getVoteItemsFromResponse } from "@/common/getVoteItem";
import { translatedText } from "@/common/translation";
import { useParams } from "next/navigation";

type voteResponseType = {
  id: string;
  title: string;
  content: string;
  image_url: string;
  end_date: string;
  is_event: boolean;
  is_anonymouse: boolean;
  is_public: boolean;
  is_closed: boolean;
  tags: string[];
  vote_items: voteItemType[];
};

type paramsType = {
  detail: string;
  lng: string;
};

const CreateEventVote = ({ data }: { data: voteResponseType }) => {
  const { lng } = useParams();
  const { state: isEvent, onClickHandler: setIsEvent } = useSelectData<boolean>(
    data.is_anonymouse
  );
  const { state: isDisclosure, onClickHandler: setIsDisclosure } =
    useSelectData<boolean>(data.is_closed);
  const { state: endDate, setState: setEndDate } = useSelectData<Date>(
    new Date(data.end_date)
  );
  const [voteTitle, setVoteTitle] = useState(data.title);
  const [voteItems, setVoteItems] = useState<createVoteItemTypes>(
    data.vote_items.map((v) => getVoteItemsFromResponse(v))
  );
  const [content, setContent] = useState<string>(data.content);
  const [tagArray, setTagArray] = useState<string[]>(data.tags);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: fetchCreateVote,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["createEventVote"]);
    },
    onError: (error) => {},
  });

  const onClickHandler = async () => {
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
      is_Event: isEvent,
      is_anonymouse: false,
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
                textKey: "vote.create.is_event",
              })}
              isData={isEvent}
              onClickHandler={setIsEvent}
              toggleContent={[
                {
                  data: false,
                  content: translatedText({
                    lng,
                    textKey: "vote.create.event_true",
                  }),
                },
                {
                  data: true,
                  content: translatedText({
                    lng,
                    textKey: "vote.create.event_false",
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
            className=" placeholder-font-bold h-16 rounded-2xl border-2 border-solid px-6 text-2xl text-text-normal placeholder-gray-400 outline-secondary-orange"
            type="text"
            placeholder="제목"
            value={voteTitle}
            onChange={(e) => setVoteTitle(e.target.value)}
          />

          <hr className="border-b-7 rounded-xl border-gray-300" />
          <VoteDnd voteItems={voteItems} setVoteItems={setVoteItems} />
          <CreateVoteContent content={content} setContent={setContent} />
          <VoteCreatTag tagArray={tagArray} setTagArray={setTagArray} />
        </div>
        <div className="m-10 flex justify-end">
          <button
            onClick={onClickHandler}
            className="h-12 w-32 rounded-lg bg-yellow-400 px-4 py-2 text-xl font-bold text-text-normal drop-shadow-lg hover:bg-white"
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

const CreateEventVoteWrapper = ({ params }: { params: paramsType }) => {
  const { data, isLoading } = useQuery<voteResponseType>(
    ["event", "create", params?.detail],
    async () => {
      const response = await fetch(`/api/events/edit/${params.detail}`);
      return response.json();
    }
  );

  if (isLoading) {
    return (
      <div className={"flex h-full w-full items-center justify-center"}>
        <Loading />
      </div>
    );
  }
  if (data === undefined) {
    return <div>ERROR</div>;
  }
  return <CreateEventVote data={data} />;
};
export default CreateEventVoteWrapper;
