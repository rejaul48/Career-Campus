import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CareerContext } from '../../contextApi/CareerContext';
import { FaUser } from 'react-icons/fa';


const Header = () => {

    const { user, userLogOut } = useContext(CareerContext);
    // handle mobile menubar toogle case
    const [showMenu, setShowMenu] = useState(false)

    const links = <>


        <li><NavLink to='/' className='btn bg-transparent border-none shadow-none rounded-md'>Home</NavLink></li>

        {
            user &&
            <div className='flex flex-col lg:flex-row items-center'>
                <li><NavLink to='/myProfile' className='btn bg-transparent border-none shadow-none rounded-md'>My Profile</NavLink></li>
                <li><NavLink to='/aboutUs' className='btn bg-transparent border-none shadow-none rounded-md'>About Us</NavLink></li>
            </div>

        }

    </>

    return (
        <>

            <header className='sticky top-0 z-10 bg-white max-w-screen-xl mx-auto'>
                <div className='text-center py-2 lg:hidden'>
                    <h2> <Link to='/' className="text-3xl md:text-5xl font-semibold ">Career Campus</Link></h2>
                </div>
                <div className="navbar bg-base-100">

                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                onClick={() => { setShowMenu(!showMenu) }}
                                tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>


                            </div>
                            <ul
                                tabIndex={0}
                                className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${showMenu ? "block" : "hidden"}`}>

                                {
                                    links
                                }
                            </ul>
                        </div>
                        <Link to='/' className="text-4xl font-semibold hidden lg:block">Career Campus</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">


                        {
                            user?.email ? <div className='flex items-center gap-3'>
                                <div className="tooltip tooltip-left" data-tip={user?.displayName ? user.displayName : "Anonymous User"}>
                                    <Link to='/myProfile'> {user?.photoURL ? (
                                        <img
                                            className="w-[50px] h-[50px] rounded-full object-cover outline outline-2 outline-orange-400"
                                            src={user.photoURL}
                                            alt="user_img"
                                        />
                                    ) : (
                                        <FaUser className="text-[40px] bg-gray-500 rounded-full outline outline-2 outline-orange-400" />
                                    )}</Link>
                                </div>
                                <Link onClick={() => { userLogOut() }} className="btn px-2 md:px-5 border-orange-400" to='/login'>Log Out</Link>
                            </div> : <Link className="btn" to='/login'>Login</Link>
                        }


                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
