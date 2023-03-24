import Modal from "../modal/Modal";
import Portal from "../modal/Portal";
import banana_svg from "@assets/icons/banana_svgrepo.com.svg";
import Image from "next/image";
import trophy from "@assets/icons/trophy.svg";
import ranking from "@assets/icons/ranking.svg";

const VoteDetailPredictionModal = ({
  isOpen,
  onClose,
  voteItemId,
  point,
}: {
  isOpen: boolean;
  onClose: () => void;
  voteItemId: number;
  point: number;
}) => {
  return (
    <Portal>
      <Modal
        onClose={onClose}
        width={"95%"}
        height={"90%"}
        maxWidth={"600px"}
        maxHeight={"550px"}
      >
        <div className={"modalContent h-full w-full p-3"}>
          <div className={"header relative flex items-center justify-center"}>
            <button className={`absolute right-4`} onClick={onClose}>
              test
            </button>
            <h1 className={"mt-4 text-xl font-bold"}>
              바나나로 투표 결과를 예측하기!
            </h1>
          </div>
          <div className={"modal mt-5 flex w-full items-end justify-center"}>
            <div className={"text-5xl font-bold"}>{voteItemId}번</div>
            <div>을 투표 하셨어요!</div>
          </div>
          <div className={"flex h-3/4 w-full justify-center"}>
            <div className={"card mt-8 h-2/4 w-11/12 rounded-2xl bg-[#D9D9D9]"}>
              <div className={`h-5 w-full rounded-t-2xl bg-[#ffd60c]`}></div>
              <div className={`flex h-full w-full p-6`}>
                <div className={`relative flex h-full w-1/2`}>
                  <div className={`flex h-full flex-col items-center `}>
                    <div className={`flex`}>
                      <Image
                        src={banana_svg}
                        width={20}
                        height={20}
                        alt={"바나나 포인트 아이콘"}
                      ></Image>
                      <div className={`ml-1`}>0</div>
                    </div>
                    <div className={`flex`}>
                      <Image
                        src={trophy}
                        width={20}
                        height={20}
                        alt={"트로피 아이콘"}
                      ></Image>
                      <div className={`ml-1`}>0</div>
                    </div>
                    <div className={`flex`}>
                      <Image
                        src={ranking}
                        width={20}
                        height={20}
                        alt={"랭킹 아이콘"}
                      ></Image>
                      <div className={`ml-1`}>0</div>
                    </div>
                  </div>
                  <div className={`absolute right-5 top-5 text-2xl font-bold`}>
                    1번
                  </div>
                </div>
                <div className={`h-4/5 border-l-2 border-gray-500`}></div>
                <div className={`relative flex h-full w-1/2 items-end `}>
                  <div className={`flex h-full w-full flex-col items-end`}>
                    <div className={`absolute left-5 top-5 text-2xl font-bold`}>
                      2번
                    </div>
                    <div className={`flex items-center`}>
                      <div className={`mr-1`}>0</div>
                      <Image
                        src={banana_svg}
                        width={20}
                        height={20}
                        alt={"바나나 포인트 아이콘"}
                      ></Image>
                    </div>
                    <div className={`flex items-center`}>
                      <div className={`mr-1`}>0</div>
                      <Image
                        src={trophy}
                        width={20}
                        height={20}
                        alt={"트로피 아이콘"}
                      ></Image>
                    </div>
                    <div className={`flex items-center`}>
                      <div className={`mr-1`}>0</div>
                      <Image
                        src={ranking}
                        width={20}
                        height={20}
                        alt={"랭킹 아이콘"}
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Portal>
  );
};

export default VoteDetailPredictionModal;
