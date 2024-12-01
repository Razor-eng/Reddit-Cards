/* eslint-disable react/prop-types */

function timeAgo(timestamp) {
    const now = new Date();
    const date = new Date(timestamp);
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
        return `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (months > 0) {
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
}

const Card = ({ description, author, title, score, URL, time }) => {
    return (
        <div className="w-full h-96 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col justify-between h-full pb-4">
                <div className="flex flex-col">
                    <div className="flex items-center p-4 space-x-3">
                        <div className="size-9 border-2 p-1 rounded-full">
                            <img src="/avatar.png" alt="User Avatar" className="object-contain rounded-full" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-700">{author}</p>
                            <p className="text-xs text-gray-500">{timeAgo(time)}</p>
                        </div>
                    </div>

                    <div className="p-4 flex-1">
                        <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">{title}</h2>
                        {description ?
                            <p className="mt-2 text-gray-600 line-clamp-5 text-sm">{description}</p>
                            :
                            <p className="mt-5 flex w-full h-full items-center justify-center text-gray-600 text-sm">No Description Available</p>
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg ml-2">Score: <span className="text-green-500">{score}</span></h3>
                    <a href={URL} target="_blank" className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transform transition duration-300 hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full text-center">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card