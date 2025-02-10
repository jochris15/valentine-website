import { useState } from "react";
import { useNavigate } from "react-router";
import corgiAsk from '../assets/corgiAsk.webp'

function Question() {
    const navigate = useNavigate()
    const [yesButtonSize, setYesButtonSize] = useState(1);

    const handleNoClick = () => {
        setYesButtonSize((prevSize) => prevSize + 1);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen p-12">
            <h1 className="text-2xl font-bold text-red-600 mb-5 text-center">
                Will you be my Valentine? ❤️
            </h1>
            <img className="w-4/6 lg:w-1/6 mb-14 mt-5"
                src={corgiAsk} />
            <div className="space-x-4">
                <button
                    style={{ transform: `scale(${yesButtonSize})` }}
                    className="bg-red-600 text-white font-semibold py-4 px-8 rounded-lg transition-transform duration-300"
                    onClick={() => navigate("/valentine")}
                >
                    Yes
                </button>
                <button
                    className="bg-gray-500 text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-600"
                    onClick={handleNoClick}
                >
                    No
                </button>
            </div>
        </div>
    );
};


export default Question
