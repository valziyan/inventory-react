import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return (
        <>
            <nav className="bg-blue-500 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-lg font-bold">Inventory System</h1>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="hover:underline">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}