import React from 'react'
import Brands from './Brands'
import News from './News'
import Career from '@/pages/career'


const HomePage = () => {
  return (
    <div className=' '>
      
    <div className='container mx-auto px-4 md:px-14'>
      <News />
      <Brands />
      
    </div>
    <Career  isCareer={true}/>
    </div>
  )
}

export default HomePage