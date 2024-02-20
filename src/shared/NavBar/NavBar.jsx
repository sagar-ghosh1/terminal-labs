import { Link } from "react-router-dom";
import logo from "@/assets/banner/Frame.png"
import { Button } from "@/components/ui/button";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import Container from "@/components/SectionComponents/Container/Container";
import { MdArrowOutward } from "react-icons/md";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);

  const LinkNames = [
    { name: "About", link: "/" },
    { name: "Services", link: "/" },
    { name: "Partners", link: "/" },
  ];

  if (typeof window !== 'undefined') {
    const changeColor = () => {
      if (window?.scrollY >= 50) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener('scroll', changeColor);
  }

  return (
    <div className={color ? 'sticky top-0 z-50 duration-300 bg-[#250F3A] bg-opacity-75 text-[#d1d1d1] shadow-md pt-0 navContainer' : 'navContainer after:pt-2 duration-300'}>
      <Container>
        <div className="w-full top-0 left-0 z-10">
          <div className="md:flex justify-between items-center py-4 ">
            <Link>
              <img src={logo} alt="Logo" className="w-[165px]"/>
            </Link>

            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden">
              {
                open ? <IoClose /> : <IoMenu />
              }
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1px] left-0 w-full bg-[#2C164F] md:bg-transparent md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 ${open ? 'top-[60px] opacity-100' : 'top-[-490px]'}`}>
              {
                LinkNames.map((link, index) => (
                  <li key={index} className="text-[#d1d1d1] font-amulya font-normal md:ml-8 my-4 md:my-0">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))
              }
              <Button className="flex justify-center items-center rounded-[8px] group cursor-pointer px-5 md:px-7 border border-[#a74fff4f] md:hidden">
                <span className='text-[15px] font-amulya'>See Partners</span>
                <MdArrowOutward className='text-[17px] ml-2 group-hover:-mt-2 duration-300' />
              </Button>
            </ul>

            <Button className="rounded-[8px] group cursor-pointer px-5 md:px-7 border border-[#a74fff4f] hidden md:block">
              <span className="flex justify-center items-center">
                <p className='text-[15px] font-amulya'>Contact</p>
                <MdArrowOutward className='text-[17px] ml-2 group-hover:-mt-2 duration-300' />
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
