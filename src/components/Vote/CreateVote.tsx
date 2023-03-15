"use client";
import { Box, Button, Divider, Flex, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import useSelectData from "@hooks/useSelectData";
import { SingleDatepicker } from "../datepicker/Datepicker";
import VoteDnd from "./dnd/VoteDnd";
import VoteOptionToggleButton from "./VoteOptionToggleButton";
import UploadImage from "../UploadImage";
import { nanoid } from "nanoid";
import VoteCreatTag from "../tag/VoteCreateTag";
import { voteRegistrationType } from "@/hooks/reactQuery/mutation/useRegistrationMutation";

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

  return (
    <Flex flexDirection={"column"} margin={"10px"}>
      <Box fontSize={"28px"} fontWeight={700} margin={"10px"}>
        투표생성
      </Box>
      <Flex
        flexDirection={"column"}
        gap={8}
        borderRadius={"20px"}
        border={"1px solid #D9D9D9"}
        boxShadow={"base"}
        padding={"10px"}
      >
        <Flex
          gap={"10px"}
          flexDirection={{ base: "column", lg: "row", xl: "row" }}
        >
          <Flex width={"260px"}>
            <VoteOptionToggleButton
              title={"공개 여부"}
              isData={isDisclosure}
              onClickHandler={setIsDisclosure}
              toggleContent={[
                { data: true, content: "공개" },
                { data: false, content: "비공개" },
              ]}
            />
          </Flex>
          <VoteOptionToggleButton
            title={"로그인 여부"}
            isData={isAnonymouse}
            onClickHandler={setIsAnonymouse}
            toggleContent={[
              { data: false, content: "실명" },
              { data: true, content: "익명" },
            ]}
          />
          <Flex alignItems="center">
            <Box width={"150px"} padding="10px">
              투표 종료일
            </Box>
            <SingleDatepicker
              name="date-input"
              date={endDate}
              onDateChange={setEndDate}
            />
          </Flex>
        </Flex>
        <Input
          borderRadius={16}
          h="60px"
          focusBorderColor="#FFA45B"
          placeholder="제목"
          onChange={(e) => setVoteTitle(e.target.value)}
          fontSize={28}
          _placeholder={{
            fontWeight: 700,
          }}
        />
        <Divider
          borderColor={"#D9D9D9"}
          borderBottomWidth={"7px"}
          borderRadius={"20px"}
        />
        <VoteDnd voteItems={voteItems} setVoteItems={setVoteItems} />
        <Textarea
          borderRadius={"20px"}
          boxShadow={"base"}
          onChange={(e) => setContent(e.target.value)}
        ></Textarea>
        <VoteCreatTag tagArray={tagArray} setTagArray={setTagArray} />
      </Flex>
      <Flex justifyContent="flex-end" margin={"10px"}>
        <Button
          onClick={() => {
            console.log("isDisclosure", isDisclosure);
            console.log("isAnonymouse", isAnonymouse);
            console.log("end_date", endDate);
            console.log("voteTitle", voteTitle);
            console.log("voteItems", voteItems);
            console.log("content", content);
            console.log("tagArray", tagArray);

            const temp: voteRegistrationType = {
              title: voteTitle,
              is_disclosure: isDisclosure,
              is_anonymouse: isAnonymouse,
              end_date: endDate.toString(),
              vote_items: voteItems,
              content: content,
              tags: tagArray,
            };
          }}
          borderRadius={"12px"}
          w={"130px"}
          h={"50px"}
          boxShadow={"base"}
          background={"#FFA45B"}
          fontWeight={"700"}
          fontSize={"25px"}
          _hover={{ bg: "white" }}
        >
          등록
        </Button>
      </Flex>
    </Flex>
  );
};
export default CreateVote;
