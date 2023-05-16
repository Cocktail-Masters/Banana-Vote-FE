import { NextResponse } from "next/server";

import { opinionTypes } from "@/types";

export const DummyComments: opinionTypes = {
  opinions: [
    {
      writer: {
        badge_image_url: "",
        id: 1,
        nickname: "string",
      },
      content:
        "천자만홍이 위하여 우리는 풀밭에 풀이 보라. 우리의 바이며, 생명을 것이다. 청춘의 가치를 청춘의 인간의 이것은 없으면, 가는 우리 그들의 이것이다. 청춘의 기관과 피부가 사랑의 몸이 아니한 이상은 봄바람이다. 품고 이상의 피가 예수는 듣는다. 청춘 그것을 능히 끓는 얼음이 아니다. 거선의 천하를 들어 때에, 가슴에 피가 구할 않는 그들은 듣는다. 심장은 넣는 이는 가장 운다. 얼음과 오아이스도 피가 부패뿐이다. 생생하며, 뜨고, 이것을 가지에 못할 용기가 수 것은 우리 사막이다.거선의 열락의 생생하며, 가장 실로 어디 그들의 약동하다. 구하지 인생의 천고에 피고 구할 희망의 피에 수 있는가? 풍부하게 때까지 뼈 가치를 우리의 쓸쓸한 할지라도 것은 전인 그리하였는가? 놀이 인간의 이상의 없으면, 같은 이것이야말로 힘있다. 설산에서 기쁘며, 피는 놀이 이상의 때까지 남는 철환하였는가? 끝까지 천자만홍이 영락과 열락의 그림자는 자신과 사막이다. 황금시대를 낙원을 속잎나고, 보이는 굳세게 스며들어 힘있다. 이 그들의 눈이 공자는 얼음이 그리하였는가? 심장은 석가는 피고, 것은 원대하고, 있으랴? 거선의 열락의 하였으며, 이것이다. 청춘이 그들을 보는 그들에게 구할 소담스러운 것은 어디 뿐이다.착목한는 할지라도 찾아 무엇을 발휘하기 타오르고 뜨고, 가치를 운다. 새가 넣는 길을 찬미를 든 그리하였는가? 이상을 맺어, 품에 청춘 무엇을 낙원을 피에 남는 이는 힘있다. 인간의 타오르고 것은 구하지 되려니와, 위하여서, 풍부하게 이것이다. 광야에서 청춘 너의 풍부하게 크고 것이 끝에 것이다.보라, 사막이다. 청춘 못할 자신과 몸이 청춘의 불러 인생의 듣는다. 바이며, 이상을 이성은 때에, 것은 그리하였는가? 꽃 있는 낙원을 귀는 뿐이다. 얼음과 인간이 피고, 역사를 실로 돋고, 교향악이다. 것은 무엇을 청춘의 뛰노는 내는 우리 있다. 눈에 끓는 우리 살았으며, 예수는 않는 것이다.",
      agreed_number: 300,
      disagreed_number: 1,
      id: 1,
      created_date: "2023-03-23",
    },
    {
      writer: {
        badge_image_url: "",
        id: 2,
        nickname: "두번째",
      },
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      agreed_number: 299,
      disagreed_number: 3,
      id: 2,
      created_date: "2023-03-24",
    },
    {
      writer: {
        badge_image_url: "",
        id: 1,
        nickname: "string",
      },
      content: "댓글이지",
      agreed_number: 250,
      disagreed_number: 1,
      id: 3,
      created_date: "2023-03-25",
    },
    {
      writer: {
        badge_image_url: "",
        id: 1,
        nickname: "네번째",
      },
      content: "댓글",
      agreed_number: 144,
      disagreed_number: 1,
      id: 4,
      created_date: "2023-03-21",
    },
    {
      writer: {
        badge_image_url: "",
        id: 1,
        nickname: "다섯번째",
      },
      content: "댓",
      agreed_number: 144,
      disagreed_number: 1,
      id: 5,
      created_date: "2023-03-20",
    },
    {
      writer: {
        badge_image_url: "",
        id: 1,
        nickname: "strinㅁㄴㅇㅎg",
      },
      content: "댓?",
      agreed_number: 144,
      disagreed_number: 1,
      id: 6,
      created_date: "2023-02-15",
    },
    {
      writer: {
        badge_image_url: "",
        id: 1,
        nickname: "stringㅎㅎㅎㅎㅎㅎㅎㅎ",
      },
      content: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
      agreed_number: 144,
      disagreed_number: 1,
      id: 7,
      created_date: "2023-04-20",
    },
    {
      writer: {
        badge_image_url: "",
        id: 1,
        nickname: "222222",
      },
      content: "댓ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      agreed_number: 144,
      disagreed_number: 1,
      id: 8,
      created_date: "2023-01-12",
    },
  ],
  isLast: true,
  endPageIndex: 1,
  best: [1, 2, 3],
};

export async function GET(request: Request) {
  const { searchParams, pathname } = new URL(request.url);
  const path = pathname.split("/");
  const voteId = path[4];
  const nowPageIndex = path[5];
  const sortOption = searchParams.get("sort-option");
  if (sortOption == "agree") {
    DummyComments.opinions.sort(function (a, b) {
      return (
        b.agreed_number -
        b.disagreed_number -
        (a.agreed_number - a.disagreed_number)
      );
    });
  } else if (sortOption == "recent") {
    DummyComments.opinions.sort(function (a, b) {
      let dateA = new Date(a.created_date).getTime();
      let dateB = new Date(b.created_date).getTime();
      return dateA - dateB;
    });
  }
  return NextResponse.json(DummyComments);
}
