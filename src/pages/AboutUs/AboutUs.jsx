import React from 'react'
import TeamCards from '../../components/TeamCards/TeamCards'
import { Helmet } from "react-helmet";

const AboutUs = () => {
    return (
        <>
            <Helmet >
                <title>About Us | Career Campus</title>
            </Helmet>

            <section className='pb-24 mt-6'>

                <div className="div">
                    <h2 className='text-3xl font-bold'>Our Mis<span className='text-orange-300'>sion</span></h2>
                    <div className="divider bg-orange-300 h-1 w-1/12 m-0"></div>
                    <p className='text-lg font-light my-2'>Our mission is to empower individuals by providing personalized, insightful, and actionable career guidance that aligns with their skills, passions, and aspirations. Through innovative tools, expert consultations, and a supportive community, we aim to bridge the gap between potential and opportunity, enabling people to make informed decisions about their professional journey. By fostering confidence and clarity, we strive to create a generation of motivated professionals who thrive in their chosen fields and contribute meaningfully to society.</p>
                </div>

                <div>
                    <h2 className='text-3xl font-bold'>Our Vis<span className='text-orange-300'>sion</span></h2>
                    <div className="divider bg-orange-300 h-1 w-1/12 m-0"></div>
                    <p className='text-lg font-light my-2'>We envision a world where every individual has access to the resources and guidance needed to unlock their full professional potential. Our goal is to be the leading platform for career consultation, known for inspiring success stories across diverse industries. By leveraging technology, industry insights, and expert mentorship, we aim to cultivate a global community of career-driven individuals who are equipped to navigate an ever-changing job market with resilience, adaptability, and purpose.</p>
                </div>

                <div className="our_team_head mt-5">
                    <h2 className='text-3xl font-bold'>Meet Ou<span className='text-orange-300'>r Team</span></h2>
                    <div className="divider bg-orange-300 h-1 w-1/12 m-0"></div>
                </div>

                <div className='team_cards'>
                    <TeamCards ></TeamCards>
                  
                </div>

            </section>

        </>
    )
}

export default AboutUs
