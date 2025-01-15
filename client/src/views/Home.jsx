import MessageCard from '../components/MessageCard';
import corgiHappy from '../assets/corgiHappy.webp'

function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-gray-800">
            <h1 className="text-2xl font-bold text-red-600 text-center mb-10">Happy Valentine’s Day</h1>
            <img className="w-4/6 lg:w-1/6"
                src={corgiHappy} />
            <MessageCard />
        </div>
    );
}

export default Home