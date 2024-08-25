"use client";

import { PropsWithChildren } from "react";

import { ReactLenis } from "lenis/react";
import { ResetScrollPositionProvider } from "@/utils/context/ResetScrollPositionContext";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReactLenis root>
      <ResetScrollPositionProvider>{children}</ResetScrollPositionProvider>
    </ReactLenis>
  );
};

export default Providers;
