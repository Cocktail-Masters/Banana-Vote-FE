import { useParams, useRouter } from 'next/navigation';
const useChangeLanguagePath = (path: string) => {
  const router = useRouter();
  const params = useParams();
  const onClickMypageHandler = () => {
    if (params.lng) router.push(`/${params.lng}${path}`);
  };
  return onClickMypageHandler;
};
export default useChangeLanguagePath;
