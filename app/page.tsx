import React from 'react';

const CardLayout: React.FC = () => {
    return (
        <div className="container mx-auto p-6 flex flex-col gap-6">
            <h1 className="text-5xl text-center">Card Layout</h1>
            <h1 className="text-3xl text-center">Assignment Class-09 sunday 2-5</h1>
            {/* First Row with 2 Cards */}
            <div className="flex gap-6 justify-between items-center">
                <div className="bg-white border border-gray-300 rounded-lg shadow text-center transform transition-transform hover:scale-105">
                    <img src="/1.png" alt="1" className="rounded-t-lg" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Programming Fundamentals</h3>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg shadow text-center transform transition-transform hover:scale-105">
                    <img src="/2.png" alt="2" className="rounded-t-lg" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Web 2 Using NextJS</h3>
                </div>
            </div>

            {/* Second Row with 3 Cards */}
            <div className="flex gap-6">
                <div className="bg-white border border-gray-300 rounded-lg shadow text-center transform transition-transform hover:scale-105">
                    <img src="/3.png" alt="3" className="rounded-t-lg" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Earn as You Learn</h3>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg shadow text-center transform transition-transform hover:scale-105">
                    <img src="/4.png" alt="4" className="rounded-t-lg" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Artificial Intelligence</h3>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg shadow text-center transform transition-transform hover:scale-105">
                    <img src="/5.png" alt="5" className="rounded-t-lg" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Web 3 and Metaverse</h3>
                </div>
            </div>
        </div>
    );
};

export default CardLayout;
