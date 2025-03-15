import {
    faHtml5,
    faCss3,
    faJs,
    faPhp,
    faReact,
    faNodeJs,
    faGithub,
    faGit,
    faUnity,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
    return (
        <>
            <p className="text-gray-400 mt-2 text-md">
                Hello! My name is Nanang Marvin Kurniawan, and I am a passionate
                Full Stack Developer with approximately 2 years of experience in
                software development. I specialize in creating responsive and
                functional web applications. Throughout my journey as a Full
                Stack Developer, I have gained expertise in both frontend and
                backend technologies, allowing me to deliver seamless and
                user-friendly digital experiences.
            </p>

            <h3 className="mt-10 text-2xl font-bold">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2 h-fit">
                {[faHtml5, faCss3, faJs, faPhp, faReact, faNodeJs].map(
                    (icon, index) => (
                        <span
                            key={index}
                            className="bg-gray-700 px-3 py-3 rounded-lg flex justify-center items-center"
                        >
                            <FontAwesomeIcon icon={icon} className="mr-2" />
                            {icon.iconName.toUpperCase()}
                        </span>
                    )
                )}
            </div>

            <h3 className="mt-10 text-2xl font-bold">Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2 h-fit">
                {[faGithub, faGit, faGithub, faUnity].map((icon, index) => (
                    <span
                        key={index}
                        className="bg-gray-700 px-3 py-3 rounded-lg flex justify-center items-center"
                    >
                        <FontAwesomeIcon icon={icon} className="mr-2" />
                        {icon.iconName.toUpperCase()}
                    </span>
                ))}
            </div>
        </>
    );
}

export default About;
