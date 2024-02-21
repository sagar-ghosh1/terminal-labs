import { MdArrowOutward } from 'react-icons/md';
import notFound from "@/assets/notfoundpage.gif"
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="hero min-h-screen pb-10">
      <div className="hero-content text-center">
        <div>
          <div className='mb-8'>
            <img src={notFound} alt="Page Not Found" className="w-[30%] mx-auto" />
          </div>
          <h1 className="text-4xl text-[#3CBDF4] capitalize font-semibold">Oops! <br />Page not found</h1>
          <p className="text-[#B2A6B9] py-6">The page you are looking for could not be found.</p>
          <Link to="/" className="btn bg-[#7815F8] hover:bg-[#A84EFF] text-[30px] text-[#fff] rounded pl-8 pr-8 pt-4 pb-4 uppercase font-semibold"> Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;