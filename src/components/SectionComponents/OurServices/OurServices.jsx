import Container from "../Container/Container";
import icon1 from "@/assets/services/Group71068.png"
import icon2 from "@/assets/services/Group71069.png"
import icon3 from "@/assets/services/grap.png"
import shape from "@/assets/services/Rectang.png"

const OurServices = () => {
  return (
    <div className=" bg-gradient-to-b from-[#110A15] to-[#180c21] overflow-hidden relative pt-3 -mt-[2px]" id="services">
      {/* shadow */}
      <div className="lg:w-[150px] xl:w-[410px] h-[550px] md:bg-[#1F0B2F] absolute right-0 blur-3xl" />

      <Container>
        {/* Section Heading */}
        <div className="text-center pb-10" id="services">
          <p className='text-[15px] md:text-[16px] text-[#3CBDF4] font-switzer uppercase mb-3' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1600">Let see our Services</p>
          <div className="text-white text-[30px] md:text-4xl xl:text-4xl font-semibold font-switzer">
            <p className="w-full md:w-[70%] lg:w-[50%] xl:w-[55%] 2xl:w-[70%] mx-auto leading-[48px]" data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1800">Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A84EFF] to-[#7815F8] font-bold"> Web3 Services </span> by Terminal Labs</p>
          </div>
        </div>

        <div className="relative">
          {/* Shadow and shape */}
          <div className="md:w-[320px] xl:w-[270px] h-60 bg-gradient-to-t from-[#45298881] to-[#180C21] absolute -bottom-8 -left-32 blur-3xl " />

          {/* Services Card */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
            {/* Card One */}
            <div className="bg-gradient-to-t from-[#251935] to-[#211627] p-6 rounded-[16px] relative" data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <div className="shadowOne w-96 h-60 absolute -left-6 top-5 opacity-75" />
              <img src={icon1} alt="Icons" className="w-[86px]" />

              <div>
                <p className="text-white font-switzer text-[18px] mt-6 mb-3">Strategic Project Incubation</p>

                <div className="text-[#B2A6B9] font-amulya text-[14px] space-y-3 md:pr-1">
                  <p>At Terminal Labs, our core mission is to unite visionary minds with groundbreaking projects, propelling them to their full growth potential.</p>
                  <p>We streamline the complex journey for token issuers and investors, ensuring smooth introductions to premier crypto exchanges globally.</p>
                </div>
              </div>
            </div>

            {/* Card Two */}
            <div className="bg-gradient-to-t from-[#1f1526] to-[#241630] p-6 rounded-[16px] relative" data-aos="flip-left"
              data-aos-easing="ease-in-cubic"
              data-aos-duration="2000">
              <div className="shadowOne w-96 h-60 absolute -left-6 top-5 opacity-75" />
              <div className="relative">
                <img src={shape} alt="Icons" className="w-[86px]" />
                <img src={icon2} alt="Icons" className="w-[40px] absolute top-6 left-7" />
              </div>

              <div>
                <p className="text-white font-switzer text-[18px] mt-6 mb-3">Tokenomics Whitepaper Design</p>

                <div className="text-[#B2A6B9] font-amulya text-[14px] space-y-3">
                  <p>Our expertise lies in crafting your project's narrative to shine with utmost clarity and regulatory compliance.</p>
                  <p>We tailor tokenomics to fit your project's goals, creating a vibrant ecosystem that incentivizes active participation and ensures value growth for all stakeholders.</p>
                </div>
              </div>
            </div>

            {/* Card Three */}
            <div className="bg-gradient-to-t from-[#23152c] to-[#2b153d] p-6 rounded-[16px] relative" data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <div className="shadowOne w-96 h-60 absolute -left-6 top-5 opacity-75" />
              <div className="relative">
                <img src={shape} alt="Icons" className="w-[86px]" />
                <img src={icon3} alt="Icons" className="w-[37px] absolute top-6 left-6" />
              </div>

              <div>
                <p className="text-white font-switzer text-[18px] mt-6 mb-3">Sustainable Growth Alignment</p>

                <div className="text-[#B2A6B9] font-amulya text-[14px] space-y-3 md:pr-1">
                  <p>We're committed to the long-haul, strategically distributing tokens to align the objectives of founders, investors, and the community.</p>
                  <p>Our approach is rooted in nurturing sustainable development, abiding by regulations, and paving the way for a resilient future.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurServices;
