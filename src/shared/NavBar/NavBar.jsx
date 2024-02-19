// import { Link } from "react-router-dom";
// import logo from "@/assets/banner/Frame.png"
// import { Button } from "@/components/ui/button";
// import { IoMenu, IoClose } from "react-icons/io5";
// import { useState } from "react";
// import Container from "@/components/SectionComponents/Container/Container";

// const NavBar = () => {
//   const [open, setOpen] = useState(false);

//   const LinkNames = [
//     { name: "About", link: "/" },
//     { name: "Services", link: "/" },
//     { name: "Partners", link: "/" },
//   ];

//   return (
//     <div>
//       <Container>
//         <div className="w-full fixed top-0 left-0">
//           <div className="md:flex justify-between items-center bg-white py-4 2xl:px-36 xl:px-32 md:px-16 sm:px-2 px-4">
//             <Link>
//               <img src={logo} alt="Logo" />
//             </Link>

//             <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
//               {
//                 open ? <IoClose /> : <IoMenu />
//               }
//             </div>

//             <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 ${open ? 'top-[78px] opacity-100' : 'top-[-490px]'}`}>
//               {
//                 LinkNames.map((link, index) => (
//                   <li key={index} className="font-amulya md:ml-8 my-4 md:my-0">
//                     <a href={link.link}>{link.name}</a>
//                   </li>
//                 ))
//               }
//               <Button className="font-amulya md:hidden">Contact</Button>
//             </ul>

//             <Button className="font-amulya hidden md:block">Contact</Button>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default NavBar;
