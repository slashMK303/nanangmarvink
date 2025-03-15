function Projects() {
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2 h-fit">
                {[
                    {
                        name: "Simple Qr Code Generator",
                        desc: "Desc 1",
                        link: "https://slashmk303.github.io/qr-code-generate-simple/",
                        imageSrc: "img/qrgenerator.jpg",
                    },
                    {
                        name: "CSS3",
                        desc: "Desc 2",
                        link: "https://example.com/css3-project",
                        imageSrc: "img/qrgenerator.jpg",
                    },
                    {
                        name: "JavaScript",
                        desc: "Desc 3",
                        link: "https://example.com/js-project",
                        imageSrc: "img/qrgenerator.jpg",
                    },
                    {
                        name: "PHP",
                        desc: "Desc 4",
                        link: "https://example.com/php-project",
                        imageSrc: "img/qrgenerator.jpg",
                    },
                    {
                        name: "React",
                        desc: "Desc 5",
                        link: "https://example.com/react-project",
                        imageSrc: "img/qrgenerator.jpg",
                    },
                    {
                        name: "Node.js",
                        desc: "Desc 6",
                        link: "https://example.com/nodejs-project",
                        imageSrc: "img/qrgenerator.jpg",
                    },
                ].map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-gray-800/50 px-3 py-3 rounded-lg justify-center items-center text-md"
                    >
                        <img
                            src={item.imageSrc}
                            alt={`${item.name} project`}
                            className="w-full h-auto mr-2 rounded-md mb-2"
                        />
                        {item.name}
                        <p className="text-sm text-gray-400">{item.desc}</p>
                    </a>
                ))}
            </div>
        </>
    );
}

export default Projects;
