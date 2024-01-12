import React from "react";
import Slider from "react-slick";

const homeSliderData = [
 
  {
     
    img: "tectnology.jpg",
  },  
  {
     
    img: "homeAppliances.jpg",
  },
  {
     
    img: "tectnology.jpg",
  },
  {
     
    img: "homeAppliances.jpg",
  },
];

const HomeSlider = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="w-full p-0">
        <div className=" ">
         
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className=""
          >
            <Slider {...settings}>
              {homeSliderData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="w-full " >
                    <div style={{backgroundImage:`url(${img})`}} className="flex bg-cover sm:h-[980px] md:h-[680px]    bg-black bg-opacity-30 bg-center h-[400px] flex-col justify-center items-center gap-4 text-center shadow-lg    relative">
                     <div className="flex justify-center items-center  ">
                       
                      </div>
                      {/* <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm">{text}</p> */}
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
