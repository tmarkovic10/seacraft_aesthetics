import React from "react";

import Layout from "@/components/Layout";
import Gallery from "@/views/gallery";
import ContactSection from "@/views/home/ContactSection";

const GalleryPage = () => {
  return (
    <Layout>
      <Gallery />
      <ContactSection />
    </Layout>
  );
};

export default GalleryPage;
