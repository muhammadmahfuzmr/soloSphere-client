import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      {/* navbar-------- */}
      <NavBar></NavBar>
      {/* -------outlet----------- */}
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>

      {/* footer------------- */}
      <Footer />
    </div>
  );
};

export default Main;
