import Link from 'next/link'
import React, { useState } from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,

} from "react-icons/fa";

const contact = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
    website: 'Lybley.com'
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
      setIsLoading(true);
      const response = await fetch('https://lybleybackend-production.up.railway.app/createContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      setIsLoading(false);
      if (response.ok) {
        console.log('Message sent successfully');
        setMsg("Message sent successfully")
        setTimeout(() => {
          setMsg("");
        }, 3000)
        // Show success message or perform other actions upon successful submission
      } else {
        console.error('Failed to send message');
        // Handle error scenarios
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error scenarios
      setIsLoading(false);
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
      <div className='container mx-auto md:px-14 px-4  sm:py-0'>
        <div className='py-10'>

          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 py-4'>
            <div>
              <div className="font-bold text-4xl  text-center mb-8">ONLINE INQUIRY</div>
              <div className="  bg-black  p-6 rounded-md shadow-md  ">

                <div className='border border-gray-200 p-6 rounded-xl '>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <input type='text' name="name" className='col-span-2 md:col-span-1 focus:outline-none w-full   rounded-lg bg-[#eaeaea] p-4' placeholder='Name' onChange={handleInputChange} />

                    <input type='number' name="contact" className='col-span-2 md:col-span-1 focus:outline-none w-full   rounded-lg bg-[#eaeaea] p-4' placeholder='Phone Number' onChange={handleInputChange} />

                    <input type='email' name="email" className='col-span-2 focus:outline-none w-full   rounded-lg bg-[#eaeaea] p-4' placeholder='Email' onChange={handleInputChange} />

                    <textarea className='col-span-2 focus:outline-none w-full   rounded-lg bg-[#eaeaea] p-4' name="message" placeholder='Your Suggestion' onChange={handleInputChange} />
                    <button className='bg-blue-400 text-xl w-full text-white font-bold  rounded-lg   p-4' disabled={isLoading} onClick={handleSubmit}>{isLoading ? "Submitting" : "Submit"}</button>
                    <div className='text-center text-green-500 font-bold text-2xl pt-4'>{msg} </div>
                  </div>
                </div>
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
                <div>+91 7011071202</div>
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