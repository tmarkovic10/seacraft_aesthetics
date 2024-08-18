"use client";

import React from "react";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

const Lenis = ({ children }: { children: React.ReactNode }) => (
  <ReactLenis root>{children}</ReactLenis>
);

export default Lenis;
