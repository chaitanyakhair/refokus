import React, { useState } from 'react'
import Product from './Product';
import { motion } from 'framer-motion';


function Products() {

    var products = [
        {title : 'Maniv', description : 'A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.', live : true , case : true},
        {title : 'Refokus', description : "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live : true , case : true},
        {title : 'Webflow', description : 'An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.', live : true , case : true},
        {title : 'Cula', description : "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates", live : true , case : true},
    ];

    const [pos, setPos] = useState(0);
    const mover = (val) => {
      setPos (val*20 );
    }

  return (
    <div className='mt-20 bg-zinc-900 relative'>
        {products.map((val, index) => <Product val={val} mover={mover} count={index} />)}
        <div className='absolute top-0 w-full h-full pointer-events-none'>
          <motion.div initial={{ y: pos, x : "-50%" }} animate={{y: pos + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.6}} className='window absolute w-[32rem] h-[20rem] bg-sky-100 left-[44%] overflow-hidden rounded-2xl'>
            <motion.div 
              animate={{ y: -pos+`rem`}} 
              transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  
              className=' w-full h-full bg-sky-400'>
              <img src='/src/assets/1.gif' className=' object-cover -translate-y-8'/> 
              </motion.div>
            <motion.div 
              animate={{ y: -pos+`rem`}} 
              transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} 
              className=' w-full h-full bg-sky-600'>
                <img src='/src/assets/2(1)(1).gif' className=' scale-100 '/>
              </motion.div>
            <motion.div 
              animate={{ y: -pos+`rem`}} 
              transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} 
              className=' w-full h-full bg-sky-800'>
              <img src='/src/assets/3.gif' className=' scale-100 '/>
              </motion.div>
            <motion.div 
              animate={{ y: -pos+`rem`}} 
              transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} 
              className=' w-full h-full bg-sky-900'>
              <img src='/src/assets/4(1)(1).gif' className=' scale-100 '/>
              </motion.div>
          </motion.div>
        </div>
    </div>
  )
}

export default Products