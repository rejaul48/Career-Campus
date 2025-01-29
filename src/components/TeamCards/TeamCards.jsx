import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import TeamCard from '../TeamCard/TeamCard';

const TeamCards = () => {

    const teamCardData = useLoaderData();

    // State to keep track of how many items to display
    const [visibleCount, setVisibleCount] = useState(8);  

    // Function to handle "Load More" button click
    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 4); 
    };

    return (
        <>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    teamCardData.slice(0, visibleCount).map(teamCard => (
                        <TeamCard
                            key={teamCard.id} teamCard={teamCard}>

                        </TeamCard>
                    ))


                }


            </section>

            {/* Conditionally show "Load More" button if there are more cards to show */}
            {visibleCount < teamCardData.length && (
                <div className="w-full mt-4 flex justify-center">
                    <button
                        onClick={loadMore}
                        className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-400 transition duration-300 rounded-sm mt-12 mb-24 "
                    >
                        Load More
                    </button>
                </div>
            )}
        </>
    )
}

export default TeamCards
