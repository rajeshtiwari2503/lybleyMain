import React from 'react'
import Card from './Card';

const serviceData = [
    {
        id: 1,
        image: "itWeb.jpg",
        title: "Lybley IT Services",
        link: "https://it.lybley.com",
        description:"Revolutionize Your Digital Presence: Unleashing Comprehensive IT Excellence for Web Development, Mobile Apps, UI/UX Design, Digital Marketing, Social Media Mastery, and E-commerce Solutions!"
    },
    {
        id: 2,
        image: "homeAppliances.jpg",
        title: "Lybley Home Warranty",
        link: "https://lybley.com",
        description:"Experience worry-free living with our trusted home warranty, ensuring unparalleled protection and maintenance for your essential appliances, providing peace of mind for your household."


    },
    {
        id: 3,
        image: "samosaImage.jpeg",
        title: "Samosa fry",
        link: "https://www.samosafry.com",
        description:"Savor our piping hot samosas, crafted with fresh, natural ingredients, and paired with a variety of chutneys. Our commitment to quality guarantees a delicious experience. Order now for an irresistible taste."
 
    },
    {
        id: 4,
        image: "spareparts1.jpg",
        title: "Sparetrade",
        link: "https://www.sparetrade.in",
        description:"Experience seamless appliance repairs with our online platform offering spare parts for multiple brands. Easily order and enjoy doorstep delivery, backed by hassle-free return options."
    },
    {
        id: 5,
        image: "Heuser.png",
        title: "Heuser",
        link: "https://heuser.in",
        description:"Explore Heuser for top-quality home appliances, including BDLC fans, air coolers, water heaters, electric irons, mixer grinders, and EV motors. Committed to satisfaction, we deliver products that meet your expectations."
    },
    {
        id: 4,
        image: "rodifo.png",
        title: "Rosifo",
        link: "https://rosifo.in/",
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