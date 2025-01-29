import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import Comment from '../../components/Comment/Comment'
import { useLoaderData, useParams } from 'react-router-dom'
import { Helmet } from "react-helmet";

const DetailsPage = () => {

  // user click post id
  const { id } = useParams()
  // load data using useLoaderData
  const allServiceData = useLoaderData()
  // save post using state
  const [findPost, setFindPost] = useState([])


  useEffect(() => {
    const find = allServiceData.find(post => post.id === Number(id));
    setFindPost(find)
  }, [id])


  return (
    <>

      <Helmet >
        <title>Details | Career Campus</title>
      </Helmet>

      <section className='h-auto'>

        <div className="details_hero relative">

          <div className='w-full h-[300px] md:h-[550px]'>
            <img className='w-full h-full object-center object-fit ' src={findPost.image} alt="" />
          </div>

          <div className='bg-orange-400 px-4 py-12
          w-11/12 top-36
          md:w-10/12 md:top-64
          lg:w-7/12 rounded-r-xl absolute  left-0'>
            <div className='text-white'>
              <h2 className='text-xl md:text-3xl font-bold '>Service: {findPost.service_name}</h2>
              <p className='text-sm md:text-lg font-semibold my-3 pl-12'>By</p>
              <h2 className='text-xl md:text-3xl font-bold text-blue-700'>{findPost.counselor}</h2>
            </div>
          </div>

          <div className="details_info mt-28 md:mt-0">
            <div>
              <div className="divider"></div>
              <p className='text-2xl font-semibold'>Category: <span className='text-green-500'>{findPost.category}</span></p>
              <p className='text-2xl font-semibold py-3'>Price: $<span>{findPost.pricing}</span></p>
              <p className='text-xl font-semibold pb-2'>Duration: {findPost.duration}</p>

              <div className='flex items-center gap-3'>
                <div className='flex items-center gap-1 text-orange-400'>
                  <FaStar ></FaStar>
                  <FaStar ></FaStar>
                  <FaStar ></FaStar>
                  <FaStar ></FaStar>
                  <FaStar ></FaStar>
                </div>
                <p className='text-xl font-semibold'>{findPost.rating}</p>
              </div>
              <div className="divider"></div>

              <p className='text-lg pb-24'>{findPost.brief_description}</p>



            </div>
          </div>

          <div className="header my-8">
            <div className="divider"></div>
            <h2 className='text-3xl font-bold text-center'>Your<span className='text-orange-500 border-b-2 border-black'>Coach</span></h2>
            <div className="divider"></div>
          </div>

          <section className='get_started_now '>
            <div className='md:flex items-center gap-6'>

              <div className='get_started_left md:w-7/12'>
                <h2 className='text-2xl lg:text-6xl font-bold'>Get started now</h2>
                <p className='text-4xl font-light my-2'>with life coaching</p>
                <p className='text-lg leading-6 my-2 md:w-9/12'>Get the motivation, guidance, and support you need to get your life on track. You don't need to struggle on your own anymore!</p>
                <button className='btn bg-orange-400 hover:bg-orange-500 rounded-none text-white font-bold'>BOOK AN APPOINTMENT</button>
              </div>

              <div className='get_started_right md:w-5/12 mt-5 md:mt-0'>
                <div className='h-[200px] md:h-[400px]'>
                  <img className='w-full h-full object-cover' src={findPost.image} alt="details page img" />
                </div>
              </div>

            </div>
          </section>

          <section className='comment_section mt-24'>

            <div>
              <h2 className='text-lg md:text-xl font-bold'>Comments:</h2>
            </div>

            <Comment ></Comment>
          </section>

        </div>

      </section>

    </>
  )
}

export default DetailsPage
