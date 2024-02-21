import Container from '../Container/Container';
import aboutUsImg from "@/assets/about/circle-unscreen.gif"
import aboutIcon1 from "@/assets/about/Group 71042.png"
import aboutIcon2 from "@/assets/about/Group 71043.png"
import aboutIcon3 from "@/assets/about/Group 71043 (1).png"
import aboutLight from "@/assets/about/Light.png"
import aboutBall from "@/assets/about/Ball-2.png"


const AboutUs = () => {
  return (
    <div className="bg-[#110A15] relative pt-40 pb-36">
      <img className='absolute mt-[-150px] ml-10' src={aboutLight} alt="" />
      <Container>
        <div className='flex justify-center'>
          <div className='w-1/2'>
            <img className='w-[900px] mix-blend-screen absolute mt-[-85px]' src={aboutUsImg} alt="" />
          </div>

          {/* right side */}

          <div className='w-1/2'>
            <p className='font-switzer uppercase text-[#3CBDF4] text-[18px] font-medium'>About Us</p>
            <div className='max-w-[520px]'>
              <h2 className='font-switzer text-[45px] font-semibold text-[#fff] w-full mb-[50px]'>Unveiling the Genesis of <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#A84EFF] to-[#7815F8] font-semibold'>Terminal Labs'</span> Name</h2>
              {/* three down card */}
              <div>
                <div className='flex mb-[60px]'>
                  <div>
                    <img className='w-[180px]' src={aboutIcon1} alt="" />
                  </div>
                  <div className='ml-[24px]'>
                    <h5 className='font-switzer font-medium text-[#fff] text-[22px]'>From The Terminal journey</h5>
                    <p className='font-amulya text-[18px] text-[#B2A6B9] w-full'>In the early days of our founding, we sought a name that embodied our mission and the journey we take with our partners.</p>
                  </div>
                </div>
                <div className='flex mb-[60px]'>
                  <div>
                    <img className='w-[170px]' src={aboutIcon2} alt="" />
                  </div>
                  <div className='ml-[24px]'>
                    <h5 className='font-switzer font-medium text-[#fff] text-[22px]'>Guiding Innovation's Flight in Web3</h5>
                    <p className='font-amulya text-[18px] text-[#B2A6B9] w-full'>Terminal Labs stands as a crucial gathering point for ideas and dreams, readying projects for the journey ahead.</p>
                  </div>
                </div>
                <div className='flex mb-[60px]'>
                  <div>
                    <img className='w-[170px]' src={aboutIcon3} alt="" />
                  </div>
                  <div className='ml-[24px]'>
                    <h5 className='font-switzer font-medium text-[#fff] text-[22px]'>Crafting the Ascent of Visionary Projects</h5>
                    <p className='font-amulya text-[18px] text-[#B2A6B9] w-full'>Terminal Labs isn't just our name; it's our commitment to change and our role in shaping visionary projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className='flex justify-end relative'>
        <img className='absolute mt-[-150px]' src={aboutBall} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;