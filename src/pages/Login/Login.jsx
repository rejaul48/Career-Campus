
import React, { useContext, useState } from 'react';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CareerContext } from '../../contextApi/CareerContext';
import swal from 'sweetalert';
import { Helmet } from "react-helmet";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();


    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const { registerUserLogin, logInWithGoogle, setUser, setLoader } = useContext(CareerContext);

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Login with Google
    const userLogInWithGoogle = () => {
        logInWithGoogle()
            .then(() => {
                // Navigate after Google login
                navigate(location?.state ? location.state : "/");

                setLoader(false)
            })
            .catch((err) => {
                console.error("Google Login Error:", err);
            });
    };

    // Login or register user with email and password
    const userLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        registerUserLogin(email, password)
            .then((result) => {
                const user = result.user
                setUser(user)
                swal("Congratulation!", "Login Successfully", "success");
                navigate(location?.state ? location.state : "/");
                setLoader(false);
            })
            .catch((err) => {
                swal("Opps!", "Please check your email and password again", "error");
                setLoader(false)
            });

    };
 

    return (
        <>

            <Helmet >
                <title>Login | Career Campus</title>
            </Helmet>

            <section className='md:w-8/12 lg:w-6/12 mx-auto bg-white mt-5 mb-8'>
                <div>
                    <h2 className='text-2xl font-bold text-center'>Login your account</h2>
                </div>

                <form onSubmit={userLogin} className='mt-8'>
                    <div className='mt-2'>
                        <label className="w-full">
                            <span className="text-xl font-semibold pb-2">Email</span>
                            <input
                                name='email'
                                type="email"
                                placeholder="Enter your email"
                                className="input bg-[#f3f3f3] w-full"
                                value={email}  // Bind input value to the email state
                                onClick={handleEmailChange}  // Update the state when user types
                            />
                        </label>
                    </div>

                    <div className='mt-2 relative'>
                        <label className="w-full">
                            <span className="text-xl font-semibold pb-2">Password</span>
                            <input
                                name='password'
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="input bg-[#f3f3f3] w-full"
                            />

                            <span
                                className='absolute right-3 top-11 cursor-pointer text-gray-500'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </span>

                            <Link
                                to='/forgotPass'
                                state={{ email }}  // Pass the email as state to the ForgotPassword page
                                className='mt-1 hover:underline'
                            >
                                Forgot password
                            </Link>
                        </label>
                    </div>

                    <div className='pb-2 mt-5'>
                        <button
                            className='btn text-white bg-black hover:bg-black z-20 hover:bg-opacity-70 w-full'>Login</button>
                    </div>

                </form>

                <div>
                    <p className='text-center'>Don't Have An Account ? <Link to="/register" className='text-red-500'>Signup</Link></p>
                </div>

                <div className='login_with_google flex justify-center mt-6'>
                    <button
                        onClick={userLogInWithGoogle}
                        className='flex items-center gap-3 text-lg font-semibold'
                    >
                        <FaGoogle /> Login with Google
                    </button>
                </div>

            </section>

        </>
    );
};

export default Login;

