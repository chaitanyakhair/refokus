import React from 'react'

function Marquee({imagesurls}) {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
        {imagesurls.map(url => <img src={url} />)}
        {imagesurls.map(url => <img src={url} />)}
    </div>
  )
}

export default Marquee