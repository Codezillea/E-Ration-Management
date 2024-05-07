import { Navbar } from "./Navbar";
import { Carousel } from 'flowbite-react';

import img1 from "../../assets/Group 2014.png";
import img2 from "../../assets/ManagerImage.jpg";
import img3 from "../../assets/About.jpg";
import delivery from "../../assets/delivery.png";


import {Footer } from "../../components/Customer-Home/Footer"
import { BestSellers } from '../../components/Customer-Home/BestSellers';
import { FeauturedProduct } from "../../components/Customer-Home/FeauturedProduct";
import { GovtSchemes } from "../../components/Customer-Home/GovtSchemes";


export const HomePage = () => {
  
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   ref: ref,
  //   offset: ["0 1", "1.33 1"]
  // });

  return (
    <>
      <div className="">
        <div className="w-full ">
          <Navbar className="  " />
        </div>

        <div className="mt-16 h-90 sm:h-64 xl:h-80 2xl:h-96  mb-28">
          <Carousel className=' h-104'>
            <img src={img1} alt=".." />
            <img src={img2} alt=".." />
            <img src={img3} alt=".." className="w-full h-full" />
            <img src={img3} alt=".." />
          </Carousel>
        </div>
        {/*  About Section */}
        <div className=" mt-48" >
          <h2 className="text-center text-4xl font-bold"></h2>
          <div className="mt-4 bg-gray flex flex-row justify-center items-center">
            <div className=" w-1/2">
              <img src={delivery} alt="" className="h-200 w-200" />
            </div>
            <div className="w-1/2 ">
              <h1 className="text-4xl font-bold mb-4 mt-0">We Provide </h1>
              <p className="text-3xl w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias debitis sapiente maxime quis iure perspiciatis laboriosam, veniam et ratione, esse ab voluptatum iusto sit nulla maiores ut nam minima aperiam!</p>

            </div>

          </div>

        </div>



            {/* Featured Products */}

        <div className="mt-32">
          <h2 className="text-center text-4xl font-bold">Today Products</h2>
          <div className="mt-16 flex flex-row">
            <FeauturedProduct/>
             
          </div >
          <div className=" mt-16 flex justify-center items-center">
          <button className="border p-5 bg-orange-500 rounded-lg text-white text-2xl">
            view all products
          </button>
          </div>
          
          </div>    
   

    {/* Government Schemes */}
    <div className="mt-16">
    <h2 className="text-center text-4xl font-bold">Government Schemes</h2>
    <div className="flex mt-16 ">

<GovtSchemes/>

</div>
    </div>
    

        <div className="">

          <BestSellers />

        </div>
{/* Footer*/}
<div className="mt-4 ">
  <Footer/>
</div>
     
      </div>
    </>
  );
};
