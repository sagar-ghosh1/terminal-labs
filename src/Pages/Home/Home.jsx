import AboutUs from "@/components/SectionComponents/AboutUS/AboutUS";
import Banner from "@/components/SectionComponents/Banner/Banner";
import Customers from "@/components/SectionComponents/Customers/Customers";
import OurServices from "@/components/SectionComponents/OurServices/OurServices";
import ShareWithUs from "@/components/SectionComponents/ShareWithUs/ShareWithUs";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <OurServices />
      <Customers />
      <ShareWithUs />
    </>
  );
};


export default Home;