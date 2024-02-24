import FooterPng from "@/assets/banner/Frame.png"
import Container from "@/components/SectionComponents/Container/Container";
import { Link } from "react-scroll";
import { FaXTwitter } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form"

const Footer = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example"))

  return (
    <div className="bg-[#180c21] 2xl:pt-[170px] xl:pt-[160px] md:pt-[80px] sm:pt-[40px] -mt-[2px] relative">
      <div className="FooterOne absolute left-6 opacity-75" />
      <Container>
        <div className="lg:flex xl:justify-between pb-[100px] mx-auto">

          {/* left email part */}
          <div className="2xl:max-w-[267px]" data-aos="fade-down" data-aos-duration="1500">
            <div className="2xl:mb-[45px]">
              <img className="mb-[16px]" src={FooterPng} alt="logo images" />
              <p className="text-[#B2A6B9] font-amulya text-[16px] xl:max-w-[267px] md:max-w-[267px] sm:max-w-[267px]">Terminal Labs is at the forefront of shaping visionary success.</p>
            </div>

          </div>

          {/* company part */}
          <div className="2xl:max-w-[267px]">
            <p className="text-[#fff] font-amulya text-[18px] mb-[20px] font-medium">Company</p>
            <div className="flex flex-col">
              <Link to="banner" smooth={true} offset={-130} duration={600} className="text-[#B2A6B9] mb-[12px] font-amulya text-[16px] hover:underline hover:cursor-pointer" data-aos="fade-up" data-aos-duration="800">Home</Link>
              <Link to="about" smooth={true} offset={-130} duration={600} className="text-[#B2A6B9] mb-[12px] font-amulya text-[16px] hover:underline cursor-pointer" data-aos="fade-up" data-aos-duration="1000">About</Link>
              <Link to="services" smooth={true} offset={-130} duration={600} className="text-[#B2A6B9] mb-[12px] font-amulya text-[16px] hover:underline cursor-pointer" data-aos="fade-up" data-aos-duration="1200">Services</Link>
              <Link to="partners" smooth={true} offset={-130} duration={600} className="text-[#B2A6B9] font-amulya text-[16px] hover:underline cursor-pointer" data-aos="fade-up" data-aos-duration="1400">Partners</Link>
            </div>
          </div>

          {/* say hello */}
          <div className="2xl:max-w-[518px]">
            <div className="FooterOne absolute bottom-5 opacity-75" />
            <p className="text-[#fff] font-amulya text-[18px] mb-[20px] font-medium">Say Hello</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[14px]">

              {/* Contact email */}
              <div className="w-[253px] p-[1px] bg-gradient-to-r from-[#4E2676] from-10% to-[#170d25] to-90% rounded-2xl" data-aos="fade-down" data-aos-duration="1200">
                <div className="w-[253px] p-[1px] bg-gradient-to-r from-[#301844] from-10% to-[#170d25] to-90% rounded-2xl">
                  <p className="text-[#B2A6B9] font-amulya text-[14px] cursor-pointer mt-[12px] mb-[18px] ml-[12px]">contact@terminalabs.io</p>
                  <div className="flex justify-between pb-4">
                    <a target="_blank" href="mailto:contact@terminalabs.io" className="ml-[12px] text-[22px] text-[#3CBDF4] cursor-pointer hover:scale-110 duration-300"><MdEmail /></a>
                    <a target="_blank" href="mailto:contact@terminalabs.io" className="mr-[12px] mt-[-4px] hover:mt-[-7px] text-[25px] text-[#3CBDF4] cursor-pointer duration-300">
                      <MdArrowOutward className="hover:mb-[3px] duration-300" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Social media */}
              <div className="w-[253px] p-[1px] bg-gradient-to-r from-[#4E2676] from-10% to-[#170d25] to-90% rounded-2xl" data-aos="fade-up" data-aos-duration="1200">
                <div className="w-[253px] p-[1px] bg-gradient-to-r from-[#301844] from-10% to-[#170d25] to-90% rounded-2xl">
                  <div className="mt-[12px] pb-[17px]">
                    <p className="text-[#B2A6B9] font-amulya text-[14px] cursor-pointer mb-[18px] ml-[12px]">Twitter</p>
                    <div className="flex justify-between ">
                      <a target="_blank" href="https://twitter.com/TerminaLabs" className="ml-[12px] text-[18px] text-[#3CBDF4] cursor-pointer hover:scale-110 duration-300"><FaXTwitter /></a>
                      <a target="_blank" href="https://twitter.com/TerminaLabs" className="mr-[12px] mt-[-4px] hover:mt-[-7px] text-[25px] text-[#3CBDF4] cursor-pointer duration-300">
                        <MdArrowOutward className="hover:mb-[3px] duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <p className='text-[#B2A6B9] text-[16px] text-center font-amulya py-5 border-t border-[#1D1522]'>{new Date().getFullYear()} Terminal Labs. All rights reserved.</p>
    </div>
  );
};

export default Footer;
