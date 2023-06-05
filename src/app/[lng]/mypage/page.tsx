import FeedListArea from '@/components/feed/FeedListArea';
import RankingListArea from '@/components/home/RankingListArea';
import RecommendArea from '@/components/home/RecommendArea';
import TagListArea from '@/components/home/TagListArea';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

const Home = () => {
  return (
    <>
      <div className='flex items-start justify-center xl:justify-between'>
        마이페이지
      </div>
    </>
  );
};

export default Home;
