import { useState } from "react";
import { useNavigate } from "react-router";
import cardOpenSound from '../assets/cardOpen.mp3';
import corgiAsk from '../assets/corgiAsk.webp'
import { useRef } from 'react';

function Question() {
    const navigate = useNavigate()
    const [yesButtonSize, setYesButtonSize] = useState(1);
    const audioRef = useRef(null);

    const handleNoClick = () => {
        setYesButtonSize((prevSize) => prevSize + 1);
    };

    const handleCardClick = () => {
        navigate("/valentine")
        if (!audioRef.current) {
            audioRef.current = new Audio(cardOpenSound);
            audioRef.current.play();
        } else if (audioRef.current.paused) {
            audioRef.current.play();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-12">
            <h1 className="text-2xl font-bold text-red-600 mb-8 text-center">
                Will you be my Valentine? ❤️
            </h1>
            <img className="w-4/6 lg:w-1/6 mb-14 mt-5"
                src={corgiAsk} />
            <div className="space-x-4">
                <button
                    style={{ transform: `scale(${yesButtonSize})` }}
                    className="bg-red-600 text-white font-semibold py-4 px-8 rounded-lg transition-transform duration-300"
                    onClick={handleCardClick}
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
