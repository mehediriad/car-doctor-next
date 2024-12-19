"use client"

import RegisterComponent from "@/components/RegisterComponent/RegisterComponent";
import { Suspense } from "react";


const Register = () => {
   

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <RegisterComponent/>
            </Suspense>
        </>
    );
};

export default Register;