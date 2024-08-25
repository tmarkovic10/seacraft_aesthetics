import React from "react";

import Layout from "@/components/Layout";
import Gallery from "@/views/Gallery";
import ContactSection from "@/views/Home/ContactSection";

const GalleryPage = () => {
  return (
    <Layout>
      <Gallery />
      <ContactSection />
    </Layout>
  );
};

export default GalleryPage;
