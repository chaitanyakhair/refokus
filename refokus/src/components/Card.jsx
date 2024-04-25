import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


function Card({width , start , para , hover}) {

  return (
    <motion.div whileHover={{backgroundColor: hover ==="true" && "#7443ff", padding:"25px"}} className={` bg-zinc-800 rounded-xl p-5 ${width} min-h-[30rem] flex flex-col justify-between`}>
        <div className='w-full'>
            <div className='flex w-full justify-between items-center'>
                <h3>Let's GO!</h3>
                <FaArrowRightLong />
            </div>
            <h1 className='text-3xl font-medium mt-5'>Building Worldclass Projects</h1>
        </div>
        <div className='down w-full'>
        {
            start && (
                <>
                    <h1 className='text-6xl font-semibold tracking-normal leading-none'>start a project</h1>
 
                    <button  className='rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-100'>Contact us</button>

                </>
            )
        }
        {
            para && (
                <p className='text-sm text-zinc-500 font-medium'>From Brands to websites our work speaks itself!</p>
            )
        }
            
            
        </div>
        

    </motion.div>
  )
}

export default Card