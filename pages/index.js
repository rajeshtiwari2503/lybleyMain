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
        <meta name="description" content="Experience unparalleled convenience with our comprehensive suite of services. Whether you need IT solutions, home warranties, spare parts, after-sale services, or a savory samosa fry treat, we've meticulously crafted a platform to cater to your diverse needs. Embrace seamless solutions and satisfaction, in Lybley." />
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
