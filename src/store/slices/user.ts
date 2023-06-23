/**
 * @author mingyu
 */
import { userType } from "@/types";

export type userSliceType = {
  isLogin: boolean;
  user: userType;
  setIsLogin: (input: boolean) => void;
  setNickname: (input: string) => void;
  setUserInfo: (info: userType) => void;
};

export const createUserSlice = (set: any) => ({
  isLogin: false,
  user: {
    id: 0,
    nickname: "",
    age: 0,
    gender: "",
    ranking: 0,
    badgeImageUrl: "",
    percentage: 0.0,
    accessToken: "",
    refreshToken: "",
    points: 0,
  } as userType,
  setIsLogin: (input: boolean) =>
    set((state: userSliceType) => {
      state.isLogin = input;
    }),
  setNickname: (input: string) => {
    set((state: userSliceType) => {
      state.user.nickname = input;
    });
  },
  setUserInfo: (userInfo: userType) => {
    set((state: userSliceType) => {
      state.user = userInfo;
    });
  },
});
