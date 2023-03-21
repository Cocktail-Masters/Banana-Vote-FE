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
};

export type storeGoodsType = goodsType & {
  type: string;
  ea: number;
  limit_date: string;
};

export type storeGoodsTypes = storeGoodsType[];

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

export type opinionType = {
  nickname: string;
  id: number;
  content: string;
  n_agree: number;
  n_disagree: number;
  n_reported: number;
  date: string; // 생성된 날짜
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
  vote_item_id: number;
  title: string;
  iframe_link?: string;
  image?: string;
  candidate_num?: number;
  total_points?: number;
  n_voted?: number;
};
export type voteItemTypes = voteItemType[];

export type voteDetailType = {
  vote_id: number;
  nickname: string; // user 테이블 조인
  badge_url: string;
  vote_title: string;
  vote_content: string;
  is_anonymouse: boolean;
  is_disclosure: boolean;
  start_date?: string;
  end_date: string;
  n_view: number;
  n_vote: number;
  n_reported: number;
  n_opinion: number;
  is_deleted: boolean;
  is_event: boolean;
  is_closed: boolean;
  vote_items: voteItemTypes;
  tag: string[];
};

// export type voteFeedListType = voteDetailType & {
//   best_opinion: opinionType;
//   vote_items: voteItemTypes;
// };

export type voteFeedType = voteDetailType & {
  best_opinion: opinionType;
};

export type voteFeedListType = {
  totalCount: number;
  items: voteFeedType[];
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
  vote_id: number;
  voteTitle: string;
  voteImage: string;
  nView: number;
  nPrediction: number; // 참여 횟수 전체 합
  voteItems: voteItemTypes[];
};

export type interestType = {
  vote_id: number;
  voteTitle: string;
  voteImage: string;
  nView: number;
  nPrediction: number; // 참여 횟수 전체 합
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
};

/**
 * ranking
 */

export type seasonUserType = {
  season_ranking_id: number;
  user_id: number;
  ranking: number; // 등수
  nickname: string; // 사용자 닉네임
  score: number; // 사용자 점수
};

export type rankingListTypes = {
  page: number;
  users: seasonUserType[];
};

/**
 * seoson
 */

export type seasonType = {
  start_date: string;
  end_date: string;
  score: number;
  ranking: number;
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
