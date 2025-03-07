import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    faHtml5,
    faCss3,
    faJs,
    faPhp,
    faReact,
    faNodeJs,
    faGithub,
    faGit,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile() {
    const [activeTab, setActiveTab] = useState("about");

    return (
        <div className="relative flex flex-col h-screen w-screen bg-black text-white">
            <div className="flex flex-row items-start justify-center gap-5 h-full w-full p-10">
                <div className="bg-gray-900 p-10 rounded-2xl w-auto shadow-lg text-center h-150">
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
                            href="#"
                            className="text-teal-400 hover:text-teal-300"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a
                            href="#"
                            className="text-teal-400 hover:text-teal-300"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="#"
                            className="text-teal-400 hover:text-teal-300"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>

                {/* Main content */}
                <div className="bg-gray-900 p-6 rounded-2xl w-3/5 shadow-lg min-h-150 max-h-fit">
                    <nav className="flex justify-end space-x-6">
                        <div
                            className="bg-gray-800 px-4 py-2 rounded-md flex gap-5"
                            style={{ width: "max-content", marginLeft: "auto" }}
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
                    {activeTab === "about" && (
                        <div>
                            <h2 className="text-2xl font-bold">About Me</h2>
                            <hr className="blue-line mt-2" />
                            <p className="text-gray-400 mt-2 text-md">
                                Hello! My name is Nanang Marvin Kurniawan, and I
                                am a passionate Full Stack Developer with
                                approximately 2 years of experience in software
                                development. I specialize in creating responsive
                                and functional web applications. Throughout my
                                journey as a Full Stack Developer, I have gained
                                expertise in both frontend and backend
                                technologies, allowing me to deliver seamless
                                and user-friendly digital experiences.
                            </p>

                            <h3 className="mt-10 text-2xl font-bold">
                                My Skills
                            </h3>
                            <div className="grid grid-cols-4 gap-4 mt-2 h-fit">
                                {[
                                    faHtml5,
                                    faCss3,
                                    faJs,
                                    faPhp,
                                    faReact,
                                    faNodeJs,
                                ].map((icon, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-700 px-3 py-3 rounded-lg flex justify-center items-center"
                                    >
                                        <FontAwesomeIcon
                                            icon={icon}
                                            className="mr-2"
                                        />
                                        {icon.iconName.toUpperCase()}
                                    </span>
                                ))}
                            </div>

                            <h3 className="mt-10 text-2xl font-bold">Tools</h3>
                            <div className="grid grid-cols-4 gap-4 mt-2 h-fit">
                                {[faGithub, faGit, faGithub].map(
                                    (icon, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-700 px-3 py-3 rounded-lg flex justify-center items-center"
                                        >
                                            <FontAwesomeIcon
                                                icon={icon}
                                                className="mr-2"
                                            />
                                            {icon.iconName.toUpperCase()}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    )}

                    {/* service content */}
                    {activeTab === "services" && (
                        <div>
                            <h2 className="text-2xl font-bold">Services</h2>
                            <hr className="blue-line mt-2" />
                            <div className="grid grid-cols-2 gap-4 mt-2 h-fit">
                                <div className="border border-gray-700 bg-gray-800/30 px-3 py-3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-amber-300/10">
                                    <div className="flex justify-center items-center mr-2">
                                        <img
                                            src="https://meowish-0.github.io/Professional-Website/images-and-icons/icons/location-icon.png"
                                            alt="email-icon"
                                            width={70}
                                            className="p-2"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-md font-bold text-white">
                                            Web Developer
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            Semarang
                                        </p>
                                    </div>
                                </div>
                                <div className="border border-gray-700 bg-gray-800/30 px-3 py-3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-amber-300/10">
                                    <div className="flex justify-center items-center mr-2">
                                        <img
                                            src="https://meowish-0.github.io/Professional-Website/images-and-icons/icons/location-icon.png"
                                            alt="email-icon"
                                            width={70}
                                            className="p-2"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-md font-bold text-white">
                                            Game Developer
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            Semarang
                                        </p>
                                    </div>
                                </div>
                                <div className="border border-gray-700 bg-gray-800/30 px-3 py-3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-amber-300/10">
                                    <div className="flex justify-center items-center mr-2">
                                        <img
                                            src="https://meowish-0.github.io/Professional-Website/images-and-icons/icons/location-icon.png"
                                            alt="email-icon"
                                            width={70}
                                            className="p-2"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-md font-bold text-white">
                                            3D Modeling
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            Semarang
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                        </div>
                    )}

                    {/* contact contents */}
                    {activeTab === "contact" && (
                        <div>
                            <h2 className="text-2xl font-bold">Contact</h2>
                            <hr className="blue-line mt-2" />
                            <div className="">
                                <input
                                    className="flex-1 border border-gray-700 rounded-lg p-2 w-full"
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Name"
                                    required
                                />
                                <input
                                    className="flex-1 border border-gray-700 rounded-lg p-2 w-full mt-3"
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Email"
                                    required
                                />
                                <textarea
                                    name="message"
                                    className="flex-1 border border-gray-700 rounded-lg p-2 w-full min-h-50 max-h-100 mt-3"
                                    id="message-input"
                                    placeholder="Your Message"
                                ></textarea>
                                <div className="flex justify-end mt-3">
                                    <button
                                        className="bg-amber-300 hover:bg-amber-400 text-gray-950 font-sm px-5 py-1 rounded-lg"
                                        type="submit"
                                        id="submit-btn"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <footer className="absolute bottom-5 text-gray-500 text-sm w-full text-center">
                &copy;2025 Meowish. All rights reserved.
            </footer>
        </div>
    );
}
