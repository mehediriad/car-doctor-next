"use client"

import LoginComponent from "@/components/LoginCompnent/LoginComponent";
import { Suspense } from "react";



const Login = () => {
    
    return (
       <>
         <Suspense fallback={<div>Loading...</div>}>
            <LoginComponent/>
         </Suspense>
       </>
    );
};


export default Login;