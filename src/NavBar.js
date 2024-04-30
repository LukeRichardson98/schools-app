import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <h1 className="text-white text-lg font-semibold">School App</h1>
                        {/* <img src="schools-app/public/logo-i.png" alt="Description of your image"></img> */}
                    </div>
                    <div className="flex items-center">
                        <ul className="flex space-x-4">
                            <li>
                                <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                            </li>
                            <li>
                                <Link to="/schools" className="text-white hover:text-gray-300">Schools</Link>
                            </li>
                            <li>
                                <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
