import { useEffect, useState } from 'react';
import debounce from 'utils/debounce';
import { SCROLL_DIRECTIONS } from 'utils/constants';

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset || 0);
  const [scrollDirection, setScrollDirection] = useState(SCROLL_DIRECTIONS.DOWN);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollPosition > window.pageYOffset) {
        setScrollDirection(SCROLL_DIRECTIONS.UP);
      } else {
        setScrollDirection(SCROLL_DIRECTIONS.DOWN);
      }
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', debounce(handleScroll, 50));

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return { scrollPosition, scrollDirection };
}
