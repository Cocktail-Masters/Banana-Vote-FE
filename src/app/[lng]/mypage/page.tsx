import FeedListArea from '@/components/feed/FeedListArea';
import RankingListArea from '@/components/home/RankingListArea';
import RecommendArea from '@/components/home/RecommendArea';
import TagListArea from '@/components/home/TagListArea';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
import SelectGender from '@/components/user/SelectGender';
import SelectAge from '@/components/user/SelectAge';

const Home = () => {
  return (
    <>
      <div className='flex items-start justify-center xl:justify-between'>
        <div>마이페이지</div>
        <SelectGender></SelectGender>
        <SelectAge></SelectAge>
      </div>
    </>
  );
};

export default Home;
