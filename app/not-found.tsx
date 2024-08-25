import type { Metadata } from "next";

import ErrorPage from "@/views/error-page";

export const metadata: Metadata = {
  title: "404",
  robots: {
    index: false,
  },
};

const Error404Page = () => (
  <ErrorPage status="404" heading="Ova stranica ne postoji" />
);

export default Error404Page;
