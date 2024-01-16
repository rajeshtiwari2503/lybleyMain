import Image from 'next/image'
import { Inter } from 'next/font/google'

import Head from 'next/head'
import HomePage from '@/components/HomePage'
import HomeSlider from '@/components/HomeSlider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>LYBLEY</title>
        <meta name="description" content="Explore LYBLEY for cutting-edge website and app development, robust e-commerce solutions, and impactful digital marketing. Our expertise extends to comprehensive CRM services and strategic social media marketing. Elevate your brand's digital presence with tailored solutions designed for growth and engagement. Partner with us to unlock the full potential of the digital landscape and drive your business forward" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>
   
    <main
     className="   " 
    >
      <HomeSlider />
      <div className=' mt-20'>
       <HomePage />
       
      </div>
    </main>
    </>
  )
}
