import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import ServiceCards from '../../components/ServiceCards/ServiceCards';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import { FaCalendar, FaPhone } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { FaLocationPin } from 'react-icons/fa6';
import { Helmet } from "react-helmet";

const HomePage = () => {



    return (
        <>

        <Helmet >
            <title>Home | Career Campus</title>
        </Helmet>


            <section className='max-w-screen-xl mx-auto'>


                <div className='hero'>
                    <HeroSection ></HeroSection>
                </div>


                <section className='services' id='service'>
                    <div className='mt-14 mb-16 text-center'>
                        <h2 className='text-3xl font-bold '>Serv<span className='text-orange-500 border-b-2 border-black'>ices</span></h2>
                    </div>

                    <ServiceCards ></ServiceCards>
                </section>



                <section className='success pb-24'>
                    {/* title head */}
                    <div className='mt-6 mb-16 text-center'>
                        <h2 className='text-3xl font-bold '>Suc<span className='text-orange-500 border-b-2 border-black'>cess</span></h2>
                    </div>

                    <div className='main_container md:flex gap-6'>
                        <div className='success_left md:w-5/12'>
                            <div className='w-full md:h-[580px]'>
                                <img className='w-full h-full object-cover ' src="https://i.imgur.com/lp7dtJd.jpeg" alt="success" />
                            </div>
                        </div>

                        <div className='success_right md:w-7/12'>
                            <div className='flex flex-col items-center justify-center h-full'>
                                <div className='mt-2'>
                                    <h2 className=' text-4xl md:text-5xl font-bold'>Life coaching</h2>
                                    <p className='text-4xl md:text-4xl font-light my-2'>in number</p>
                                    <p className='text-lg md:w-11/12'>Before you start your coaching, you're sure to have a number of questions about the journey you will soon undertake. Here are crunched numbers about it before coaching even begins.</p>
                                </div>

                                <section className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6'>
                                    <div className='text-center'>
                                        <h2 className='text-6xl font-light'>93%</h2>
                                        <p className='md:text-lg font-semibold leading-6 mt-2'>Success for all clients so far</p>
                                        <div className="divider w-4/12 bg-orange-400 h-1 mx-auto"></div>
                                    </div>
                                    <div className='text-center'>
                                        <h2 className='text-6xl font-light'>800+</h2>
                                        <p className='md:text-lg font-semibold leading-6 mt-2'>Clients consulted in total</p>
                                        <div className="divider w-4/12 bg-orange-400 h-1 mx-auto"></div>
                                    </div>
                                    <div className='text-center'>
                                        <h2 className='text-6xl font-light'>20+</h2>
                                        <p className='md:text-lg font-semibold leading-6 mt-2'>Certificates and awards globally</p>
                                        <div className="divider w-4/12 bg-orange-400 h-1 mx-auto"></div>
                                    </div>
                                    <div className='text-center'>
                                        <h2 className='text-6xl font-light'>20+</h2>
                                        <p className='md:text-lg font-semibold leading-6 mt-2'>Years of coaching experience</p>
                                        <div className="divider w-4/12 bg-orange-400 h-1 mx-auto"></div>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </div>

                </section>

                {/* find use on google map */}

                <section className='find_us pb-24 '>

                    {/* title head */}
                    <div className='mt-6 mb-16 text-center'>
                        <h2 className='text-3xl font-bold '>Fin<span className='text-orange-500 border-b-2 border-black'>d Us</span></h2>
                    </div>

                    <div className='md:flex items-center md:relative h-full md:h-[530px]'>

                        <div className='find_us_left w-full'>
                            <div className="map w-full ">
                                <GoogleMap ></GoogleMap>
                            </div>
                        </div>

                        <div className='find_us_right
                        p-4
                        md:absolute md:-top-8 md:right-0 bg-orange-400 md:w-5/12 md:h-[550px]  md:p-8 '>

                            {/* open and close time */}
                            <div>
                                <h2 className='text-3xl lg:text-4xl font-light'>Working Hour</h2>

                                <table className="table mt-5 mb-3">

                                    <tbody>
                                        {/* row 1 */}
                                        <tr className='border-none'>

                                            <td>Saturday - Sunday</td>
                                            <td>8AM - 7PM</td>

                                        </tr>
                                        {/* row 2 */}
                                        <tr className='border-none'>

                                            <td>Monday - Wednesday</td>
                                            <td>8AM - 7PM</td>

                                        </tr>
                                        {/* row 2 */}
                                        <tr className='border-none'>

                                            <td>Thursday</td>
                                            <td>8AM - 7PM</td>

                                        </tr>
                                        {/* row 2 */}
                                        <tr className='border-none'>

                                            <td>Friday</td>
                                            <td>Closed</td>

                                        </tr>

                                    </tbody>
                                </table>

                                <p className='flex items-center gap-3 my-3'><FaCalendar></FaCalendar> Book Appointment</p>
                            </div>

                            <div className="contact_details">
                                <address className='space-y-3'>
                                    <h2 className='md:text-3xl font-light mb-4'>Contact details</h2>
                                    <p className='flex items-center gap-2'><FaPhone></FaPhone> ++12345678958</p>
                                    <p className='flex items-center gap-2'><CgMail></CgMail> info@gmail.com</p>
                                    <p className='flex items-center gap-2'><FaLocationPin></FaLocationPin> Sadar, Dinajpur, Bangladesh</p>
                                </address>
                            </div>
                        </div>
                    </div>

                </section>



            </section>



        </>
    )
}

export default HomePage
