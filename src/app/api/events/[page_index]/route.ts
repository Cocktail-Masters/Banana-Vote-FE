import { NextResponse } from "next/server";

const dummyData = {
  events: [
    {
      title: "스마트폰 추첨 이벤트",
      content:
        "스마트폰 추첨 이벤트를 진행합니다. 참여하시면 추첨을 통해 스마트폰을 드립니다.",
      image: "https://dummyimage.com/600x400/000/fff&text=Smartphone+Event",
      end_date: "2023-07-31",
      is_closed: false,
    },
    {
      title: "페인트방식 미술전",
      content:
        "특별한 페인트방식을 사용한 작품들을 전시합니다. 꼭 방문해주세요!",
      image: "https://dummyimage.com/600x400/000/fff&text=Art+Exhibition",
      end_date: "2023-06-15",
      is_closed: false,
    },
    {
      title: "스포츠 대회",
      content: "다양한 스포츠 경기를 개최합니다. 참여해보세요!",
      image: "https://dummyimage.com/600x400/000/fff&text=Sports+Event",
      end_date: "2023-05-20",
      is_closed: false,
    },
    {
      title: "음식 쇼핑몰 오픈 기념 할인 이벤트",
      content:
        "음식 쇼핑몰이 오픈했습니다. 오픈 기념 할인 이벤트를 진행합니다.",
      image: "https://dummyimage.com/600x400/000/fff&text=Food+Sale",
      end_date: "2023-06-30",
      is_closed: false,
    },
    {
      title: "패션 브랜드 새 제품 출시",
      content:
        "패션 브랜드의 새로운 제품이 출시되었습니다. 지금 바로 확인하세요!",
      image: "https://dummyimage.com/600x400/000/fff&text=Fashion+New+Product",
      end_date: "2023-05-31",
      is_closed: false,
    },
    {
      title: "숨겨진 고양이 찾기",
      content: "숨겨진 고양이를 찾아서 상품권을 받아보세요!",
      image: "https://dummyimage.com/600x400/000/fff&text=Hidden+Cat",
      end_date: "2023-06-30",
      is_closed: false,
    },
    {
      title: "오늘의 메뉴 투표",
      content: "점심에 먹을 메뉴를 투표해주세요!",
      image: "https://dummyimage.com/600x400/000/fff&text=Lunch+Vote",
      end_date: "2023-04-30",
      is_closed: false,
    },
    {
      title: "자동차 경주 대회",
      content: "자동차 경주 대회 참가 신청을 받습니다!",
      image: "https://dummyimage.com/600x400/000/fff&text=Car+Race",
      end_date: "2023-05-10",
      is_closed: false,
    },
    {
      title: "헬스장 1주년 기념 이벤트",
      content: "모든 운동기구 50% 할인!",
      image: "https://dummyimage.com/600x400/000/fff&text=Gym+Anniversary",
      end_date: "2023-04-15",
      is_closed: false,
    },
    {
      title: "바다에서 놀자!",
      content: "바다에서 즐거운 시간을 보내세요!",
      image: "https://dummyimage.com/600x400/000/fff&text=Beach+Fun",
      end_date: "2023-07-15",
      is_closed: false,
    },
    {
      title: "하루 1분 스트레칭 챌린지",
      content: "하루 1분만 스트레칭하면 몸도 마음도 건강해져요!",
      image: "https://dummyimage.com/600x400/000/fff&text=Stretching+Challenge",
      end_date: "2023-04-30",
      is_closed: false,
    },
    {
      title: "대규모 할인 물품 투표",
      content: "다음 할인 이벤트에서 어떤 물품을 할인할까요?",
      image: "https://dummyimage.com/600x400/000/fff&text=Discount+Vote",
      end_date: "2023-05-05",
      is_closed: false,
    },
    {
      title: "어린이날 기념 이벤트",
      content: "어린이들이 즐길 수 있는 다양한 이벤트!",
      image: "https://dummyimage.com/600x400/000/fff&text=Children's+Day",
      end_date: "2023-05-05",
      is_closed: false,
    },
  ],
  is_last: false,
  end_page_index: 2,
};

export async function GET(request: Request) {
  const { searchParams, pathname } = await new URL(request.url);
  const close = searchParams.get("close");
  const page = await pathname.split("/");
  console.log(page[3]);

  if (page[3] === "2") {
    dummyData.is_last = true;
  } else {
    dummyData.is_last = false;
  }
  if (close === "false") {
    const returnData = dummyData.events.filter((e) => {
      return !e.is_closed;
    });
    return NextResponse.json({
      events: returnData,
      is_last: dummyData.is_last,
      end_page_index: dummyData.end_page_index,
    });
  } else {
    const returnData = dummyData.events.filter((e) => {
      return e.is_closed;
    });
    return NextResponse.json({
      events: returnData,
      is_last: dummyData.is_last,
      end_page_index: dummyData.end_page_index,
    });
  }
}
