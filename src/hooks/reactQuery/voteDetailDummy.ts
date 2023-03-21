import { voteDetailType } from "@/types";

export const voteDetailDummy: voteDetailType = {
  vote_id: 33414,
  nickname: "대충 글 쓴 사람의 닉네임",
  badge_url: "~~",
  vote_title: "대충 공개 글 타이틀",
  vote_content: "대충 공개 글 컨텐츠",
  is_anonymouse: false,
  is_disclosure: false,
  start_date: "2023-03-13 15:38:27",
  end_date: "2023-03-20 15:38:27",
  n_view: 100,
  n_vote: 124325,
  n_reported: 0,
  n_opinion: 124, // 댓글 갯수
  is_deleted: false,
  is_event: false,
  is_closed: false,
  vote_items: [
    {
      vote_item_id: 1,
      title: "대충 항목1 제목",
      iframe_link: "url",
      image: "image_url",
      candidate_num: 1,
      total_points: 1500,
      n_voted: 20,
    },
  ],
  tag: ["#탕수육", "#태그2"],
};
