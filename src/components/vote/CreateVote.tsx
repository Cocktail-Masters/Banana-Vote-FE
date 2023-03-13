"use client";
import { Box, Button, Divider, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import useSelectData from "@hooks/useSelectData";
import { SingleDatepicker } from "../datepicker/Datepicker";
import VoteDnd from "./dnd/VoteDnd";
import VoteOptionToggleButton from "./VoteOptionToggleButton";
import UploadImage from "../UploadImage";

export type voteItemType = { image: string; content: string };
export type voteItemTypes = voteItemType[];

const CreateVote = () => {
  const { state: isOpen, onClickHandler: setIsOpen } =
    useSelectData<boolean>(true);
  const { state: isLogin, onClickHandler: setIsLogin } =
    useSelectData<boolean>(false);
  const { state: date, setState: setDate } = useSelectData<Date>(new Date());

  const [voteItems, setVoteItems] = useState<voteItemType[]>([]);

  return (
    <Flex flexDirection={"column"}>
      <Box>투표생성</Box>
      <Flex
        flexDirection={"column"}
        gap={8}
        borderRadius={"20px"}
        border={"1px solid #D9D9D9"}
        boxShadow={"base"}
        padding={"10px"}
        margin={"10px"}
      >
        <Flex gap={"10px"} flexDirection={"column"}>
          <Flex width={"230px"}>
            <VoteOptionToggleButton
              title={"공개 여부"}
              isData={isOpen}
              onClickHandler={setIsOpen}
              toggleContent={[
                { data: true, content: "익명" },
                { data: false, content: "실명" },
              ]}
            />
          </Flex>
          <VoteOptionToggleButton
            title={"로그인 여부"}
            isData={isLogin}
            onClickHandler={setIsLogin}
            toggleContent={[
              { data: true, content: "익명" },
              { data: false, content: "실명" },
            ]}
          />
          <Flex alignItems="center">
            <Box width={"150px"} padding="10px">
              투표 종료일
            </Box>
            <SingleDatepicker
              name="date-input"
              date={date}
              onDateChange={setDate}
            />
          </Flex>
        </Flex>
        <Input focusBorderColor="#FFA45B" placeholder="제목을 입력해주세요" />
        <Divider
          borderColor={"#D9D9D9"}
          borderBottomWidth={"7px"}
          borderRadius={"20px"}
        />
        <VoteDnd voteItems={voteItems} setVoteItems={setVoteItems} />
        <Flex>
          <Box>#탕수육</Box>
          <Box>#탕수육_논쟁</Box>
          <Box>#탕수육_싸움</Box>
        </Flex>
      </Flex>
      <UploadImage />
    </Flex>
  );
};
export default CreateVote;
