import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Projects from "./Project";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";

export default function Profile() {
    const [activeTab, setActiveTab] = useState("about");

    return (
        <div className="relative flex flex-col min-h-screen bg-black text-white">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-5 p-5 lg:p-10">
                {/* Profile content */}
                <div className="card-profile bg-gray-900 p-5 lg:p-10 rounded-2xl shadow-lg text-center w-full lg:w-auto lg:h-147">
                    <img
                        src="img/profile.jpg"
                        alt="Profile"
                        className="w-24 h-24 mx-auto rounded-2xl"
                    />
                    <h2 className="mt-4 text-2xl font-bold">
                        Nanang Marvin Kurniawan
                    </h2>
                    <span className="mt-6 bg-gray-700 text-sm px-5 py-1 rounded-md mt-2 inline-block">
                        Student
                    </span>

                    <hr className="line mx-auto mt-10" />

                    <div className="mt-10 text-sm text-gray-400 space-y-1 text-left">
                        <div className="flex items-center">
                            <div className="border border-gray-700 rounded-lg shadow-md p-2 flex justify-center items-center mr-2">
                                <img
                                    src="https://meowish-0.github.io/Professional-Website/images-and-icons/icons/email-icon.png"
                                    alt="email-icon"
                                    width={15}
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm">EMAIL</p>
                                <p className="text-sm font-bold text-white">
                                    marvinkurniawan38@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="border border-gray-700 rounded-lg shadow-md p-2 flex justify-center items-center mr-2">
                                <img
                                    src="https://meowish-0.github.io/Professional-Website/images-and-icons/icons/contact-icon.png"
                                    alt="email-icon"
                                    width={15}
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm">PHONE</p>
                                <p className="text-sm font-bold text-white">
                                    +62-838-4650-6812
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="border border-gray-700 rounded-lg shadow-md p-2 flex justify-center items-center mr-2">
                                <img
                                    src="https://meowish-0.github.io/Professional-Website/images-and-icons/icons/location-icon.png"
                                    alt="email-icon"
                                    width={15}
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm">LOCATION</p>
                                <p className="text-sm font-bold text-white">
                                    Semarang
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-6 mt-10 text-2xl">
                        <a
                            href="https://github.com/slashMK303"
                            className="text-teal-400 hover:text-teal-300"
                            target="_blank"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href="#"
                            className="text-teal-400 hover:text-teal-300"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nanang-marvin-kurniawan-343a762a9/"
                            className="text-teal-400 hover:text-teal-300"
                            target="_blank"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                {/* Main content */}
                <div className="card-content bg-gray-900 p-5 lg:p-6 rounded-2xl shadow-lg w-full lg:w-3/5 min-h-147">
                    <nav className="flex justify-center lg:justify-end space-x-6 mb-5">
                        <div
                            className="bg-gray-800 px-4 py-2 rounded-md flex gap-5"
                            style={{ width: "max-content" }}
                        >
                            <button
                                onClick={() => setActiveTab("about")}
                                className={`${
                                    activeTab === "about"
                                        ? "text-yellow-400"
                                        : "text-gray-400 hover:text-yellow-400"
                                } cursor-pointer`}
                            >
                                About
                            </button>
                            <button
                                onClick={() => setActiveTab("services")}
                                className={`${
                                    activeTab === "services"
                                        ? "text-yellow-400"
                                        : "text-gray-400 hover:text-yellow-400"
                                } cursor-pointer`}
                            >
                                Services
                            </button>
                            <button
                                onClick={() => setActiveTab("projects")}
                                className={`${
                                    activeTab === "projects"
                                        ? "text-yellow-400"
                                        : "text-gray-400 hover:text-yellow-400"
                                } cursor-pointer`}
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => setActiveTab("contact")}
                                className={`${
                                    activeTab === "contact"
                                        ? "text-yellow-400"
                                        : "text-gray-400 hover:text-yellow-400"
                                } cursor-pointer`}
                            >
                                Contact
                            </button>
                        </div>
                    </nav>

                    {/* About content */}
                    {activeTab === "about" && (
                        <div>
                            <h2 className="text-2xl font-bold">About Me</h2>
                            <hr className="blue-line mt-2" />
                            <About />
                        </div>
                    )}

                    {/* service content */}
                    {activeTab === "services" && (
                        <div>
                            <h2 className="text-2xl font-bold">Services</h2>
                            <hr className="blue-line mt-2" />
                            <Service />
                        </div>
                    )}

                    {/* project contents */}
                    {activeTab === "projects" && (
                        <div>
                            <h2 className="text-2xl font-bold">Projects</h2>
                            <hr className="blue-line mt-2" />
                            <p className="text-gray-400 mt-2 text-sm">
                                Check out my latest web and software projects...
                            </p>
                            <Projects />
                        </div>
                    )}

                    {/* contact contents */}
                    {activeTab === "contact" && (
                        <div>
                            <h2 className="text-2xl font-bold">Contact</h2>
                            <hr className="blue-line mt-2" />
                            <Contact />
                        </div>
                    )}
                </div>
            </div>
            <footer className="static bottom-5 text-gray-500 text-sm w-full text-center">
                &copy;2025 Nanang M.K. All rights reserved.
            </footer>
        </div>
    );
}
