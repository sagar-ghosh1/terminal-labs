import logo1 from '@/assets/labs/Frame1.png'
import logo2 from '@/assets/labs/Frame2.png'
import logo3 from '@/assets/labs/Frame3.png'
import logo4 from '@/assets/labs/Frame4.png'
import logo5 from '@/assets/labs/Frame5.png'
import logo6 from '@/assets/labs/Frame6.png'
import logo7 from '@/assets/labs/Frame7.png'
import logo8 from '@/assets/labs/Frame8.png'
import logo9 from '@/assets/labs/Frame9.png'
import Container from '../Container/Container'

const Customers = () => {
  return (
    <div className='bg-[#180c21] pt-12 pb-10 overflow-hidden relative -my-[2px]'>
      {/* Shadow */}
      <div className="md:w-[320px] md:h-[135px] bg-[#2a1b52] absolute left-0 -top-5 blur-3xl" />
      <div className="md:w-[110px] md:h-[50px] bg-[#2a1b52] absolute left-0 top-36 blur-3xl" />
      <div className="md:w-[230px] md:h-[80px] bg-[#291538] absolute left-0 top-52 blur-3xl" />
      <Container>
        <div>
          <p className="text-white text-center font-switzer text-[22px] mb-[71px]">500,000+ Customers Trust Terminal Labs</p>
          
          {/* Company logo */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-6 md:gap-y-10 md:ml-12 lg:ml-20 xl:ml-0'>
            <img src={logo1} alt="Logo Image" className='w-[120px] md:w-[125px] xl:w-[133px] md:h-[37px] xl:h-[42px]' />
            <img src={logo2} alt="Logo Image" className='w-[130px] md:w-[133px] xl:w-[143px] md:h-[45px] xl:h-[52px]' />
            <img src={logo3} alt="Logo Image" className='w-[120px] md:w-[128px] xl:w-[139px] md:h-[40px] xl:h-[44px] xl:ml-1' />
            <img src={logo4} alt="Logo Image" className='w-[175px] md:w-[180px] xl:w-[190px] md:h-[45px] xl:h-[52px] xl:ml-1' />
            <img src={logo5} alt="Logo Image" className='w-[145px] md:w-[152px] xl:w-[162px] md:h-[40px] xl:h-[45px] xl:ml-10' />
            <img src={logo6} alt="Logo Image" className='w-[175px] md:w-[180px] xl:w-[199px] md:h-[45px] xl:h-[50px] xl:ml-[100px]' />
            <img src={logo7} alt="Logo Image" className='w-[180px] md:w-[190px] xl:w-[200px] md:h-[40px] xl:h-[48px] xl:ml-[165px]' />
            <img src={logo8} alt="Logo Image" className='w-[107px] md:w-[117px] xl:w-[128px] md:h-[50px] xl:h-[56px] xl:ml-[245px]' />
            <img src={logo9} alt="Logo Image" className='w-[85px] md:w-[90px] xl:w-[107px] md:h-[50px] xl:h-[58px] ml-[8.5rem] lg:ml-[450px] xl:ml-[240px]' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Customers;
