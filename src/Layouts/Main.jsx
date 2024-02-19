import Footer from "@/shared/Footer/Footer";
// import NavBar from "@/shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
