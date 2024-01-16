import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
 

const  Card = ({_id ,isServices, image, date, title, link, description, author,index }) => {
    const router = useRouter();
const handleLink=(link )=>{
    window.open(link,"_blank");
}

  return (
    <>
      <div onClick={()=>handleLink(link)}  >
        <div className={`p-4 mt-4 cursor-pointer shadow-lg transition-all duration-500 hover:shadow-xl bg-black  rounded-lg m-2`}>
          <div className="overflow-hidden flex items-center rounded-md h-[200px] bg-white">
            <img
              src={image}
              alt="No image"
              className="mx-auto h-[120px] object-cover rounded-md transition duration-700 hover:skew-x-2 hover:scale-110"
            />
          </div>
        {isServices  
       ? <div className="space-y-2 py-1 flex justify-center text-white">
        <div>
            <h1 className="line-clamp-1 text-center font-bold uppercase mt-3">{title}</h1>
            <p className="text-center">{description}</p>
            </div>
          </div>
       : <>
         <div className="flex justify-between pt-2 text-slate-600">
            <p>{date}</p>
          
          </div>
          <div className="space-y-2 py-3">
            <h1 className="line-clamp-1 font-bold uppercase mt-2">{title}</h1>
            <p className="line-clamp-2">{description}</p>
          </div>
          </>
}
        </div>
      </div>
    </>
  );
};

export default  Card;
