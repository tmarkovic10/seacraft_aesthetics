"use client";

import { PropsWithChildren } from "react";

import { ReactLenis } from "lenis/react";

const Providers = ({ children }: PropsWithChildren) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default Providers;
