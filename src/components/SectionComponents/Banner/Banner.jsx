import { useEffect, useRef } from "react";
import wavingHand from '@/assets/banner/noto_waving-hand.png'
import { Button } from '@/components/ui/button';
import { MdArrowOutward } from "react-icons/md";
import bannerAnimation from "@/assets/banner/circle_wave_trans.gif"
import Container from '../Container/Container';
import scrollDown from '@/assets/banner/Rectangle.png'
import heroVideo from '@/assets/banner/hero.mp4'


const Banner = () => {
  const vidRef = useRef();

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.muted = false;
    }
  }, []);

  return (
    <div className="heroBg overflow-hidden -mt-[92px]">
      <div className='shadowBg'>
        <div className='shadowLeft'>
          <div className='shadowRight'>
            <Container>
              <div className='flex flex-col-reverse md:flex-row justify-between 2xl:justify-around items-center gap-x-8 pt-[100px] md:py-[200px]'>
                <div className='md:w-1/2 mt-20 mb-14 md:mb-0 md:mt-0'>
                  <p className='text-[15px] md:text-[16px] text-[#3CBDF4] font-switzer uppercase mb-2'>Web3 Visionary Success Journey</p>
                  <div>
                    <div className='flex items-center'>
                      <p className='text-4xl md:text-5xl xl:text-6xl font-bold font-switzer text-transparent bg-clip-text bg-gradient-to-r from-[#A84EFF] to-[#7815F8] mr-6 py-3'>Web3 Mastery</p>
                      <img src={wavingHand} alt="wavingHand" className='w-10' />
                    </div>
                    <p className='text-4xl md:text-5xl xl:text-6xl text-white font-bold font-switzer mt-1'>with Terminal Labs</p>
                  </div>

                  <p className='text-[17px] text-[#B2A6B9] md:w-[70%] xl:w-[75%] my-7'>Terminal Labs is at the forefront of shaping visionary success in the Web3 landscape.</p>
                  <Button className="flex justify-center items-center rounded-[8px] group cursor-pointer px-5 md:px-7 border border-[#a74fff4f]">
                    <span className='text-[15px] font-amulya'>See Partners</span>
                    <MdArrowOutward className='text-[17px] ml-2 group-hover:-mt-2 duration-300' />
                  </Button>
                </div>

                {/* <div className="md:mr-10 xl:-mr-20 mt-10 md:mt-0">
                  <img src={bannerAnimation} alt="Animation" className='md:w-[550px] xl:w-[650px] h-auto scale-y-150' />
                </div> */}
                
                <div className='md:w-1/2'>
                  <video autoPlay controls loop muted className=" rounded-xl">
                    <source
                      src={heroVideo}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>

              {/* Scroll Down */}
              {/* <div className='flex justify-center'>
                <img src={scrollDown} alt="Scroll Down" />
              </div> */}

              {/* Scroll Down Animation */}
              <a href="#services">
                <div className="scroll-down"></div>
              </a>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
