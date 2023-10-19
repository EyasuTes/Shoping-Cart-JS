import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import slides from '../data/slides.json';

export default function Slider() {
  return (
    <div className='relative'  >
      <Slide autoplay={true} duration={3000} easing='ease'  arrows={false}>
        {slides.map((Slide, index) => (
          <div key={index} >
            <div className='relative' style={{boxShadow: 'inset 0px -80px 80px  rgba(0,0,0,0.9)'}}>
              <img
                src={Slide.img}
                className='w-full shadow-inner-lg'
                style={{ opacity: '0.5', zIndex: '-1', position: 'relative', height: '80vh', objectFit: 'cover'}}
              />
              <div className='absolute bottom-5 w-full flex justify-center' style={{ marginBottom: '20px' }}>
                {Array(slides.length)
                  .fill()
                  .map((_, i) => (
                    <div
                      key={i}
                      className={`indicator ${i === index ? 'active' : ''}`}
                      onClick={() => console.log('Clicked:', i)}
                      style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: i === index ? 'red' : 'white',
                        borderRadius: '50%',
                        margin: '0 5px',
                        cursor: 'pointer',
                    }}
                    ></div>
                  ))}
              </div>
              <div className='absolute top-28 sm:top-36 md:top-44 lg:top-64 ml-10'>
                <div className='text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl'>{Slide.title}</div>
                <div className='text-white font-bold text-2xl sm:text-4xl md:text-5xl lg:text-7xl flex flex-col gap-1'>
                  <div>{Slide.subTitle}</div>
                  <span className='bg-red-500  lg:p-2' style={{ clipPath: 'polygon(0 0, 60% 0, 80% 80%, 0 100%)' }}>
                    {Slide.lastWord}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
