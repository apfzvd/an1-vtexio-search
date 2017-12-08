import React, { Component } from 'react'

const Shelf = ({ productName, image, brand, url }) => {
 return (
   <div className="flex">
     <div className="ba bw1 br2 b--light-silver w-100 pa3 mr2">
       <div className="fl w-100 image">
        <img className="w-50" src={image} alt="{productName}"/>
       </div>
       <div className="fl w-100 f3 blue">{productName}</div>
       <div className="fl w-100 f4 blue">{brand}</div>
       <a href={url} className="fl w-100 f4 dark-blue">Ver produto</a>
     </div>
   </div>
 )
}

export default Shelf
