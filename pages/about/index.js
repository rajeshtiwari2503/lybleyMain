import Location from "@/components/Location";
import React from "react";
 

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          At Lybley, our unwavering passion lies in the art of transforming visionary ideas into impactful digital realities. Our journey is marked by an unrelenting pursuit of excellence, propelling us to the forefront of technological innovation and digital solutions. This dedication has firmly established us as trailblazers, shaping the evolving landscape of technology with our ingenuity and commitment to groundbreaking solutions.
          </p>
          <h2 className=" text-2xl font-bold mt-2">Our Vision</h2>
          <p>
          Driven by a vision to redefine the digital landscape, we aim to empower businesses, large and small, to harness the full potential of technology. We believe in crafting experiences that resonate, solutions that inspire, and strategies that deliver tangible results.
          </p>
          <h2 className=" text-2xl font-bold mt-2">Who We Are</h2>
          <p>
          We are a team of tech enthusiasts, creative minds, and strategic thinkers united by a common purpose—to bring your digital dreams to life. Our diverse skill set and collective expertise allow us to offer a comprehensive suite of services tailored to meet your unique needs.
          </p>
        </div>
      </div>
      <Location />
    </>
  );
};

export default About;
