import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 gap-32 flex'>
            <div className='basis-1/2'>
                <h1 className='text-[11rem] tracking-tight font-semibold'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-4'>
                <div className='basis-1/3'>
                    <h4 className='capitalize mt-12 mb-10 text-zinc-500'>Socials</h4>
                    {["instagram","twitter","linkedIn"].map((item , index) => <a className='block mt-2 capitalize text-zinc-600'>{item}</a> )}
                </div>
                <div className='basis-1/3'>
                    <h4 className='capitalize mt-12 mb-10 text-zinc-500'>Socials</h4>
                    {["instagram","twitter","linkedIn"].map((item , index) => <a className='block mt-2 capitalize text-zinc-600'>{item}</a> )}
                </div>
                <div className='basis-1/2 mt-12'>
                    <p>This is some bullshit bottom liine heheh .nobody looks at it, it shold be ded.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer