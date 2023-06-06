import InputNickname from "@/components/user/InputNickname";
import SelectGender from "@/components/user/SelectGender";
import SelectAge from "@/components/user/SelectAge";

const Home = () => {
  return (
    <>
      <div className="flex items-start justify-center xl:justify-between">
        <div>마이페이지</div>
        <InputNickname />
        <SelectGender></SelectGender>
        <SelectAge></SelectAge>
      </div>
    </>
  );
};

export default Home;
