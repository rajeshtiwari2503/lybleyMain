import React from 'react'
import Card from './Card';

const serviceData = [
    {
        id: 1,
        image: "itWeb.jpg",
        title: "Lybley IT Services",
        link: "https://it.lybley.com",
    },
    {
        id: 2,
        image: "homeAppliances.jpg",
        title: "Lybley Home Appliances",
        link: "https://lybley.com",


    },
    {
        id: 3,
        image: "samosafry.webp",
        title: "Samosafry",
        link: "https://www.samosafry.com",
 
    },
    {
        id: 4,
        image: "sparetrade.png",
        title: "Sparetrade",
        link: "https://www.sparetrade.in",
    },
    {
        id: 4,
        image: "Heuser.png",
        title: "Heuser",
        link: "https://heuser.in",
    },
     
];
const Brands = () => {
    return (
        <>
            <div className={`     mt-14 `}>
                <section data-aos="fade-up" className="container ">
                    <h3 className={`text-center font-bold py-3 mb-6 text-3xl  text-black`}>Discover Our Brands</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {serviceData.map((item, index) => (
                            <Card isServices={true} key={item.id} index={index} {...item} />
                        ))}
                    </div>

                </section>
            </div>
        </>
    )
}

export default Brands