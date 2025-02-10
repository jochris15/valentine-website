import { useState, useRef } from 'react';
import MessageCard from '../components/MessageCard';
import corgiHappy from '../assets/corgiHappy.webp';
import openAudio from '../assets/christina perri - you are my sunshine.mp3'

function Home() {
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    const handleMuteClick = () => {
        setIsMuted(!isMuted);
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center text-gray-800">
            <h1 className="text-2xl font-bold text-red-600 text-center mb-5">Happy Valentine’s Day</h1>
            <audio ref={audioRef} src={openAudio} autoPlay loop />
            <button
                onClick={handleMuteClick}
                className="absolute bottom-4 right-4"
            >
                {isMuted ? (
                    <>
                        <i className="fa-solid fa-volume-xmark fa-2xl"></i>

                    </>
                ) : (
                    <>
                        <i className="fa-solid fa-volume-high fa-2xl"></i>
                    </>
                )}
            </button>
            <img className="w-4/6 lg:w-1/6" src={corgiHappy} />
            <MessageCard />
        </div>
    );
}

export default Home;