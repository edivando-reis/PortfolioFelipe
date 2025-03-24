import * as React from 'react';

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  /* const [isMobile, setIsMobile] = React.useState<boolean>(window.innerWidth < MOBILE_BREAKPOINT); */
  const [isMobile, setIsMobile] = React.useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  )

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    }
    //add resize listener
    window.addEventListener('resize', checkIsMobile);
    //cleanup
    return () => window.removeEventListener('resize', checkIsMobile)
    }, []);
    return isMobile;
}