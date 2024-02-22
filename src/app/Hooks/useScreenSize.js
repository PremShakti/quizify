import { useMediaQuery } from '@react-hook/media-query';

export function useScreenSize() {
  const isSmallScreen = useMediaQuery('(max-width: 767px)');
  return { isSmallScreen };
}