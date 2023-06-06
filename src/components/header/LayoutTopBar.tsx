'use client';
import { useStore } from '@/hooks/useStore';
import useTheme from '@/hooks/useTheme';
import { colorStoreType, useColorModeStore } from '@/store/colorMode';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { DarkModeSwitch } from '../animation/themeToggle/DarkModeSwitch';
import { tabType } from './LayoutHeader';

const LayoutTopBar = ({ tabs }: { tabs: tabType[] }) => {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const [selectedTabPath, setSelectedTabPath] = useState<string | null>(null);
  const themeStore = useStore<colorStoreType, any>(
    useColorModeStore,
    (state) => state
  );

  useEffect(() => {
    const removeLanguagePath = '/' + pathname.split('/').slice(2).join('/');
    setSelectedTabPath(removeLanguagePath);
  }, [pathname]);
  const { themeMode, toggleThemeHandler } = useTheme();

  const isMatchPath = (path: string) => {
    if (selectedTabPath === null) return false;
    return selectedTabPath.substring(0, path.length) === path;
  };

  const themeModeHandler = () => {
    toggleThemeHandler();
    const theme = themeStore.theme;
    if (theme === 'dark') {
      themeStore.setTheme('light');
    } else {
      themeStore.setTheme('dark');
    }
  };
  const onClickMypageHandler = () => {
    if (params.lng) router.push(`/${params.lng}/mypage`);
  };

  return (
    <>
      <div className='flex h-full flex-grow flex-row justify-center gap-[30px]'>
        {tabs.map((item) => (
          <Link
            href={item.path}
            key={item.label}
            className={`relative flex h-full`}
            onClick={() => setSelectedTabPath(item.path)}
          >
            <div className='relative flex h-full items-center justify-center'>
              <p>{`${item.label}`}</p>
            </div>
            <div className='flex justify-end'>
              {isMatchPath(item.path) ? (
                <motion.div className='underline' layoutId='underline' />
              ) : null}
            </div>
          </Link>
        ))}
      </div>
      <DarkModeSwitch
        onChange={themeModeHandler}
        checked={themeMode === 'dark' ? true : false}
      />
      <div className='p-3'>마이페이지</div>
    </>
  );
};

export default LayoutTopBar;
