/**
 * users
 */

export type anotherUserType = {
  nickname: string;
  ranking: number;
  percentage: number;
};

export type userType = anotherUserType & {
  id?: number;
  age: number;
  gender: string;
  badgeImageUrl: string;
  accessToken: string;
  refreshToken: string;
  points: number;
  role: "GUEST" | "USER" | "ADMIN";
};

export type userTypeForAdmin = {
  id: number;
  nickname: string;
  role: string;
  isActive: boolean;
};

export type userListTypeForAdmin = {
  totalCount: number;
  users: userTypeForAdmin[];
};

/**
 * badgeType
 */

export type storeOptionType = {
  price: number;
  endDate: string;
};

export type badgeType = {
  badgeId?: number;
  name: string;
  imageUrl: string;
  desc: string;
  isSelling?: boolean;
  storeOption?: storeOptionType;
};
export type badgesType = badgeType[];

/**
 * achievements
 */

export type achivementType = {
  achievementId?: number;
  name: string;
  imageUrl: string;
  rewardPoint?: number;
};

export type achivementsType = achivementType[];

/**
 * goods
 */

export type goodsType = {
  id: number;
  name: string;
  description: string; // 상품에 대한 설명
  imageUrl: string;
  type: number;
  price: number;
  ea?: number; // 해당 상품 보유 갯수
  expirationDate?: string; // 상품을 사용했을 때 적용이 종료되는 날짜
  isUsed?: boolean; // 사용 완료 여부
};

export type storeGoodsType = goodsType & {
  startDate: string; // 판매 시작일
  endDate: string; // 판매 종료일
  sellCount: number; // 판매된 갯수
  usePeriod: number; // 꾸미기 등 장착을 시작하면 적용되는 기간 (ex. 30일)
};

export type storeGoodsTypes = {
  goods: storeGoodsType[];
};

export type goods_typeTypes = string[];

export type userGoodsType = goodsType & {
  desc: string;
  imageUrl: string;
  type: string;
  price: number;
  ea: number; // 해당 상품 보유 갯수
  limitDate: string; // 상품 사용 기한 (ex. 2023-12-18)
  isUsed: boolean; // 사용 완료 여부
};

/**
 * opinion
 */

type opinionType = {
  id: number;
  writer: {
    id: number;
    nickname: string;
    badgeImageUrl: string;
  };
  content: string;
  agreedNumber: number;
  disagreedNumber: number;
  createdDate: string;
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
  isClosed: boolean;
  point: number;
};

export type voteTypes = voteType[];

/**
 * tags
 */
export type tagTypes = string[];

export type tagListTypes = {
  tags: string[];
};

/**
 * vote
 */

export type voteItemType = {
  id: number;
  itemNumber: number; // 투표 항목 번호
  title: string;
  iframeLink: string;
  imageUrl: string;
  totalPoints: number;
  votedNumber: number;
};
export type voteItemTypes = voteItemType[];

export type createVoteItemType = Omit<voteItemType, "id" | "imageUrl"> & {
  id: number | string;
  imageUrl: string | null;
  imageFile?: file | null;
};

export type createVoteItemTypes = createVoteItemType[];

export type voteDetailType = {
  vote: {
    id: number;
    title: string;
    imageUrl: string;
    content: string;
    isEvent: boolean;
    isAnonymous: boolean;
    isPublic: boolean;
    isClosed: boolean;
    startDate?: string;
    endDate: string;
    hits: number;
    votedNumber: number;
    opinionNumber: number;
    tags: string[];
  };
  writer: {
    id: number;
    nickname: string;
    badgeImageUrl: string;
  };
  voteItems: voteItemTypes;
};

export type voteFeedType = voteDetailType & {
  bestOpinion: opinionType;
};

export type voteFeedListType = {
  totalCount: number;
  votes: voteFeedType[];
};

export type voteDeleteType = {
  voteId: number;
};

export type predictionType = {
  voteItemId?: number;
  point?: number;
  candidateNum?: 0 | 1 | 2 | 3 | 4 | 5; // 투표 내 항목 순서
};

export type popularType = {
  id: number;
  title: string;
  hits: number;
  votedNumber: number;
};

export type popularTypes = {
  votes: popularType[];
};

export type interestType = {
  id: number;
  title: string;
  hits: number;
  votedNumber: number;
};

export type interestTypes = {
  votes: interestType[];
};

export type votesSearchTypes = voteDetailType[];

/**
 * report
 */

export type reportCreateType = {
  contentType: string;
  contentId: number;
  reportType: string;
  reportContent: string;
};

export type reportType = {
  reportId: number;
  reporterId: number; // 신고자 ID
  reportedContentType: string;
  reportedContentId: number;
  reportedReasonType: string;
  reportedReasonDetail: string;
  isChecked: boolean;
};

export type reportListType = {
  totalCount: number;
  reportList: reportType[];
};

/**
 * megaphone
 */

export type magaphoneType = {
  id: number;
  endDate: string;
  content: string;
  voteLink: string;
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
  endDate: string;
  isClosed?: boolean;
  nView?: number;
  voteId: number;
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
  totalPage: number;
  nowPage: number;
  rankingList: seasonUserType[];
};

/**
 * seoson
 */

export type seasonType = {
  id: number;
  startDate: string;
  endDate: string;
  description: string;
};

export type seasonTypes = seasonType[];

/**
 * picket
 */

export type picketType = {
  picketImageUrl: string;
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

/**
 * search feeds
 */
export type filterOptions = {
  isClosed: boolean;
  sortBy: number;
};

/**
 * Etc
 */
export type jwtToken = {
  id: number;
  email: string;
  role: string;
  exp: number;
};
