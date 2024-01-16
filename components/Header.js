
import React, { useState, useEffect } from "react";

import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";
import ResponsiveHeader from "./ResposiveHeader";

export const NavbarLinks = [
  {
    name: "Sevices",
    link: "services",
  },

  {
    name: "About",
    link: "about",
  },
  {
    name: "Blogs",
    link: "blogs",
  },
  {
    name: "Careers",
    link: "careers",
  },
  {
    name: "Contact us",
    link: "contact",
  },

];

const DropdownLinks = [
  {
    name: "Lybley IT Services",
    link: "https://it.lybley.com",
  },
  {
    name: "SpareTrade",
    link: "https://www.sparetrade.in",
  },
  {
    name: "Heuser",
    link: "https://heuser.in",
  },
  {
    name: "Lybley Home Warranty",
    link: "https://www.lybley.com",
  },
  {
    name: "Samosa Fry",
    link: "https://www.samosafry.com",
  },
  {
    name: "Rosifo  ",
    link: "https://www.rosifo.in",
  },
  {
    name: "Servsy  ",
    link: "https://www.servsy.in",
  },
  {
    name: "Inventoryfy",
    link: "https://www.inventoryfy.com",
  },
];

const Header = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const hrefggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 670) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLink=(link )=>{
    window.open(link,"_blank");
}

  return (
    <>
      <nav className={`${router.pathname === "/about" || router.pathname === "/contact" || router.pathname === "/career" ? "bg-black" : ""} fixed top-0 right-0 w-full z-50 ${scrolling ? "bg-black transition-colors duration-500 ease-in-out" : ""}  text-white`}>
        {/* <div className="bg-gradient-to-r from-primary to-secondary text-white ">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm">20% off on next booking</p>
              <p>mobile no. +91 123456789</p>
            </div>
          </div>
        </div> */}
        <div className="  ">
          <div className="container mx-auto md:px-14 px-4  py-0 sm:py-0">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 py-1 font-bold text-2xl">
                <Link href={"/"}  >
                  <img src={"/Logo.png"} alt="" className={`${scrolling || router.pathname === "/about" || router.pathname === "/contact" || router.pathname === "/career" ? "border-2 border-white" : ""} h-16 max-w-full rounded-lg`} />
                </Link>
                {/* <span>TCJ hrefurism</span> */}
              </div>
              <div className=" ">
                <ul className="flex items-center gap-6 animatedRight ">
                  {/* <li className="py-4">
                    <Link href="services" className={`text-decoration-none ${router.pathname==="/services" ? "text-blue-400" : "" }`} >
                      Services
                    </Link>
                  </li> */}
                  <li className="group relative cursor-pointer">
                    <Link
                      href="/"
                      className="flex h-[72px] items-center gap-[2px]"
                    >
                      Brands{" "}
                      <span>
                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                      </span>
                    </Link>
                    <div className="absolute -left-9 z-[9999] hidden w-[200px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                      <ul className="space-y-3">
                        {DropdownLinks.map((data) => (
                          <li key={data.name}>
                            <div
                              className="inline-block w-full rounded-md p-2 hover:bg-black hover:text-white"
                              onClick={()=>handleLink(data.link)}
                            >
                              {data.name}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                 

                  <li className="py-4">
                    <Link href="about" className={`text-decoration-none ${router.pathname === "/about" ? "text-blue-400" : ""}`} >
                      About
                    </Link>
                  </li>
                  <li className="py-4">
                    <Link href="contact" className={`text-decoration-none ${router.pathname === "/contact" ? "text-blue-400" : ""}`} >
                    Contact us
                    </Link>
                  </li>
                  
                  {/* <li className="group relative cursor-pointer">
                    <Link
                      href="/"
                      className="flex h-[72px] items-center gap-[2px]"
                    >
                      Quick Links{" "}
                      <span>
                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                      </span>
                    </Link>
                    <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                      <ul className="space-y-3">
                        {DropdownLinks.map((data) => (
                          <li key={data.name}>
                            <Link
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                              href={data.link}
                            >
                              {data.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li> */}
                </ul>
              </div>
               

                {/* <div className="md:hidden block">
                  {showMenu ? (
                    <HiMenuAlt1
                      onClick={hrefggleMenu}
                      className=" cursor-pointer transition-all"
                      size={30}
                    />
                  ) : (
                    <HiMenuAlt3
                      onClick={hrefggleMenu}
                      className="cursor-pointer transition-all"
                      size={30}
                    />
                  )}
                </div> */}
              
            </div>
          </div>
        </div>
        {/* <ResponsiveHeader setShowMenu={setShowMenu} showMenu={showMenu} /> */}
      </nav>
    </>
  );
};

export default Header;
