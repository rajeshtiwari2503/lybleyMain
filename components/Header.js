 
import React, { useState } from "react";

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
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "hrefp Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Header = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const router=useRouter();
  const hrefggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50  text-white">
        {/* <div className="bg-gradient-to-r from-primary to-secondary text-white ">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm">20% off on next booking</p>
              <p>mobile no. +91 123456789</p>
            </div>
          </div>
        </div> */}
        <div className="  ">
          <div className="container mx-auto px-14 py-3 sm:py-0">
            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-4 py-1 font-bold text-2xl">
                <Link href={"/"}  >
                  <img src={"/Logo.png"} alt="" className="h-16 max-w-full rounded-lg" />
                </Link>
                {/* <span>TCJ hrefurism</span> */}
              </div>
              <div className="hidden md:block">
                <ul className="flex items-center gap-6 animatedRight ">
                  <li className="py-4">
                    <Link href="services" className={`text-decoration-none ${router.pathname==="/services" ? "text-primary" : "" }`} >
                      Services
                    </Link>
                  </li>
                  {/* <li className="py-4">
                    <Link href="/insights" className={`text-decoration-none ${router.pathname==="/insights" ? "text-primary" : "" }`} >
                      Insights
                    </Link>
                  </li> */}
                  <li className="py-4">
                    <Link href="blogs" className={`text-decoration-none ${router.pathname==="/blogs" ? "text-primary" : "" }`} >
                      Blogs
                    </Link>
                  </li>
                  
                  <li className="py-4">
                    <Link href="about" className={`text-decoration-none ${router.pathname==="/about" ? "text-primary" : "" }`} >
                      About
                    </Link>
                  </li>
                  <li className="py-4">
                    <Link href="careers" className={`text-decoration-none ${router.pathname==="/careers" ? "text-primary" : "" }`} >
                      Careers
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
              <div className="flex items-center gap-4">
                <Link href={"contact"}>
                <button
                  className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
                  
                >
                 Contact us
                </button>
                </Link>
                {/* Mobile Hamburger icon */}
                <div className="md:hidden block">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <ResponsiveHeader setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Header;
