function Projects() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2 h-fit">
                {[
                    {
                        name: "Simple Qr Code Generator",
                        desc: "Qr code generator use javascript",
                        link: "https://slashmk303.github.io/qr-code-generate-simple/",
                        imageSrc: "img/qrgenerator.jpg",
                    },
                    {
                        name: "Personal Website",
                        desc: "My personal website",
                        link: "https://nanangmarvin.vercel.app/",
                        imageSrc: "img/personalweb.jpg",
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
