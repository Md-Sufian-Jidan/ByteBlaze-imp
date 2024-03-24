import { Outlet } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import Footer from "../src/Components/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-116px)]">
            <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;