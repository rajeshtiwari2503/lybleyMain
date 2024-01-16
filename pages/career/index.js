import { useRouter } from 'next/router';
import React, { useState } from 'react'

const career = (props) => {
    const { isCareer } = props
    const handleScroll = () => {
        // Scrolls down 100 pixels vertically on button click
        window.scrollTo({
            top: window.pageYOffset + 410,
            behavior: 'smooth', // Optional: Smooth scrolling animation
        });
    };
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
    const router = useRouter()
    const handleLink = () => {
        router.push("/career")
    }
    // https://sparetrade-bucket.s3.ap-south-1.amazonaws.com/career.jpg-1704870006840-776787815
    return (
        <>
            <div onClick={isCareer ? handleLink :handleScroll} className=" cursor-pointer bg-cover bg-center h-[400px] mb-16" style={{ backgroundImage: 'url("/career2.jpg")', marginTop: "70px" }}>
                <div className='bg-black bg-opacity-40  h-[400px]'>
                    <h1 className='text-center text-white font-bold text-4xl pt-12'>Careers</h1>
                    <p className='text-center text-white font-bold mt-4 text-2xl'> Join Our Team and Shape the Future of Technology!</p>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 mt-2'>
                        <div></div>
                        <p className='text-center text-white col-span-2 '> Welcome to Lybley, where innovation meets opportunity. Are you ready to be part of a dynamic team that thrives on pushing boundaries and creating cutting-edge solutions in the world of technology? At Lybley, we're passionate about fostering an environment that encourages creativity, collaboration, and continuous learning.</p>
                        <div></div>
                    </div>
                    <div className='text-center mt-8'>
                        <button className='bg-gradient-to-r from-black to-white hover:bg-bg-gradient-to-r text-black-400 font-bold uppercase  hover:from-white hover:bg-black transition-all duration-600  px-4 py-3 rounded-full' onClick={isCareer ? handleLink : handleScroll}>Join our team</button>
                    </div>
                </div>
            </div>
            {isCareer
                ? ""
                : <div className='container mx-auto px-4 md:px-14 mt-16'>
                    <div className='text-center text-2xl font-bold mt-12'>Why Choose Lybley?</div>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   items-center justify-center'>
                        <div className=''>
                            <div className='mt-2 text-justify'> <span className='font-bold'> Innovative Projects:</span> Dive into exciting projects that challenge your skills and expand your horizons. From AI and machine learning to cybersecurity and cloud computing, be at the forefront of groundbreaking technologies.</div>

                            <div className='mt-2 text-justify'> <span className='font-bold'> Collaborative Culture:</span> Join a diverse team of talented individuals who are dedicated to teamwork and mutual growth. We believe in sharing knowledge, supporting each other, and celebrating successes together.</div>

                            <div className='mt-2 text-justify'> <span className='font-bold'> Professional Development: </span>Your growth matters to us. We offer extensive opportunities for training, skill enhancement, and career development, ensuring you stay ahead in the fast-paced tech industry.</div>

                            <div className='mt-2 text-justify'> <span className='font-bold'> Impactful Work: </span>Make a difference by working on projects that have a global impact. Your contributions will shape the future of technology and transform industries.</div>

                            <div className='mt-2 text-justify'> <span className='font-bold'> Work-Life Balance:</span> We value your well-being. Enjoy a flexible work environment that promotes a healthy balance between your professional and personal life.</div>
                            <div className='mt-4'>
                                Explore our current job openings and find the perfect opportunity to leverage your skills and passion. Whether you're an experienced professional or just starting your career, we have diverse roles across various departments waiting for you.
                            </div>
                            <div className='mt-2'>Join us in shaping the future of technology. Let's innovate together!</div>

                            <div className='mt-2'>Ready to take the next step? Check out our current openings and embark on an exciting journey with Lybley.</div>
                        </div>
                        <div>
                            <div className="py-8 px-4">
                                <div className="max-w-md mx-auto bg-gray-200 p-6 rounded-md shadow-md">
                                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                                    <form action="#" method="POST" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="mb-4">
                                                <label for="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                                                <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" onChange={handleInputChange} />
                                            </div>
                                            <div className="mb-4">
                                                <label for="contact" className="block text-gray-700 font-semibold mb-2">Contact</label>
                                                <input type="text" id="contact" name="contact" placeholder="Enter your contact" className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label for="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                                            <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" onChange={handleInputChange} />
                                        </div>
                                        <div className="mb-6">
                                            <label for="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                                            <textarea id="message" name="message" placeholder="Enter your message" rows="4" className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" onChange={handleInputChange}></textarea>
                                        </div>
                                        <button type="submit" value="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default career;