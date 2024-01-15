import Link from "next/link";
import React from "react";
import {
  FaLocationArrow,
  FaMobileAlt,FaEnvelope
} from "react-icons/fa";


const FooterLinks = [
  
    {
        id: 1,
         
        title: "Lybley IT Services",
        link: "https://it.lybley.com",
    },
    {
        id: 2,
       
        title: "Lybley Home Appliances",
        link: "https://lybley.com",


    },
    {
        id: 3,
        
        title: "Samosafry",
        link: "https://www.samosafry.com",
 
    },
    {
        id: 4,
      
        title: "Sparetrade",
        link: "https://www.sparetrade.in",
    },
    {
        id: 4,
        
        title: "Heuser",
        link: "https://heuser.in",
    },
     
];
  
 

const Footer = () => {
  const handleLink=(link )=>{
    window.open(link,"_blank");
}
  return (
    <>
      <div className="dark:bg-gray-950  relative overflow-hidden  ">
        <div className="bg-[#000] text-white  ">
          <div className="container mx-auto px-14">
            {/* <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl"> */}
            <div className="grid md:grid-cols-3  pt-4   rounded-t-xl">
              <div className="py-8 ">
                <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                  <Link href={"/"}> <img src={"/Logo.png"} alt="" className="max-h-[64px] rounded-lg border-2 border-white" /></Link>
                  {/* TravelloGo */}
                </h1>
                <p className="text-sm mt-4 ">
                  Discover Lybley for web and app development, e-commerce solutions, CRM services, and impactful digital and social media marketing. Elevate your brand's digital presence with our comprehensive suite of tailored solutions designed to drive growth and engagement.
                </p>
                <br />
                <div className="flex items-center gap-3 ">
                  <FaLocationArrow />
                  <p className="text-sm">A-9, A Block, Sector 59, Noida, Uttar Pradesh 201301</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaEnvelope />
                  <p>help@lybley.com</p>
                </div> 
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 7011071202</p>
                </div>
                {/* social handles */}

              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                <div>
                  <div className="pt-8 px-4">
                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Our Brands
                    </h1>
                    <ul className="flex flex-col gap-3">
                      {FooterLinks.map((link,index) => (
                        <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1    hover:text-blue-400" key={index}>
                          <div
                            onClick={()=>handleLink(link?.link)}
                          >
                            <span>&#11162;</span>
                            <span>{link?.title}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="block md:hidden">
                <div className="pt-8 px-4">
                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                     Social Media
                    </h1>
                    <div className="flex flex-col  gap-6">
                    <Link href={"https://m.facebook.com/lybley/photos/a.361705534523649/702715043756028/?type=3&_rdrs"} target="_blank"><img  className=" rounded-circle bg-white rounded-full"  src="https://static.vecteezy.com/system/resources/previews/022/227/316/non_2x/facebook-logo-icon-free-png.png" alt="logo" height="40px" width="40px"  /></Link>  
                   <Link href={"https://twitter.com/i/flow/login?redirect_after_login=%2FRLybley"} target="_blank"><img className=" rounded-circle bg-white rounded-full" src="https://cdn-icons-png.flaticon.com/512/1051/1051382.png" alt="logo" height="40px" width="40px"  /></Link>  
                   <Link   href={"https://in.linkedin.com/company/lybley"} target="_blank"><img className=" rounded-circle bg-white rounded-full" src="https://img.icons8.com/?size=512&id=60443&format=png" alt="logo" height="40px" width="40px" /> </Link> 
 
                   </div>
                </div>
              </div>
                <div className="col-span-2">
                  <div className="pt-8 px-4">
                    <div className="rounded-xl  ">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.783672779409!2d77.36534197457178!3d28.606265885274766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef5e6156c623%3A0xfc1292095a4933f9!2sLYBLEY!5e0!3m2!1sen!2sin!4v1704344578953!5m2!1sen!2sin"
                        height="260"
                        width={"100%"}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ borderRadius: "20px" }}
                      ></iframe>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="flex justify-between items-center  border-t-2 border-gray-300/50 ">
              <div className="text-center py-5 text-primary  ">
                @copyright 2024 All rights reserved || Made  by Lybley India Pvt Ltd.
              </div>
              <div className="md:block hidden">
                <div className="flex items-center gap-6  ">
                  {/* <Link href="#">
                    <FaInstagram className="text-3xl" />
                  </Link>
                  <Link href="#">
                    <FaFacebook className="text-3xl" />
                  </Link>
                  <Link href="#">
                    <FaLinkedin className="text-3xl" />
                  </Link> */}
                                      <Link href={"https://m.facebook.com/lybley/photos/a.361705534523649/702715043756028/?type=3&_rdrs"} target="_blank"><img  className=" rounded-circle bg-white rounded-full"  src="https://static.vecteezy.com/system/resources/previews/022/227/316/non_2x/facebook-logo-icon-free-png.png" alt="logo" height="40px" width="40px"  /></Link>  
                   <Link href={"https://twitter.com/i/flow/login?redirect_after_login=%2FRLybley"} target="_blank"><img className=" rounded-circle bg-white rounded-full" src="https://cdn-icons-png.flaticon.com/512/1051/1051382.png" alt="logo" height="40px" width="40px"  /></Link>  
                   <Link   href={"https://in.linkedin.com/company/lybley"} target="_blank"><img className=" rounded-circle bg-white rounded-full" src="https://img.icons8.com/?size=512&id=60443&format=png" alt="logo" height="40px" width="40px" /> </Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
