"use client"
import React, { useState } from 'react';
import loginImg from "@/assets/images/login/login.svg"
import Image from 'next/image';
import Link from 'next/link';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import SocialLogin from '@/components/shared/SocialLogin';
import Swal from 'sweetalert2';

const RegisterComponent = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState("")
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const [TremsError, setTremsError] = useState(false)


    // const { createUser, updateUserProfile } = useContext(AuthContext)

    const handleSignUp = async (e) => {
        e.preventDefault()

        setPasswordError(false)
        setConfirmPasswordError(false)
        setTremsError(false)

        setError("")


        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const trems = e.target.trems.checked;

        if (password.length < 6) {
            setPasswordError(true)

            return setError("Password must be at least 6 characters or longer")
        }
        if (password !== confirmPassword) {
            setConfirmPasswordError(true)

            return setError("Password don't match")
        }
        if (!trems) {
            setTremsError(true)

            return setError("Confirm Trems & Conditions")
        }

        const newUser = {
            name,
            email,
            password,
            image: "https://i.ibb.co.com/pnkRJw1/user.png"
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/create-user`, {
            method: "POST",
            body: JSON.stringify(newUser),
        })
        const data = await res.json()

        if (data?.status === 200) {
            Swal.fire({
                title: "Good job!",
                text: "Your Account has been created!",
                icon: "success",
                footer: 'Click Here to <a href="/login" class="text-[#FF3811]">Login</a>'
            });
            e.target.reset()
        }
        if (data?.status === 304 || data?.status === 500) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${data?.message}`,

            });
        }



        // createUser(email, password)
        //     .then((userCredential) => {


        //         const user = userCredential.user;

        //         if (user) {
        //             updateUserProfile(name, "https://i.ibb.co.com/pnkRJw1/user.png")
        //                 .then(() => {

        //                     Swal.fire({
        //                         title: "Good job!",
        //                         text: "Your Account has been created!",
        //                         icon: "success",
        //                         footer: 'Click Here to <a href="/login" class="text-[#FF3811]">Login</a>'
        //                     });
        //                 }).catch((error) => {

        //                     Swal.fire({
        //                         icon: "error",
        //                         title: "Oops...",
        //                         text: "Something went wrong!!",

        //                     });
        //                 });
        //         }


        //         e.target.reset()
        //     })
        //     .catch((error) => {

        //         const errorCode = error.code;
        //         const errorMessage = error.message;

        //         Swal.fire({
        //             icon: "error",
        //             title: "Oops...",
        //             text: errorMessage,

        //         });

        //     });



    }


    return (

        <div className="pb-20 bg-base-100 text-black">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <Image src={loginImg} alt="Login" />

                    </div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl p-4 ">
                        <div className="card-body">
                            <h1 className="text-2xl font-bold">Sign Up</h1>
                            <form onSubmit={handleSignUp}>

                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-black">Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="name" className="input input-bordered bg-transparent" required />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-black">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered bg-transparent" required />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-black">Password {passwordError && <small className="text-red-500 text-xm"> {"(must be at least 6 characters or longer)"}</small>}</span>
                                    </label>
                                    <div className="form-control relative">
                                        <input name="password" type={show ? "text" : "password"} placeholder="password" className={`input input-bordered bg-transparent ${passwordError ? "border-red-500" : ""}`} required />
                                        <button className="absolute top-4 right-3 text-[#A2A2A2]" onClick={() => setShow(!show)}>{show ? <FaEye /> : <FaEyeSlash />}</button>
                                    </div>


                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-black">Confirm Password {confirmPasswordError && <small className="text-red-500 text-xm"> {"(password don't match)"}</small>}</span>
                                    </label>
                                    <div className="form-control relative">
                                        <input name="confirmPassword" type={show ? "text" : "password"} placeholder="confirm password" className={`input input-bordered bg-transparent ${confirmPasswordError ? "border-red-500" : ""}`} required />
                                        <button className="absolute top-4 right-3 text-[#A2A2A2]" onClick={() => setShow(!show)}>{show ? <FaEye /> : <FaEyeSlash />}</button>
                                    </div>


                                </div>
                                <div className="form-control mt-6">
                                    <label className="cursor-pointer flex items-center space-x-2">
                                        <input name="trems" type="checkbox" className={`border ${TremsError ? "border-red-700" : "border-[#FF3811]"} checkbox checkbox-sm checkbox-[#FF3811]`} />
                                        <span className={`label-text ${TremsError ? "text-red-500" : ""}`}>Accept Terms and Conditions </span>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-[#FF3811] text-white">Register</button>
                                </div>
                            </form>
                            <div className="text-center mt-3 space-y-3">
                                <small>Or Sign In With</small>
                                <>
                                    <SocialLogin />
                                </>
                                <small>Already have an account?<Link href={`/login`} className="btn btn-link text-[#FF3811]">Sign In</Link></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterComponent;