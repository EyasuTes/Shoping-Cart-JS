import React from 'react'
import { useState,useEffect } from 'react'
import slides from '../data/slides.json'
export default function Slider() {
  const [slide, setSlide]=useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % slides.length);

    }, 3000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);
  function selectSlide(index){
    console.log(index)

    setSlide(index)
  }
  return (
    <div className='relative '>
      <div className='relative ' style={{ height: '80vh', transition: 'opacity 1s ease' }} >
          <img 
            src={slides[slide].img} className='w-full ' 
            style={{opacity:'0.5',zIndex:'-1',position:'relative',height:'80vh', objectFit:'cover'}}/>
          <div className='absolute top-28 sm:top-36 md:top-44 lg:top-64 ml-10' >
            <div className=' text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl '>
              {slides[slide].title}
            </div>
            <div className='text-white font-bold text-2xl sm:text-4xl md:text-5xl lg:text-7xl flex flex-col gap-1 '  
                > 
              <div>{slides[slide].subTitle}</div>  
              <span className='bg-red-500  lg:p-2 ' style={{clipPath: 'polygon(0 0, 60% 0, 80% 80%, 0 100%)'}}>{slides[slide].lastWord}</span>
            </div>
          </div>
        </div>
        <div className=' flex w-44 absolute gap-4 left-1/2' >
          {slides.map((Slide, index)=>(
            <div 
              key={index} style={{ width: '30px', height:'15px'}} 
              className={` transition-all duration-1000 ease-in-out bg-red-500 rounded-md mt-5 ${slide===index?'flex-grow':''}`} 
              onClick={()=>selectSlide(index)}>
            </div>
          ))}
        </div>
        
    </div>
  )
}
