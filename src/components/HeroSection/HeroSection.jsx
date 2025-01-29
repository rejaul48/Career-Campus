// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroSection = () => {

    const sliderData = [
        {
            image: "https://i.imgur.com/KG5IAu6.jpeg",
            category: "Career Advice",
            teacher: "John Doe",
            description: "Get expert career advice on job search strategies, resume building, and interview preparation from our experienced counselor."
        },
        {
            image: "https://i.imgur.com/lp7dtJd.jpeg",
            category: "College Admissions",
            teacher: "Jane Smith",
            description: "Understand the college admission process, tips for writing effective essays, and how to make your application stand out."
        },
        {
            image: "https://i.imgur.com/5Vm6BG4.jpeg",
            category: "Personal Development",
            teacher: "Michael Lee",
            description: "Learn how to build confidence, set goals, and improve your communication skills to succeed in your career."
        },
        {
            image: "https://i.imgur.com/wwbkkAJ.jpeg",
            category: "Resume Building",
            teacher: "Emily Johnson",
            description: "Our expert will guide you through creating an impressive resume that highlights your skills, experience, and accomplishments."
        },
        {
            image: "https://i.imgur.com/1joB0Wc.jpeg",
            category: "Job Market Trends",
            teacher: "David Miller",
            description: "Stay updated with the latest trends in the job market and learn which industries are hiring the most in today's competitive world."
        }
    ];

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                onSwiper={() => { }}
                onSlideChange={() => { }}
                className="w-full h-full"
            >
                {sliderData.map((slider, ind) => (
                    <SwiperSlide key={ind}>
                        <div className="md:flex mt-6 lg:mt-0 items-center gap-3 lg:h-[85vh]">
                            <div className="w-full md:w-7/12 lg:w-6/12">
                                <div className="hero_content md:pl-16">
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                                        {slider.category}
                                    </h2>
                                    <h3 className="text-xl md:text-2xl font-semibold my-2 md:my-3">
                                        {slider.teacher}
                                    </h3>
                                    <p className="md:w-9/12">{slider.description}</p>
                                    <a
                                        href="#service"
                                        className="btn bg-orange-600 text-white rounded-sm mt-5 text-xl"
                                    >
                                        Find Support
                                    </a>
                                </div>
                            </div>
                            <div className="w-full md:w-5/12 lg:w-6/12 hidden md:block">
                                <div className="h-full w-full">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={slider.image}
                                        alt="slider img"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* Custom Navigation Buttons */}
                <button
                    className="custom-prev hidden md:block absolute left-2 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full z-10"
                >

                    <FaChevronLeft className='text-orange-400 size-8'></FaChevronLeft>
                </button>
                <button
                    className="custom-next hidden md:block absolute right-2 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full z-10"
                >
                    <FaChevronRight className='text-orange-400 size-8'></FaChevronRight>
                </button>
            </Swiper>


        </ >
    );
};

export default HeroSection;
