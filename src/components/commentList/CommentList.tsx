"use client";
import { useFetchComments } from "@/hooks/reactQuery/useCommentsQuery";
import { Key, Suspense, useEffect, useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import Loading from "@/components/Loading";
import { opinionType } from "@/types";

const CommentList = ({ opinionType }: { opinionType: "agree" | "recent" }) => {
  const [nowPageIndex, setNowPageIndex] = useState(1);
  const { data } = useFetchComments({
    queryKey: "commentList",
    postId: 1,
    nowPageIndex,
    sortOption: opinionType,
  });
  console.log(data);

  return (
    <Suspense fallback={<Loading />}>
      <Box w={"100%"}>
        {data !== undefined &&
          data.pages.map(
            (e: { opinions: opinionType[] }, i: Key | null | undefined) => (
              <Box
                key={i}
                w={"100%"}
                minH={"35%"}
                paddingLeft={"2%"}
                paddingRight={"2%"}
              >
                {e.opinions.map((element, index) => (
                  <Box
                    key={index}
                    w={"100%"}
                    minH={"125px"}
                    h={"fit-content"}
                    marginTop={"3%"}
                    marginBottom={"3%"}
                    rounded={"lg"}
                    backgroundColor={"#F9F6ED"}
                    borderColor={"#F9F6ED"}
                    shadow={"md"}
                  >
                    <Flex justifyContent={"space-between"} w={"100%"} h={"30%"}>
                      <Box fontWeight={"bold"}>{element.nickname}</Box>
                      <Flex
                        minW={"200px"}
                        w={"20%"}
                        justifyContent={"space-around"}
                      >
                        <Box w="100%">
                          <Button
                            backgroundColor={"#B6B6B6"}
                            w="90%"
                            flex={"1"}
                          >
                            <Box w="25px">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  <path
                                    d="M7.24001 11V20H5.63001C4.73001 20 4.01001 19.28 4.01001 18.39V12.62C4.01001 11.73 4.74001 11 5.63001 11H7.24001ZM18.5 9.5H13.72V6C13.72 4.9 12.82 4 11.73 4H11.64C11.24 4 10.88 4.24 10.72 4.61L7.99001 11V20H17.19C17.92 20 18.54 19.48 18.67 18.76L19.99 11.26C20.15 10.34 19.45 9.5 18.51 9.5H18.5Z"
                                    fill="#000000"
                                  ></path>
                                </g>
                              </svg>
                            </Box>
                            <Box fontSize={"xs"}>{element.n_agree}</Box>
                          </Button>
                        </Box>
                        <Box w="100%">
                          <Button
                            backgroundColor={"#B6B6B6"}
                            w="90%"
                            flex={"1"}
                          >
                            <Box w="25px">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  <path
                                    d="M20 5.61V11.38C20 12.27 19.27 13 18.38 13H16.77V4H18.38C19.28 4 20 4.72 20 5.61ZM5.34001 5.24L4.02001 12.74C3.86001 13.66 4.56001 14.5 5.50001 14.5H10.28V18C10.28 19.1 11.18 20 12.27 20H12.36C12.76 20 13.12 19.76 13.28 19.39L16.01 13V4H6.81001C6.08001 4 5.46001 4.52 5.33001 5.24H5.34001Z"
                                    fill="#000000"
                                  ></path>
                                </g>
                              </svg>
                            </Box>
                            <Box fontSize={"xs"}>{element.n_disagree}</Box>
                          </Button>
                        </Box>
                        <Box w="50%">
                          <Button w="100%" flex={"1"} fontSize={"md"}>
                            🚨
                          </Button>
                        </Box>
                      </Flex>
                    </Flex>
                    <Box fontSize={"md"}>{element.content}</Box>
                  </Box>
                ))}
              </Box>
            )
          )}
      </Box>
    </Suspense>
  );
};

export default CommentList;
