import { Button } from "@/components/ui/button";
import Container from "../Container/Container";
import { MdArrowOutward } from "react-icons/md";

const ShareWithUs = () => {
  return (
    <div className="bg-[#180c21]">
      <Container>
        <div className='p-[1px] bg-gradient-to-b from-[#70636365] from-10% to-[#6d3dfe93] to-90% rounded-2xl'>
          <div>
            <div>
              <div>
                <h2>Got a Project Idea! Share with us for develop!</h2>
                <p>Got a project idea you're excited about? Share it with us today and let's make it happen together</p>
                <Button className="rounded-[8px] group cursor-pointer px-5 md:px-7 border border-[#a74fff4f]">
                  <span className="flex justify-center items-center">
                    <p className='text-[15px] font-amulya'>Contact</p>
                    <MdArrowOutward className='text-[17px] ml-2 group-hover:-mt-2 duration-300' />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div >
      </Container >
    </div >
  );
};

export default ShareWithUs;
