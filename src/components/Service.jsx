function Service() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 h-fit">
                <div className="border border-gray-700 bg-gray-800/30 px-3 py-3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-amber-300/10">
                    <div className="flex justify-center items-center mr-2">
                        <img
                            src="img/web.jpg"
                            alt="web-icon"
                            width={70}
                            className="p-2 rounded-2xl"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="text-md font-bold text-white">
                            Web Developer
                        </p>
                        <p className="text-sm text-gray-400">
                            Membuat website yang responsive dan memiliki
                            tampilan yang menarik dan mudah digunakan.
                        </p>
                    </div>
                </div>
                <div className="border border-gray-700 bg-gray-800/30 px-3 py-3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-amber-300/10">
                    <div className="flex justify-center items-center mr-2">
                        <img
                            src="img/game.jpg"
                            alt="game-icon"
                            width={70}
                            className="p-2 rounded-2xl"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="text-md font-bold text-white">
                            Game Developer
                        </p>
                        <p className="text-sm text-gray-400">
                            Membuat game yang menarik dan menantang, serta
                            memiliki kemampuan untuk mengembangkan game yang
                            sesuai dengan kebutuhan pelanggan.
                        </p>
                    </div>
                </div>
                <div className="border border-gray-700 bg-gray-800/30 px-3 py-3 rounded-lg flex justify-center items-center cursor-pointer hover:bg-amber-300/10">
                    <div className="flex justify-center items-center mr-2">
                        <img
                            src="img/modeling.jpg"
                            alt="modeling-icon"
                            width={70}
                            className="p-2 rounded-2xl"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="text-md font-bold text-white">
                            3D Modeling
                        </p>
                        <p className="text-sm text-gray-400">
                            Membuat model 3D yang detil dan akurat, serta
                            memiliki kemampuan untuk mengedit dan mengoptimalkan
                            model 3D yang dibuat.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
