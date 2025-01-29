import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ card }) => {
    const { image, category, pricing, service_name, counselor, short_description } = card

    return (
        <>
            <div className="card mt-5 flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
                {/* Image Section */}
                <div className="w-full h-[220px]">
                    <img className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" src={image} alt={service_name} />
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow p-4">
                    <h2 className="text-2xl font-bold mb-2">{service_name}</h2>
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-semibold text-green-600">{category}</p>
                        <p className="text-lg bg-red-500 px-3 py-1 bg-opacity-30 rounded-md font-bold">
                            $<span>{pricing}</span>
                        </p>
                    </div>

                    <div className="flex justify-end items-center text-right">
                        <h2 className="text-2xl font-bold bg-orange-300 mt-3 mb-5 pr-4 py-2 rounded-l-lg w-8/12">
                            {counselor}
                        </h2>
                    </div>

                    <p className="text-[16px] mb-3 flex-grow">{short_description}</p>

                    {/* Learn More Button */}
                    <div className="mt-auto">
                        <Link to={`/details/${card.id}`} className="text-blue-500 hover:underline">Learn More</Link>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default ServiceCard
