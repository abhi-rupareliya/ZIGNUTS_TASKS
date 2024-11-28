import { FaStar, FaTrophy } from 'react-icons/fa';

export default function Game({ title, platform, genre, score, editors_choice }) {
    return (
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            {/* title */}
            <h3 className="font-bold text-xl text-gray-800 mb-2 truncate">{title}</h3>

            {/* platform and genre */}
            <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-500">{platform}</p>
                <div>
                    {
                        genre.includes(',') ? genre.split(',').map((g, index) => (
                            <span key={index} className="text-xs text-gray-500 mx-2 px-3 py-1 bg-gray-200 rounded-full">{g}</span>
                        )) : <span className="text-xs text-gray-500 px-3 py-1 bg-gray-200 rounded-full">{genre}</span>
                    }
                </div>
            </div>

            {/* rating */}
            <div className="flex items-center mb-3">
                <FaStar className="text-yellow-500 mr-1" />
                <span className="font-semibold text-gray-800">{score}</span>
            </div>

            {/* editor's choice badge */}
            {editors_choice === 'Y' && (
                <div className="flex items-center mb-4">
                    <FaTrophy className="text-green-500 mr-2" />
                    <span className="px-3 py-1 bg-green-100 text-green-500 rounded-full text-xs font-bold">
                        Editor's Choice
                    </span>
                </div>
            )}

            <div className="flex justify-between items-center">
                <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors duration-300">
                    View Details
                </button>
            </div>
        </div>
    );
}
