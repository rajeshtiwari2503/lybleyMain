import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { NavbarLinks } from "./Header";
import { useRouter } from "next/router";

const ResponsiveHeader = ({ showMenu, setShowMenu }) => {
  // console.log("showMenu", showMenu);
  const router=useRouter();
   
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bothrefm-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
        <Link href={"/"}  onClick={() => setShowMenu(false)} >
                  <img src={"/Logo.png"} alt="" className="h-16 max-w-full rounded-lg" />
                </Link>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavbarLinks.map((data,index) => (
              <li key={index}>
                <Link
                  href={data.link}
                  onClick={() => setShowMenu(false)}
                  className={`mb-5 inline-block text-decoration-none ${router.pathname===data.link ? "text-primary" : "" }`}
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Made by <Link href="/">Lybley India Pvt Ltd.</Link> 
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveHeader;
