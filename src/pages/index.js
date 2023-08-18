import AboutUs from "@/components/HomePage/AboutUs";
import Banner from "@/components/HomePage/Banner";
import Contact from "@/components/HomePage/Contact";
import WhatWeDo from "@/components/HomePage/WhatWeDo";
import RootLayout from "@/components/Layouts/RootLayout";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <WhatWeDo />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
