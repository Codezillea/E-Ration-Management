import React from 'react'

export const IndividualProduct = ({img}) => {
  return (
    <>
    

<div class="ml-16 mt-12 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <a href="/">
        <img class="p-8 rounded-t-lg" src={img} alt="product card" />
    </a>
    <div class="px-5 pb-5">
        <a href="/">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200  ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a href="/" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</a>
        </div>
    </div>
</div>

    </>
  )
}
