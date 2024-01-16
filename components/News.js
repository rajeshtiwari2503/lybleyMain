import React from 'react'

const News = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-6 p-5 relative">
        <div className="absolute font-bold text-2xl bg-gray-200 bg-opacity-80 px-4 py-2">In the News</div>
        <div className="md:col-span-4 col-span-full">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="md:col-span-6 col-span-full bg-cover bg-center md:h-[500px] h-[200px]" style={{ backgroundImage: "url(coding.jpg)" }}>
            </div>
            
          </div>
        </div>
        <div className="md:col-span-4 col-span-full">
          <div className="grid md:grid-cols-2 grid-cols-1">
             
            <div className="md:col-span-6 col-span-full bg-cover bg-center md:h-[500px] h-[200px]" style={{ backgroundImage: "url(appliances.jpg)" }}>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 col-span-full bg-cover bg-center md:h-[500px] h-[200px] w-full"  style={{ backgroundImage: "url(sparepart.webp)" }}>
          
        </div>
      </div>
    </div>
  )
}

export default News;