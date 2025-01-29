import React from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'


const MainLayout = () => {



    return (
        <>
            <section className='px-4 xl:px-0'>

                <Header ></Header>

                <main className='max-w-screen-xl mx-auto '>
                    <Outlet ></Outlet>
                </main>


            </section>

            <footer>
                <Footer ></Footer>
            </footer>


        </>
    )
}

export default MainLayout
