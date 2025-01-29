
import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ServiceCard from '../ServiceCard/ServiceCard'

const ServiceCards = () => {
    const allData = useLoaderData(); 

    // State to keep track of how many items to display
    const [visibleCount, setVisibleCount] = useState(8);  

    // Function to handle Load More button click
    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 4); 
    };

    return (
        <>
            <section className='md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-6'>
                {
                    allData.slice(0, visibleCount).map(card => (
                        <ServiceCard key={card.id} card={card} />
                    ))
                }
            </section>

            {/* Conditionally show "Load More" button if there are more cards to show */}
            {visibleCount < allData.length && (
                <div className="w-full text-center mt-4">
                    <button
                        onClick={loadMore}
                        className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-400 transition duration-300 rounded-sm mt-12 mb-24"
                    >
                        Load More
                    </button>
                </div>
            )}
        </>
    )
}

export default ServiceCards;

