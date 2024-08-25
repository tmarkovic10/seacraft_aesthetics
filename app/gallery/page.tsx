import React from "react";
import { Metadata } from "next";

import Layout from "@/components/Layout";
import Gallery from "@/views/Gallery";
import ContactSection from "@/views/home/ContactSection";

export const metadata: Metadata = {
  title: "Gallery",
};

const GalleryPage = () => {
  return (
    <Layout>
      <Gallery />
      <ContactSection />
    </Layout>
  );
};

export default GalleryPage;
