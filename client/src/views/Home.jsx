import MessageCard from '../components/MessageCard';
import corgiHappy from '../assets/corgiHappy.webp'

function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-gray-800">
            <h1 className="text-4xl font-bold mb-10 text-red-600">Happy Valentine’s Day</h1>
            <img className="w-3/12"
                src={corgiHappy} />
            <MessageCard />
        </div>
    );
}

export default Home