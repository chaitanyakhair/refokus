import React from 'react'
import Product from './Product';

function Products() {

    var products = [
        {title : 'Google', description : 'This is a fuckin description nigga, eat shit hehehe. You a hoe mathafuka! shut yo bitch ass up.', live : true , case : true},
        {title : 'Meta', description : 'This is a fuckin description nigga, eat shit hehehe. You a hoe mathafuka! shut yo bitch ass up.', live : true , case : true},
        {title : 'Amazon', description : 'This is a fuckin description nigga, eat shit hehehe. You a hoe mathafuka! shut yo bitch ass up.', live : true , case : true},
        {title : 'Microsoft', description : 'This is a fuckin description nigga, eat shit hehehe. You a hoe mathafuka! shut yo bitch ass up.', live : true , case : true},
    ];

  return (
    <div>
        {products.map((val, index) => <Product val={val} />)}
    </div>
  )
}

export default Products