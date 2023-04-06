/**
 * users
 */

export type anotherUserType = {
  nickname: string;
  ranking: number;
  percentage: number;
};

export type userType = anotherUserType & {
  age: number;
  gender: string;
};

/**
 * badgeType
 */

export type storeOptionType = {
  price: number;
  end_date: string;
};

export type badgeType = {
  badge_id?: number;
  name: string;
  image_url: string;
  desc: string;
  is_selling?: boolean;
  store_option?: storeOptionType;
};
export type badgesType = badgeType[];

/**
 * achievements
 */

export type achivementType = {
  achievement_id?: number;
  name: string;
  image_url: string;
  reward_point?: number;
};

export type achivementsType = achivementType[];

/**
 * goods
 */

export type goodsType = {
  id: number;
  name: string;
  description: string; // 상품에 대한 설명
  image_url: string;
  type: number;
  price: number;
  ea?: number; // 해당 상품 보유 갯수
  expiration_date?: string; // 상품을 사용했을 때 적용이 종료되는 날짜
  is_used?: boolean; // 사용 완료 여부
};

export type storeGoodsType = goodsType & {
  start_date: string; // 판매 시작일
  end_date: string; // 판매 종료일
  sell_count: number; // 판매된 갯수
  use_period: number; // 꾸미기 등 장착을 시작하면 적용되는 기간 (ex. 30일)
};

export type storeGoodsTypes = {
  goods: storeGoodsType[];
};

export type goods_typeTypes = string[];

export type userGoodsType = goodsType & {
  desc: string;
  image_url: string;
  type: string;
  price: number;
  ea: number; // 해당 상품 보유 갯수
  limit_date: string; // 상품 사용 기한 (ex. 2023-12-18)
  is_used: boolean; // 사용 완료 여부
};

/**
 * opinion
 */

type opinionType = {
  id: number;
  writer: {
    id: number;
    nickname: string;
    badge_image_url: string;
  };
  content: string;
  agreed_number: number;
  disagreed_number: number;
  created_date: string;
};

export type opinionTypes = {
  opinions: opinionType[];
  isLast: boolean;
  endPageIndex: number;
  best?: number[];
};

/**
 * votes
 */

export type voteType = {
  id: number;
  title: string;
  is_closed: boolean;
  point: number;
};

export type voteTypes = voteType[];

/**
 * tags
 */
export type tagTypes = string[];

/**
 * vote
 */

export type voteItemType = {
  id: number;
  item_number: number; // 투표 항목 번호
  title: string;
  iframe_link: string;
  image_url: string;
  total_points: number;
  voted_number: number;
};
export type voteItemTypes = voteItemType[];

export type voteDetailType = {
  vote: {
    id: number;
    title: string;
    image_url: string;
    content: string;
    is_event: boolean;
    is_anonymous: boolean;
    is_public: boolean;
    is_closed: boolean;
    start_date?: string;
    end_date: string;
    hits: number;
    voted_number: number;
    opinion_number: number;
    tags: string[];
  };
  writer: {
    id: number;
    nickname: string;
    badge_image_url: string;
  };
  vote_items: voteItemTypes;
};

export type voteFeedType = voteDetailType & {
  best_opinion: opinionType;
};

export type voteFeedListType = {
  total_count: number;
  votes: voteFeedType[];
};

export type voteDeleteType = {
  vote_id: number;
};

export type predictionType = {
  is_participation: boolean;
  vote_item_id?: number;
  point?: number;
  candidate_num?: 0 | 1 | 2 | 3 | 4 | 5; // 투표 내 항목 순서
};

export type popularType = {
  id: number;
  title: string;
  hits: number;
  voted_number: number;
};

export type popularTypes = {
  votes: popularType[];
};

export type interestType = {
  id: number;
  title: string;
  hits: number;
  voted_number: number;
};

export type interestTypes = {
  votes: interestType[];
};

export type votesSearchTypes = voteDetailType[];

/**
 * report
 */

export type reportUserType = {
  nickname: string;
  report_content: string;
  is_allow: false;
  content_id: number;
  report_type: number;
};

export type reportType = {
  user_list: reportUserType[];
  is_last: false;
  now_page_index: 1;
};

/**
 * megaphone
 */

export type magaphoneType = {
  id: number;
  end_date: string;
  content: string;
  vote_link: string;
  user: {
    id: number;
    nickname: string;
  };
};

export type megaphoneTypes = magaphoneType[];

/**
 * event
 */

export type eventTypes = {
  title: string;
  content: string;
  image: string;
  end_date: string;
  is_closed?: boolean;
  n_view?: number;
  vote_id: number;
};

/**
 * ranking
 */

export type seasonUserType = {
  id: number;
  ranking: number;
  nickname: string;
  score: number;
};

export type rankingListTypes = {
  total_page: number;
  now_page: number;
  ranking_list: seasonUserType[];
};

/**
 * seoson
 */

export type seasonType = {
  id: number;
  start_date: string;
  end_date: string;
  description: string;
};

export type seasonTypes = seasonType[];

/**
 * picket
 */

export type picketType = {
  picket_image_url: string;
  position: number;
  price: number;
};

export type picketsType = {
  pickets: picketType[];
};

/**
 * ban
 */

export type banType = {
  nickname: string;
  userId: number;
  banReason: string;
  banCount: number;
};

export type banTypes = banType[];

/**
 * point
 */

export type pointLogType = {
  amount: number;
  description: string;
};
export type pointLogTypes = pointLogType[];

/**
 * menu
 */
type MenuProps = {
  id: number;
  title: string;
};
