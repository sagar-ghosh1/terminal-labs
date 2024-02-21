import FooterPng from "@/assets/banner/Frame.png"
import Container from "@/components/SectionComponents/Container/Container";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <div className="bg-[#110A15] 2xl:pt-[170px]">
      <Container>
        <div className="flex justify-between pb-[100px] mx-auto">
          {/* left email part */}
          <div className="2xl:max-w-[267px]">
            <div className="2xl:mb-[45px]">
              <img className="mb-[16px]" src={FooterPng} alt="logo images" />
              <p className="text-[#B2A6B9] font-amulya text-[16px]">Terminal Labs is at the forefront of shaping visionary success.</p>
              <p>Subscribe for upcoming news!</p>
            </div>
            <div>
              <p className="text-[#fff] font-amulya text-[16px] font-medium">Subscribe for upcoming news!</p>
            </div>
          </div>
          {/* company part */}
          <div className="2xl:max-w-[267px]">
            <p className="text-[#fff] font-amulya text-[18px] mb-[20px] font-medium">Company</p>
            <div className="flex flex-col">
              <Link className="text-[#B2A6B9] mb-[12px] font-amulya text-[16px] hover:underline hover:cursor-pointer">Home</Link>
              <Link className="text-[#B2A6B9] mb-[12px] font-amulya text-[16px] hover:underline cursor-pointer">About</Link>
              <Link className="text-[#B2A6B9] mb-[12px] font-amulya text-[16px] hover:underline cursor-pointer">Services</Link>
              <Link className="text-[#B2A6B9] font-amulya text-[16px] hover:underline cursor-pointer">Partners</Link>
            </div>
          </div>
          {/* say hello */}
          <div className="2xl:max-w-[518px]">
            <p className="text-[#fff] font-amulya text-[18px] mb-[20px] font-medium">Say Hello</p>
            <div className="flex">
              <div>
                <p className="text-[#B2A6B9] font-amulya text-[14px] cursor-pointer">contact@terminalabs.io</p>
                <p className="text-[#3CBDF4] font-amulya text-[14px] font-medium cursor-pointer">Let’s chat</p>
              </div>
              <div>
                <p className="text-[#B2A6B9] font-amulya text-[14px] cursor-pointer">Twitter</p>
                <p className="text-[#3CBDF4] font-amulya text-[14px] font-medium cursor-pointer">Let’s chat</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <p className='text-[#B2A6B9] text-[16px] text-center font-amulya py-5 border-t border-[#1D1522]'>2024 Terminal Labs. All rights reserved.</p>
    </div>
  );
};

export default Footer;