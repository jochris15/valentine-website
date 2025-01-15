import { useState } from 'react';

const MessageCard = () => {
    const [message, setMessage] = useState('');
    const [fade, setFade] = useState(false);

    const loveNotes = [
        "You make my heart smile 💕",
        "Every day with you is a blessing 🥰",
        "You're my sunshine, my only sunshine ☀️",
        "You're my favorite notification 📱",
        "You're voice is my favorite sound 🎶",
        "You're my favorite hello and hardest goodbye 👋",
    ];

    const revealMessage = () => {
        setFade(false); // Start fade out
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * loveNotes.length);
            setMessage(loveNotes[randomIndex]);
            setFade(true); // Start fade in
        }, 500); // Duration of fade out
    };

    return (
        <div className="p-6 rounded-lg text-center">
            <p className={`text-lg font-semibold mb-4 ${fade ? 'fade-in' : 'fade-out'}`}>
                {message}
            </p>
            <button
                onClick={revealMessage}
                className="bg-red-500 text-white py-2 px-4 rounded"
            >
                Reveal Message
            </button>
        </div>
    );
};

export default MessageCard;
