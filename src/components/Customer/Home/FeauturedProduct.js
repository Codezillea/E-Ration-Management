import React from 'react'
import img1 from "../../../assets/Group 2014.png";
import img2 from "../../../assets/ManagerImage2.jpg";
import img3 from "../../../assets/ManagerImage.jpg";
import { IndividualProduct } from './IndividualProduct';
export const FeauturedProduct = () => {
    const products = [img1,img2,img3]
  return (
    <>
    
{
    products.map((image)=>(
        <div className="flex justify-between items-center">
            <IndividualProduct img={image} />
        </div>
        
    ))
}


    </>
  )
}
