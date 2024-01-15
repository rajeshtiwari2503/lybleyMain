import Link from 'next/link'
import React, { useState } from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const contact = () => {

    const [formData, setFormData] = useState({
      name: '',
      contact: '',
      email: '',
      message: ''
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch('/api/sendMail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          console.log('Message sent successfully');
          // Show success message or perform other actions upon successful submission
        } else {
          console.error('Failed to send message');
          // Handle error scenarios
        }
      } catch (error) {
        console.error('Error sending message:', error);
        // Handle error scenarios
      }
    };
  return (
    <>
      {/* <div className='  bg-cover bg-center  h-[370px]' style={{ backgroundImage: "url(contactUs.jpg)", marginTop: "72px" }}>

      </div> */}
      <div className=' flex justify-center items-center mt-16'>
        <div className='flex justify-center items-center p-4 bg-gradient-to-r from-[#f7bab7] to-[#c7eae4] w-[280px] rounded-b-lg text-white font-bold text-5xl '>
          Contact us
        </div>
      </div>
      <div className='container sm:py-0'>
        <div className='py-10'>

          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 py-4'>
            <div>
              <div className="font-bold text-4xl  text-center mb-8">ONLINE INQUIRY</div>
              <div className="max-w-md mx-auto bg-black  p-6 rounded-md shadow-md  ">

                <form onSubmit={handleSubmit}>
                  <div className=" ">
                    <div className="mb-4">
                      <label for="name" className="block text-white font-semibold mb-2">Name</label>
                      <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" onChange={handleInputChange} />
                    </div>
                    <div className="mb-4">
                      <label for="contact" className="block text-white font-semibold mb-2">Contact</label>
                      <input type="text" id="contact" name="contact" placeholder="Enter your contact" className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" onChange={handleInputChange}/>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label for="email" className="block text-white font-semibold mb-2">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" onChange={handleInputChange}/>
                  </div>

                  <div className="mb-6">
                    <label for="message" className="block text-white font-semibold mb-2">Message</label>
                    <textarea id="message" name="message" placeholder="Enter your message" rows="2" className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" onChange={handleInputChange}></textarea>
                  </div>
                  <button type="submit" value="Submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Message</button>
                </form>
              </div>

            </div>
            <div>
              <div className=' mb-8 text-center font-bold text-4xl'>
                GET IN TOUCH
              </div>
              <div className='mt-4'>
                <div>Have a question, feedback, or just want to say hello? We'd love to hear from you! Use the following methods to get in touch with us:</div>
                <div className='mt-2 font-bold text-3xl'>Contact Information</div>
                <div className='mt-2 font-bold text-2xl'>Address:</div>
                <div className='font-bold'>Lybley India Pvt Ltd.</div>
                <div>A-9, A Block, Sector 59, Noida, Uttar Pradesh 201301</div>
                <div className='mt-2 font-bold text-2xl'>Email :</div>
                <div>help@lybley.com</div>
                <div className='mt-2 font-bold text-2xl'>Contact No. :</div>
                <div>7011071202</div>
                <div className='mt-2 font-bold text-2xl'>Social Media</div>
                <div>Connect with us on social media for updates, news, and more:</div>
                <div className="flex items-center gap-3 mt-4 ">
                  <Link href="#">
                    <FaInstagram className="text-3xl" />
                  </Link>
                  <Link href="#">
                    <FaFacebook className="text-3xl" />
                  </Link>
                  <Link href="#">
                    <FaLinkedin className="text-3xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact