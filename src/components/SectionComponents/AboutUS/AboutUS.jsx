import Container from '../Container/Container';
import aboutUsImg from "@/assets/about/07.gif"
import aboutIcon1 from "@/assets/about/Group 71042.png"
import aboutIcon2 from "@/assets/about/Group 71043.png"
import aboutIcon3 from "@/assets/about/Group 71043 (1).png"
import aboutLight from "@/assets/about/Light.png"
import aboutBall from "@/assets/about/Ball-2.png"

const AboutUs = () => {
  return (
    <div className="bg-[#110A15] relative pt-40 pb-36 overflow-hidden -mt-[2px]">
      {/* Shadow Left */}
      <div className='w-96 h-[620px] md:bg-gradient-to-b from-[#1a102d] to-[#20143cc0] absolute top-0 blur-3xl' />
      {/* Right */}
      <div className='w-32 h-[300px] bg-gradient-to-b from-[#1a102d] to-[#20143c6b] absolute top-0 right-0 blur-3xl' />
      {/* bottom right */}
      <div className='w-96 h-[80px] bg-gradient-to-b from-[#1D0C2C] to-[#1D0C2C] absolute bottom-0 right-0 blur-3xl' />

      <img className='w-[120px] md:w-[185px] absolute mt-[-150px] ml-3 2xl:ml-10 blur-[2px]' src={aboutLight} alt="shadow" />

      <Container>
        <div className='md:flex justify-between 2xl:justify-center mt-60 md:mt-0'>
          <div className='md:w-1/2'>
            <img className='md:w-[700px] xl:w-[800px] 2xl:w-[900px] mix-blend-screen absolute mt-[-310px] md:mt-[-75px] 2xl:mt-[-85px] -ml-3 md:-ml-44 scale-125 md:scale-100' src={aboutUsImg} alt="Image" />
          </div>

          {/* right side */}
          <div className='md:w-1/2 pt-8 md:pt-0'>
            <p className='font-switzer uppercase text-[#3CBDF4] text-[15px] md:text-[16px] 2xl:text-[18px] font-medium'>About Us</p>
            <div className='max-w-[520px]'>
              <h2 className='font-switzer text-[33px] md:text-[37px] 2xl:text-[45px] font-medium 2xl:font-semibold text-[#fff] w-full mb-[50px]'>Unveiling the Genesis of <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#A84EFF] to-[#7815F8] font-semibold'>Terminal Labs'</span> Name</h2>

              {/* three down card */}
              <div>
                <div className='flex mb-[30px]'>
                  <div>
                    <img className='w-[150px] 2xl:w-[180px]' src={aboutIcon1} alt="" />
                  </div>
                  <div className='ml-[24px]'>
                    <h5 className='font-switzer 2xl:font-medium text-[#fff] text-[19px] 2xl:text-[22px]'>From The Terminal journey</h5>
                    <p className='font-amulya 2xl:text-[18px] text-[#B2A6B9] md:w-[92%] 2xl:w-full'>In the early days of our founding, we sought a name that embodied our mission and the journey we take with our partners.</p>
                  </div>
                </div>

                <div className='flex mb-[30px] py-[30px] border-y border-dashed border-[#25182C] relative'>
                  {/* Custom dot */}
                  <div className='w-2 h-2 bg-[#25182C] rounded-full absolute -top-[4px] left-0' />
                  <div className='w-2 h-2 bg-[#25182C] rounded-full absolute -bottom-[4px] left-0'/>

                  <div>
                    <img className='w-[140px] 2xl:w-[170px]' src={aboutIcon2} alt="Image" />
                  </div>
                  <div className='ml-[24px]'>
                    <h5 className='font-switzer 2xl:font-medium text-[#fff] text-[19px] 2xl:text-[22px]'>Guiding Innovation's Flight in Web3</h5>
                    <p className='font-amulya 2xl:text-[18px] text-[#B2A6B9] md:w-[92%] 2xl:w-full'>Terminal Labs stands as a crucial gathering point for ideas and dreams, readying projects for the journey ahead.</p>
                  </div>
                </div>

                <div className='flex mb-[60px]'>
                  <div>
                    <img className='w-[140px] 2xl:w-[170px]' src={aboutIcon3} alt="Image" />
                  </div>
                  <div className='ml-[24px]'>
                    <h5 className='font-switzer 2xl:font-medium text-[#fff] text-[19px] 2xl:text-[22px]'>Crafting the Ascent of Visionary Projects</h5>
                    <p className='font-amulya 2xl:text-[18px] text-[#B2A6B9] md:w-[92%] 2xl:w-full'>Terminal Labs isn't just our name; it's our commitment to change and our role in shaping visionary projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className='flex justify-end relative'>
        <img className='w-[100px] md:w-[180px] absolute mt-[-70px] md:mt-[-150px] blur-[2px]' src={aboutBall} alt="Image" />
      </div>
    </div>
  );
};

export default AboutUs;