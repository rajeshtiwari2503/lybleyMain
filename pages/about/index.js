import Location from "@/components/Location";
import React from "react";
 

const About = () => {
  return (
    <>
      <div className="container mx-auto px-14 pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
         Welcome to Lybley, where innovation meets efficiency! As a dynamic and versatile company, we take pride in offering a wide range of services tailored to meet the diverse needs of our customers. From cutting-edge IT solutions to reliable home appliances, after-sale service, spare part trading, and even the delectable delight of samosa fry, we are your one-stop destination for quality and convenience.
          </p>
          <h2 className=" text-1xl font-bold mt-3">Our Expertise in IT Solutions:</h2>
          <p>
          At Lybley, we understand the critical role technology plays in today's fast-paced world. Our dedicated team of IT professionals is committed to providing innovative solutions to empower your business. Whether you need assistance with software development, system integration, or IT consulting, we have the expertise to propel your business into the digital age.
          </p>
          <h2 className=" text-1xl font-bold mt-3">Home Appliances for Modern Living:</h2>
          <p>
          Elevate your lifestyle with our range of high-quality home appliances. From state-of-the-art kitchen appliances to smart home devices, we offer products designed to make your life easier and more enjoyable. Explore our collection and discover the perfect blend of style, functionality, and durability.
          </p>
          <h2 className=" text-1xl font-bold mt-3">Reliable After-Sale Service:</h2>
          <p>
          Our commitment to customer satisfaction goes beyond the sale. We take pride in providing reliable after-sale service to ensure the longevity and optimal performance of your purchases. Our skilled technicians are ready to assist you with any maintenance or repair needs, ensuring your products remain in top condition.
          </p>
          <h2 className=" text-1xl font-bold mt-3">Spare Part Trading for Seamless Repairs:</h2>
          <p>
          In the ever-evolving world of technology and appliances, we understand the importance of readily available spare parts. Our spare part trading service ensures that you have easy access to genuine components, making repairs and maintenance a hassle-free experience. Count on us for quality spare parts that keep your devices running smoothly.
          </p>
          <h2 className=" text-1xl font-bold mt-3">Samosa Fry – A Culinary Delight:</h2>
          <p>
          Indulge your taste buds with our crispy and delicious samosas. Handcrafted with care and using the finest ingredients, our samosas are a perfect blend of tradition and taste. Whether you're hosting an event or simply craving a snack, our samosas are sure to satisfy your cravings.
          </p>
         
        </div>
      </div>
      <Location />
      <p className="container mx-auto px-14 p-3 mb-8"> At Lybley, we are driven by a passion for excellence and a commitment to customer satisfaction. Explore our diverse range of services, and let us be your partner in progress. Contact us today to experience the perfect fusion of technology, convenience, and culinary delight. Welcome to a world where solutions meet satisfaction!</p>
    </>
  );
};

export default About;
