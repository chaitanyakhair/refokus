import React from 'react'
import Button from './Button'

function Product({val , mover , count}) {
  return (
    <div className='w-full py-20 h-[20rem] text-white bg-zinc-900'>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-6xl capitalize font-semibold '>{val.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-10'>{val.description}</p>
                <div className='flex items-center gap-10'>
                    {val.live && <Button />}
                    {val.case && <Button title='case study' />}
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Product