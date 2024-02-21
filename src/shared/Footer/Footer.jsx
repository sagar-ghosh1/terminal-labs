import FooterPng from "@/assets/banner/Frame.png"
import Container from "@/components/SectionComponents/Container/Container";



const Footer = () => {
  return (
    <div className="bg-[#110A15] pt-[170px]">
      <Container>
        <div className="grid grid-cols-4 pb-[100px]">
          {/* left email part */}
          <div>
            <div>
              <img src={FooterPng} alt="logo images" />
              <p className="text-[#B2A6B9] font-amulya text-[16px]">Terminal Labs is at the forefront of shaping visionary success.</p>
              <p>Subscribe for upcoming news!</p>
            </div>
            <div>
              <p className="text-[#fff] font-amulya text-[16px] font-medium">Subscribe for upcoming news!</p>
            </div>
          </div>
          {/* company part */}
          <div>
            <div>
              <p className="text-[#fff] font-amulya text-[18px] font-medium hover:underline cursor-pointer">Company</p>
              <p className="text-[#B2A6B9] font-amulya text-[16px] hover:underline cursor-pointer">Home</p>
              <p className="text-[#B2A6B9] font-amulya text-[16px] hover:underline cursor-pointer">About</p>
              <p className="text-[#B2A6B9] font-amulya text-[16px] hover:underline cursor-pointer">Services</p>
              <p className="text-[#B2A6B9] font-amulya text-[16px] hover:underline cursor-pointer">Partners</p>
            </div>
          </div>
          {/* say hello */}
          <div>
            <p className="text-[#fff] font-amulya text-[18px] font-medium hover:underline cursor-pointer">Say Hello</p>
            <div>
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
        <div className="bg-[#1D1522]"><hr /></div>
        <p className="text-[#B2A6B9] font-amulya text-[16px] text-center pt-[24px]">2024 Terminal Labs. All rights reserved.</p>
      </Container>
    </div>
  );
};

export default Footer;