import React from 'react'
import { CgMail } from 'react-icons/cg'
import { FaFacebook, FaGoogle, FaPhone, FaTwitter } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'

const Footer = () => {
    return (
        <>

            <section className='bg-black px-4 xl:px-0 '>

                <div className='max-w-screen-xl mx-auto text-white'>

                    <div className="footer_top 
                    items-center justify-between pt-12 pb-6 mt-2 mb-6
                     md:flex">
                        <div>
                            <h2 className='text-3xl md:text-4xl font-bold'>Career Campus</h2>
                            <div className="divider bg-orange-400 w-4/12 h-1 border-none"></div>
                        </div>
                        <div className='md:flex items-center gap-3'>
                            <h2 className='text-xl font-light'>Find Us On</h2>
                            <div className='flex items-center gap-3 mt-2 md:mt-0'>
                                <button> <FaFacebook className='text-2xl'></FaFacebook></button>
                                <button> <FaTwitter className='text-2xl'></FaTwitter></button>
                                <button> <FaGoogle className='text-2xl'></FaGoogle></button>
                            </div>
                        </div>
                    </div>

                    <div className="footer_center pb-8">
                        <div className='grid grid-cols-2 gap-3 lg:grid-cols-4'>
                            <nav className='flex flex-col'>
                                <h6 className="footer-title">Contact</h6>
                                <div className="divider bg-orange-400 w-2/12 h-1 border-none m-0"></div>
                                <div className='mt-4'>
                                    <p className='flex items-center gap-2'><FaPhone ></FaPhone> ++12345678958</p>
                                    <p className='flex items-center gap-2'><CgMail ></CgMail> info@gmail.com</p>
                                    <p className='flex items-center gap-2'><FaLocationPin ></FaLocationPin> Sadar, Dinajpur, Bangladesh</p>
                                </div>
                            </nav>
                            <nav className='flex flex-col ml-5 md:ml-0'>
                                <h6 className="footer-title">Company</h6>
                                <div className="divider bg-orange-400 w-2/12 h-1 border-none m-0"></div>
                                <div className='flex flex-col space-y-1 mt-4'>
                                    <a className="link link-hover">About us</a>
                                    <a className="link link-hover">Contact</a>
                                    <a className="link link-hover">Jobs</a>
                                    <a className="link link-hover">Press kit</a>
                                </div>
                            </nav>
                            <nav className='flex flex-col'>
                                <h6 className="footer-title">Services</h6>
                                <div className="divider bg-orange-400 w-2/12 h-1 border-none m-0"></div>
                                <div className='flex flex-col space-y-1 mt-4'>
                                    <a className="link link-hover">Branding</a>
                                    <a className="link link-hover">Design</a>
                                    <a className="link link-hover">Marketing</a>
                                    <a className="link link-hover">Advertisement</a>
                                </div>
                            </nav>
                            <nav className=' ml-5 md:ml-0'>
                                <h6 className="footer-title">Legal</h6>
                                <div className="divider bg-orange-400 w-2/12 h-1 border-none m-0"></div>
                                <div  className='flex flex-col space-y-1 mt-4'>
                                    <a className="link link-hover">Terms of use</a>
                                    <a className="link link-hover">Privacy policy</a>
                                    <a className="link link-hover">Cookie policy</a>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="copyright bg-sky-400 py-4">
                        <h2 className='text-center text-black text-xs md:text-lg'>All &copy;copyright are reserved by <a href="https://facebook.com/mrreja.me" target='_blank' className='text-green-900'>Rejaul Islam Reja</a></h2>
                    </div>

                </div>

            </section>



        </>
    )
}

export default Footer
