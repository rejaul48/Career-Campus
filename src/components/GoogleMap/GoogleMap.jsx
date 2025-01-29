import React from 'react'

const GoogleMap = () => {
    return (
        <>


            <section className='w-full h-[250px] md:h-[530px] mb-6'>
                <iframe className='w-full h-[250px] md:h-[530px] ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.452818538424!2d88.64349177439237!3d25.623092714320556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb52905ccea689%3A0x5f6d1d578e90c22d!2sDinajpur%20Polytechnic%20Institute!5e0!3m2!1sen!2sbd!4v1731907347161!5m2!1sen!2sbd"loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>

        </>
    )
}

export default GoogleMap
