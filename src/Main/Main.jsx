import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    const isLoginPage = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {isLoginPage || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isLoginPage || <Footer></Footer>}
        </div>
    );
};

export default Main;