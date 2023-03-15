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

export type voteItemType = {
  id: string;
  imageFile: File | null;
  content: string;
};
export const getDefaultVoteItem = () => {
  return {
    id: nanoid(),
    imageFile: null,
    content: "",
  };
};
export type voteItemTypes = voteItemType[];

const CreateVote = () => {
  const { state: isOpen, onClickHandler: setIsOpen } =
    useSelectData<boolean>(true);
  const { state: isLogin, onClickHandler: setIsLogin } =
    useSelectData<boolean>(false);
  const { state: date, setState: setDate } = useSelectData<Date>(new Date());
  const [voteTitle, setVoteTitle] = useState("");
  const [voteItems, setVoteItems] = useState<voteItemType[]>([]);
  const [text, setText] = useState<string>("");
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
              isData={isOpen}
              onClickHandler={setIsOpen}
              toggleContent={[
                { data: true, content: "공개" },
                { data: false, content: "비공개" },
              ]}
            />
          </Flex>
          <VoteOptionToggleButton
            title={"로그인 여부"}
            isData={isLogin}
            onClickHandler={setIsLogin}
            toggleContent={[
              { data: true, content: "실명" },
              { data: false, content: "익명" },
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
          onChange={(e) => setText(e.target.value)}
        ></Textarea>
        <VoteCreatTag tagArray={tagArray} setTagArray={setTagArray} />
      </Flex>
      <Flex justifyContent="flex-end" margin={"10px"}>
        <Button
          onClick={() => {
            console.log("isOpen", isOpen);
            console.log("isLogin", isLogin);
            console.log("date", date);
            console.log("voteTitle", voteTitle);
            console.log("voteItems", voteItems);
            console.log("text", text);
            console.log("tagArray", tagArray);
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
