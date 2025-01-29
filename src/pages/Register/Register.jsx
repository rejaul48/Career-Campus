
import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaCheck, FaTimes, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CareerContext } from '../../contextApi/CareerContext';
import swal from 'sweetalert';
import { Helmet } from "react-helmet";

const Register = () => {
    const { userRegister, logInWithGoogle, updateUserProfile } = useContext(CareerContext);
    // Get the current location 
    const location = useLocation();
    const navigate = useNavigate();
    // Password state
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Validation state
    const [validation, setValidation] = useState({
        hasUppercase: false,
        hasLowercase: false,
        isLongEnough: false,
    });

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



    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Handle password change
    const handlePasswordChange = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);

        // Update validation state
        setValidation({
            hasUppercase: /[A-Z]/.test(inputPassword),
            hasLowercase: /[a-z]/.test(inputPassword),
            isLongEnough: inputPassword.length >= 6,
        });
    };

    // Handle form submission
    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;

        // Check all conditions before submitting
        if (validation.hasUppercase && validation.hasLowercase && validation.isLongEnough) {
            userRegister(email, password)
                .then(() => {
                    updateUserProfile(name, photo)
                    swal("Congratulation!", "Registration Successfully", "success");
                    // Navigate to the correct location after successful registration
                    navigate("/");
                    
                })
                .catch((error) => {
                    console.error(error.message);
                });
        } else {
            swal("Opps!", "Check Your Information again", "error");
        }
    };

    return (
        <>

            <Helmet >
                <title>Register | Career Campus</title>
            </Helmet>

            <section className="md:w-8/12 lg:w-6/12 mx-auto bg-white mt-5 mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-center">Register your account</h2>
                </div>

                <form onSubmit={handleRegister} className="mt-8">
                    <div className="mt-2">
                        <label className="w-full">
                            <span className="text-xl font-semibold pb-2">Your name</span>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                className="input w-full bg-[#f3f3f3]"
                            />
                        </label>
                    </div>

                    <div className="mt-2">
                        <label className="w-full">
                            <span className="text-xl font-semibold pb-2">Photo URL</span>
                            <input
                                name="photo"
                                type="url"
                                placeholder="Enter your photo URL"
                                className="input bg-[#f3f3f3] w-full"
                            />
                        </label>
                    </div>

                    <div className="mt-2">
                        <label className="w-full">
                            <span className="text-xl font-semibold pb-2">Email</span>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="input bg-[#f3f3f3] w-full"
                            />
                        </label>
                    </div>

                    <div className="mt-2">
                        <label className="w-full relative">
                            <span className="text-xl font-semibold pb-2">Password</span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="input bg-[#f3f3f3] w-full"
                            />
                            <span
                                className="absolute right-3 top-10 cursor-pointer text-gray-500"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </span>
                        </label>

                        {/* Password validation feedback with icons */}
                        <div className="mt-2 text-sm">
                            <p className="flex items-center gap-2" style={{ color: validation.hasUppercase ? 'green' : 'red' }}>
                                {validation.hasUppercase ? <FaCheck /> : <FaTimes />}
                                Must have an uppercase letter
                            </p>
                            <p className="flex items-center gap-2" style={{ color: validation.hasLowercase ? 'green' : 'red' }}>
                                {validation.hasLowercase ? <FaCheck /> : <FaTimes />}
                                Must have a lowercase letter
                            </p>
                            <p className="flex items-center gap-2" style={{ color: validation.isLongEnough ? 'green' : 'red' }}>
                                {validation.isLongEnough ? <FaCheck /> : <FaTimes />}
                                Must be at least 6 characters long
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 my-3">
                        <input type="checkbox" className="checkbox" />
                        <p>Accept Terms & Conditions</p>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="btn text-white bg-black hover:bg-black hover:bg-opacity-70 w-full"
                        >
                            Register
                        </button>
                    </div>
                </form>


                <div className="mt-2">
                    <p className="text-center">
                        Already have an Account?{' '}
                        <Link to="/login" className="text-red-500">
                            Login
                        </Link>
                    </p>
                </div>

                <div className="login_with_google flex justify-center mt-6">
                    <button
                        onClick={userLogInWithGoogle}
                        className="flex items-center gap-3 text-lg font-semibold"
                    >
                        <FaGoogle /> Login with Google
                    </button>
                </div>


            </section>
        </>
    );
};

export default Register;
