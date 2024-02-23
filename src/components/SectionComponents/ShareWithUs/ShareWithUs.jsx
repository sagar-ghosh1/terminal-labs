import { Button } from "@/components/ui/button";
import Container from "../Container/Container";
import { MdArrowOutward } from "react-icons/md";
import qrCode from "@/assets/develop/qrcode.png";
import patternBg from '@/assets/develop/Group.png';

const ShareWithUs = () => {
  return (
    <div className="bg-[#180c21] relative pt-10 md:pt-0 pb-14 overflow-hidden">
      <Container>
        <div className="xl:mt-[160px]">

          <div className="p-[1px] bg-gradient-to-r from-[#6f359f94] from-10% to-[#261336] to-90% rounded-2xl">
            <div className='bg-gradient-to-r from-[#1e1425] from-10% to-[#251531] to-90% rounded-2xl'>
              <div className="">
                <div style={{ backgroundImage: `url(${patternBg})` }} className="bg-no-repeat bg-bottom md:bg-contain rounded-2xl">
                  <div className="bg-[#261233] bg-opacity-75 rounded-2xl">

                    <div className="md:flex justify-between items-center py-6 px-8 md:py-9 md:px-12 xl:py-12 xl:px-16">
                      <div>
                        <div className="text-white text-3xl md:text-4xl xl:text-4xl font-semibold font-switzer md:w-[490px] xl:max-w-[475px]">
                          <p className="mb-2">Got a Project Idea! Share</p>
                          <p>with us for develop!</p>
                        </div>
                        <p className="text-[#B2A6B9] font-amulya md:w-[330px] xl:w-[415px] 2xl:w-[420px] mt-5 mb-7">Got a project idea you're excited about? Share it with us today and let's make it happen together</p>

                        <Button className="rounded-[8px] group cursor-pointer px-5 md:px-7 border border-[#a74fff4f]">
                          <span className="flex justify-center items-center">
                            <p className='text-[15px] font-amulya'>Contact</p>
                            <MdArrowOutward className='text-[17px] ml-2 group-hover:-mt-2 duration-300' />
                          </span>
                        </Button>
                      </div>

                      <div className="mt-14 md:mt-0">
                        <img src={qrCode} alt="QR Code" className="md:w-[300px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          </div>
        </div>
      </Container >
    </div >
  );
};

export default ShareWithUs;

