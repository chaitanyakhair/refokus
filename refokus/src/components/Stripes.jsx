import React from 'react'
import Stripe from './Stripe'

function Stripes() {

    var data = [
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg" , number :"10"},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27565c41bb608f7f7c0_rainfall.svg" , number :"35"},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg" , number :"3"},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg" , number :"10"},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27565c41bb608f7f7c0_rainfall.svg" , number :"35"},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg" , number :"3"},
    ]
    
  return (
    <div className="flex items-center mt-20">
        {data.map((elem,index)=>(
            <Stripe val={elem} />
        ))}
        
    </div>
  )
}

export default Stripes