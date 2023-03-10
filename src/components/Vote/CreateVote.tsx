"use client";
import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import useSelectButton from "@hooks/useSelectButton";
import { SingleDatepicker } from "../Datepicker/Datepicker";

type createVoteOptionType = {
  isOpen: boolean;
  isLogin: boolean;
  endDate: string;
};

// type keyOfCreateVoteOption = keyof createVoteOptionType;
// type ValueOfCreateVoteOption = createVoteOptionType[keyOfCreateVoteOption];

// const defaultOfCeateVoteOption = {
//   isOpen: true,
//   isLogin: false,
//   endDate: "2020-07-20",
// };

const CreateVote = () => {
  //   const [createVoteOption, setCreateVoteOption] =
  //     useState<createVoteOptionType>(defaultOfCeateVoteOption);

  const { state: isOpen, onClickHandler: setIsOpen } =
    useSelectButton<boolean>(true);
  const { state: isLogin, onClickHandler: setIsLogin } =
    useSelectButton<boolean>(false);
  const { state: date, setState: setDate } = useSelectButton<Date>(new Date());

  return (
    <Box>
      <Box>투표생성</Box>
      <Box>
        <Box>
          <Box>공개여부</Box>
          <Button onClick={() => setIsOpen(true)}>a</Button>
          <Button onClick={() => setIsOpen(false)}>b</Button>
        </Box>
        <Box>
          <Box>로그인 여부</Box>
          <Button onClick={() => setIsLogin(true)}>a</Button>
          <Button onClick={() => setIsLogin(false)}>b</Button>
        </Box>
        <Box>
          <Box>투표 종료일</Box>
          <SingleDatepicker
            name="date-input"
            date={date}
            onDateChange={setDate}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default CreateVote;
