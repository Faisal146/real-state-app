import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Root = () => {
    return (
        <div className=" mx-auto font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>      
            <Footer></Footer>
        </div>
    );
};

export default Root;