"use client"
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import loginImg from "@/assets/images/login/login.svg"
import Image from 'next/image';
import Link from 'next/link';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import SocialLogin from '@/components/shared/SocialLogin';
import { useRouter } from 'next/navigation';


const Login = () => {
    const [show, setShow] = useState(false);
    const router = useRouter()
    // const { logInUser } = useContext(AuthContext)
    // const navigate = useNavigate()
    // const location = useLocation()




    const handleLogin =async (e) => {
        e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email, password);

    const res = await signIn('credentials',{
        email,
        password,
        redirect:false
    })

   if(res?.status ===200){
        router.push("/")
   }
    

    // logInUser(email, password)
    //     .then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;

    //         navigate(location?.state ? location?.state : "/")
    // if (user) {

    // fetch("http://localhost:5000/jwt",{
    //     method:"POST",
    //     headers:{
    //         "content-type":"application/json"
    //     },
    //     credentials:'include',
    //     body: JSON.stringify({email:user.email})
    // })
    // .then(res =>res.json())
    // .then(data => {
    //     if(data.success){
    //         navigate(location?.state ? location?.state : "/")
    //     }
    // })


    // axios.post("http://localhost:5000/jwt",{email:user.email},{withCredentials:true})
    // .then(res =>{
    //     if(res.data.success){
    // navigate(location?.state ? location?.state : "/")
    //     }
    // })

    // }

    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             Swal.fire({
    //                 icon: "error",
    //                 title: "Oops...",
    //                 text: errorMessage,

    //               });


    //         });
    }
    return (
        <div className="pb-20 bg-base-100">

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <Image src={loginImg} alt="Login" />

                    </div>
                    <div className="text-black card w-full max-w-sm shrink-0 shadow-2xl p-4 ">
                        <div className="card-body">
                            <h1 className="text-2xl font-bold text-black">Login</h1>
                            <form onSubmit={handleLogin}>

                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-black">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered bg-transparent" required />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-black">Password</span>
                                    </label>
                                    <div className="form-control relative">
                                        <input name="password" type={show ? "text" : "password"} placeholder="password" className="input input-bordered bg-transparent" required />
                                        <button className="absolute top-4 right-3 text-[#A2A2A2]" onClick={() => setShow(!show)}>{show ? <FaEye /> : <FaEyeSlash />}</button>
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-[#FF3811] text-white">Sign In</button>
                                </div>
                            </form>

                            <div className="text-center mt-3 space-y-3">
                                <small>Or Sign In With</small>
                                <>
                                    <SocialLogin />
                                </>
                                <small>New Here?<Link href={`/register`} className="btn btn-link text-[#FF3811]">Sign Up</Link></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Login;