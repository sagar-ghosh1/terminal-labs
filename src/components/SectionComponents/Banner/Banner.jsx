import wavingHand from '@/assets/banner/noto_waving-hand.png'
import { Button } from '@/components/ui/button';
import { MdArrowOutward } from "react-icons/md";
import bannerAnimation from "@/assets/banner/circle_wave_trans.gif"
import Container from '../Container/Container';
import scrollDown from '@/assets/banner/Rectangle.png'


const Banner = () => {
  return (
    <div className="heroBg overflow-hidden">
      <div className='shadowBg'>
        <div className='shadowLeft'>
          <div className='shadowRight'>
            <Container>
              <div className='flex flex-col-reverse md:flex-row items-center pt-[100px] md:pt-[200px] pb-[150px]'>
                <div className='mt-20 md:mt-0'>
                  <p className='text-[15px] md:text-[16px] text-[#3CBDF4] font-switzer uppercase mb-2'>Web3 Visionary Success Journey</p>
                  <div>
                    <div className='flex items-center'>
                      <p className='text-4xl md:text-5xl xl:text-6xl font-bold font-switzer text-transparent bg-clip-text bg-gradient-to-r from-[#A84EFF] to-[#7815F8] mr-6 py-3'>Web3 Mastery</p>
                      <img src={wavingHand} alt="wavingHand" className='w-10' />
                    </div>
                    <p className='text-4xl md:text-5xl xl:text-6xl text-white font-bold font-switzer mt-1'>with Terminal Labs</p>
                  </div>

                  <p className='text-[17px] text-[#B2A6B9] md:w-[70%] xl:w-[75%] my-7'>Terminal Labs is at the forefront of shaping visionary success in the Web3 landscape.</p>
                  <Button className="flex justify-center items-center rounded-[8px] group cursor-pointer px-6 md:px-9 border border-[#a74fff4f]">
                    <span className='text-[15px] font-amulya'>See Partners</span>
                    <MdArrowOutward className='text-[17px] ml-2 group-hover:-mt-2 duration-300' />
                  </Button>
                </div>

                <div className='md:mr-10 xl:-mr-20'>
                  <img src={bannerAnimation} alt="Animation" className='md:w-[550px] xl:w-[650px] h-auto scale-y-150' />
                </div>
              </div>

              {/* Scroll Down */}
              <div className='flex justify-center'>
                <img src={scrollDown} alt="Scroll Down" />
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
