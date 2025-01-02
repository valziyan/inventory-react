import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Layout (){
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <footer>© 2025 Inventory System</footer>
        </>
    );
}