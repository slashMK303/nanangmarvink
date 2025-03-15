function Service() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 h-fit">
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
                        <p className="text-sm text-gray-400">Semarang</p>
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
                        <p className="text-sm text-gray-400">Semarang</p>
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
                        <p className="text-sm text-gray-400">Semarang</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
