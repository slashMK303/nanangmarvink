import { faJs, faReact, faUnity } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2 h-fit">
                {[
                    {
                        name: "Simple Qr Code Generator",
                        language: [faJs],
                        desc: "Qr code generator use javascript",
                        link: "https://slashmk303.github.io/qr-code-generate-simple/",
                        imageSrc: "img/qrgenerator.jpg",
                    },
                    {
                        name: "Personal Website",
                        language: [faReact],
                        desc: "My personal website use React",
                        link: "https://nanangmarvin.my.id/",
                        imageSrc: "img/personalweb.jpg",
                    },
                    // {
                    //     name: "First Game",
                    //     language: [faUnity],
                    //     desc: "My first game use Unity",
                    //     link: "#",
                    //     imageSrc: "img/firstgame.png",
                    // },
                ].map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-gray-800/50 hover:text-amber-400 active:text-amber-400 px-3 py-3 rounded-lg justify-center items-center text-md"
                    >
                        <img
                            src={item.imageSrc}
                            alt={`${item.name} project`}
                            className="w-full h-auto mr-2 rounded-md mb-2"
                        />
                        <div className="relative flex items-center justify-between">
                            <div className="flex flex-col">
                                {item.name}
                                <p className="text-sm text-gray-400">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="flex items-center">
                                {item.language.map((icon, index) => (
                                    <FontAwesomeIcon
                                        key={index}
                                        icon={icon}
                                        size="xl"
                                        className=""
                                    />
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}

export default Projects;
