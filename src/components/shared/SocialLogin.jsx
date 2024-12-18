"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SocialLogin =  () => {
    const session = useSession()
    const router = useRouter()
    const searchParams = useSearchParams()
        const path = searchParams.get('redirect')
    
    const handleSocialLogin = async (provider) =>{
        await signIn(provider,{
            redirect: true,
            callbackUrl: path?path:"/" 
        })
    }
    useEffect(()=>{
        if(session.status === "authenticated"){
            router.push("/")
        }
    },[session])
    
    return (
        <div className="space-x-4">
            <button className="text-[#3B5998] bg-[#F5F5F8] p-3 rounded-full hover:bg-slate-200"><FaFacebookF /></button>
            <button className="text-[#3C79E6] bg-[#F5F5F8] p-3 rounded-full hover:bg-slate-200"><FaLinkedinIn /></button>
            <button onClick={() =>handleSocialLogin('google')} className="bg-[#F5F5F8] p-3 rounded-full hover:bg-slate-200"><FcGoogle /></button>
        </div>
    );
};

export default SocialLogin;