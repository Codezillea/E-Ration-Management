import React from 'react'
import img from "../../assets/ManagerImage2.jpg"
export const IndividualScheme = () => {
  return (
    <>
    <div class="mx-4 mt-8 w-full h-full max-w-xl bg-white border border-gray-200 rounded-lg shadow">
    <a href="/">
        <img class="rounded-t-lg" src={img} alt="" />
    </a>
    <div class="p-5">
        <a href="/">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt tempore adipisci modi voluptatum odio assumenda maiores blanditiis. Magni atque enim sapiente nisi ullam odio, iure porro animi error provident cupiditate?</p>
        <a href="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none ">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

    </>
  )
}
