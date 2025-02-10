import { useState } from 'react';

const MessageCard = () => {
    const [message, setMessage] = useState('');
    const [fade, setFade] = useState(false);

    const loveNotes = [
        "Are you a magician? Because whenever I look at you, everyone else disappears!",
        "I must be a snowflake because I’ve fallen for you!",
        "Is your name Google? Because you've got everything I've been searching for!",
        "If you were a vegetable, you'd be a cute-cumber!",
        "Are you tired? Because you've been running through my mind all day. And probably all night too.",
        "Do you have a map? Because I keep getting lost in your eyes.",
        "If you were a superhero, what would your power be? My guess is making me smile",
        "Are you a time traveler? Because you make every moment feel special",
        "If bring treats, will Maple let me hang out with you?",
        "I'm not sure what's sweeter, you or Lessy's puppy dog eyes.",
        "I'm not sure if I'm more excited to see you or Maple. Just kidding...mostly.",
        "I'm not sure who's cuter, you or Lessy. It's a tough call.",
        "I'm barking mad about you...just like Lessy when she sees a cat."
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
        <div className="p-6 rounded-lg text-center lg:w-1/4">
            <p className={`text-lg font-semibold mb-6 ${fade ? 'fade-in' : 'fade-out'}`}>
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
