import React from 'react'

const TeamCard = ({teamCard}) => {
  return (
    <>

        <section className='flex flex-col shadow-md overflow-hidden'>
            <div className='w-full h-[220px]'>
                <img className='w-full h-full object-cover rounded-tl-lg rounded-br-lg transition-transform duration-300 ease-in-out hover:scale-110' src={teamCard.image} alt="team_img" />
            </div>
            <div className='mt-3'>
                <h2 className='text-3xl font-bold'>{teamCard.counselor}</h2>
                <p className='text-xl font-light py-2'>{teamCard.specialist}</p>
                <p className='pb-2'>{teamCard.description}</p>
            </div>
        </section>

      
    </>
  )
}

export default TeamCard
