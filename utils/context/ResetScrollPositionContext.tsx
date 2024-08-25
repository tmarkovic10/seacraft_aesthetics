import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useRef,
} from "react";
import { usePathname } from "next/navigation";
import useLenisControl from "@/utils/hooks/useLenisControl";

type ResetScrollPositionContextValues = {
  scrollToTop: () => void;
  disableScroll: () => void;
  enableScroll: () => void;
};

const ResetScrollPositionContext = createContext<
  ResetScrollPositionContextValues | undefined
>(undefined);

export const ResetScrollPositionProvider = ({
  children,
}: PropsWithChildren) => {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const { disableScroll, enableScroll, scrollToTop } = useLenisControl();

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      scrollToTop();
      disableScroll();
      prevPathname.current = pathname;
    }
  }, [pathname, scrollToTop, disableScroll]);

  useEffect(() => {
    enableScroll();
  }, [enableScroll]);

  const contextValue = { scrollToTop, disableScroll, enableScroll };

  return (
    <ResetScrollPositionContext.Provider value={contextValue}>
      {children}
    </ResetScrollPositionContext.Provider>
  );
};
