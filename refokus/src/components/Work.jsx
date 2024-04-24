import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function Work() {

    const [images , setImages ] = useState ([
    {url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15-p-500.webp" ,top: "50%" ,left: "50%" ,isActive: false},
    {url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204-p-500.png" ,top: "55%" ,left: "48%" ,isActive:false },
    {url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-500.webp" ,top: "47%" ,left: "53%" ,isActive: false},
    {url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11-p-500.jpg" ,top: "51%" ,left: "61%" ,isActive: false},
    {url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01-p-500.jpg" ,top: "60%" ,left: "45%" ,isActive: false},

  ]);

    const { scrollYProgress } = useScroll();
    
    scrollYProgress.on("change",  (data) => {
      function imagesShow(arr){
        setImages(prev => (
          prev.map((item, index) => (
            arr.indexOf(index) === -1 ? (
              {...item, isActive:false}
            )
            : {...item, isActive:true}
          ))
        ));
      }

      switch (Math.floor(data*100)) {
        case 0:
          imagesShow([]);
          break;
        case 1:
          imagesShow([0]);
          break;
        case 3:
          imagesShow([0,1]);
          break;
        case 5:
          imagesShow([0,1,2]);
          break;
        case 7:
          imagesShow([0,1,2,3]);
          break;
        case 9:
          imagesShow([0,1,2,3,4]);
          break;
      }
    });
  

  return (
    <div className="w-full mt-10">
        <div className="relative max-w-screen-xl mx-auto text-center">
            <h1 className='text-[30vw] leading-none font-medium select-none racking-tight'>work</h1>
            <div className="absolute top-0 w-full h-full">
              {images.map((elem,index )=> elem.isActive && (<img className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]" src={elem.url} style={{ top : elem.top , left : elem.left }} />))}
            </div>
        </div>
    </div>
  )
}

export default Work