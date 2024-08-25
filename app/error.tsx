"use client";

import type { Metadata } from "next";

import ErrorPage from "@/views/error-page";

export const metadata: Metadata = {
  title: "500",
  robots: {
    index: false,
  },
};

const Error500Page = () => (
  <ErrorPage
    status="500"
    heading="Dogodila se greška, pokušajte opet kasnije"
  />
);

export default Error500Page;
