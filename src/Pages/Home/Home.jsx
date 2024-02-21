import AboutUs from "@/components/SectionComponents/AboutUS/AboutUS";
import Banner from "@/components/SectionComponents/Banner/Banner";
import Container from "@/components/SectionComponents/Container/Container";
import Customers from "@/components/SectionComponents/Customers/Customers";
import OurServices from "@/components/SectionComponents/OurServices/OurServices";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <OurServices />
      <Customers />
    </>
  );
};


export default Home;