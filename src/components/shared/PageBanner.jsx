
import pageBannerImg from "@/assets/images/checkout/checkout.png"
import Image from "next/image";

const PageBanner = ({ title, breadcrumb }) => {
    
    
    return (
        <div className="relative my-6">
            <div>
                <Image className="w-full" src={pageBannerImg} alt="pageBannerImg" />
            </div>
            <div className="absolute top-0 rounded-lg  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                <h2 className="text-white text-3xl font-bold ml-24 flex items-center h-full">{title}</h2>
            </div>
            <div className="absolute bottom-0  w-full text-center">
                <div className="inline-block" style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)" }}>
                    <h3 className=" text-white text-md bg-[#FF3811]  py-2 px-20">{breadcrumb}</h3>
                </div>
            </div>
            {/* <div className="absolute bottom-0  w-full text-center">
                <div className="inline-block relative after:absolute after:w-0 after:h-0 after:top-0 after:left-[-40px] after:border-[#FF3811] after:border-[20px] after:border-l-transparent after:border-t-transparent
                before:absolute before:w-0 before:h-0 before:top-0 before:right-[-40px] before:border-[#FF3811] before:border-[20px] before:border-r-transparent before:border-t-transparent
                ">
                <h3 className=" text-white text-md bg-[#FF3811]  py-2 px-10">{breadcrumb}</h3>
                </div>
            </div> */}
        </div>
    );
};

export default PageBanner;