import { useLenis } from "lenis/react";

const useLenisControl = () => {
  const lenis = useLenis();

  const enableScroll = () => {
    if (lenis) {
      lenis.start();
    }
  };

  const disableScroll = () => {
    if (lenis) {
      lenis.stop();
    }
  };

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    }
  };

  return { disableScroll, enableScroll, scrollToTop };
};

export default useLenisControl;
