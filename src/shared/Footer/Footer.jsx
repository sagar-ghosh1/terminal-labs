import FooterPng from "@/assets/banner/Frame.png"
import Container from "@/components/SectionComponents/Container/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
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
    <div className="bg-[#180c21] 2xl:pt-[170px] xl:pt-[160px] md:pt-[80px] sm:pt-[40px] -mt-[2px]">
      <Container>
        <div className="xl:flex xl:justify-between pb-[100px] mx-auto">

          {/* left email part */}
          <div className="2xl:max-w-[267px]">
            <div className="2xl:mb-[45px]">
              <img className="mb-[16px]" src={FooterPng} alt="logo images" />
              <p className="text-[#B2A6B9] font-amulya text-[16px] xl:max-w-[267px] md:max-w-[267px] sm:max-w-[267px]">Terminal Labs is at the forefront of shaping visionary success.</p>
            </div>

            <div>
              <p className="text-[#fff] font-amulya text-[16px] font-medium mb-3">Subscribe for upcoming news!</p>

              <div>
                {/* <form>
                  <div className='p-[1px] bg-gradient-to-r from-[#6f359f94] from-10% to-[#26133663] to-90% rounded-[8px]'>
                    <Input type="email" placeholder="mail@gmail.com" className="border-none px-2 rounded-[8px] text-[14px] font-semibold placeholder:text-[14px] placeholder:font-medium text-[#B2A6B9] placeholder:text-[#B2A6B9] w-full cursor-pointer bg-gradient-to-r from-[#281934] from-10% to-[#180C21] to-90%" />
                  </div>
                </form> */}

                <form onSubmit={handleSubmit(onSubmit)} className="relative">
                  <div className='p-[1px] bg-gradient-to-r from-[#6f359f94] from-10% to-[#26133663] to-90% rounded-[8px]'>
                    <input {...register("exampleRequired", { required: true })}
                      placeholder="mail@gmail.com"
                      className="border-none px-2 py-2 rounded-[8px] text-[14px] font-semibold placeholder:text-[14px] placeholder:font-medium text-[#B2A6B9] placeholder:text-[#B2A6B9] w-full cursor-pointer bg-gradient-to-r from-[#281934] from-10% to-[#180C21] to-90%"
                    />
                  </div>
                  {errors.exampleRequired && <span className="text-[#66318a]">This field is required</span>}

                  <input type="submit" className="bg-[#8211F1] cursor-pointer absolute top-0 right-0 px-2 py-2" />

                </form>
              </div>
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
            <div className="flex gap-[14px]">

              <div className="w-[253px] p-[1px] bg-gradient-to-r from-[#6f359f94] from-10% to-[#26133663] to-90% rounded-[8px]">
                <p className="text-[#B2A6B9] font-amulya text-[14px] cursor-pointer mt-[12px] mb-[18px] ml-[12px]">contact@terminalabs.io</p>
                <p className="text-[#3CBDF4] font-amulya text-[14px] font-medium cursor-pointer mb-[12px] ml-[12px]">Let’s chat</p>
              </div>
              <div className="w-[253px] p-[1px] bg-gradient-to-r from-[#6f359f94] from-10% to-[#26133663] to-90% rounded-[8px]">
                <p className="text-[#B2A6B9] font-amulya text-[14px] cursor-pointer mt-[12px] mb-[18px] ml-[12px]">Twitter</p>
                <p className="text-[#3CBDF4] font-amulya text-[14px] font-medium cursor-pointer mb-[12px] ml-[12px]">Let’s chat</p>
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
