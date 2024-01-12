import React from 'react'

const News = () => {
  return (
    <div>
  <div className="grid grid-cols-12 gap-6 p-5 relative">
    <div className="absolute font-bold text-2xl bg-gray-200 bg-opacity-80 px-4 py-2">In the News</div>
  <div className="col-span-8">
    <div className="grid grid-cols-12">
        <div className="col-span-6 bg-cover bg-center h-[500px]" style={{backgroundImage:"url(tectnology.jpg)"}}>
        </div>
        <div className="col-span-6 bg-cover bg-center h-[500px]" style={{backgroundImage:"url(homeAppliances.jpg)"}}>
        </div>
    </div>
  </div>

  <div className="col-span-4 bg-green-500 p-4">
    Banner
  </div>
</div>
    </div>
  )
}

export default News;