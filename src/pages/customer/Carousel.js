import React from 'react'

export const Carousel = ({children: slides}) => {
  return (
    <>
    <div className="overflow-hidden relative">
        <div className="flex">{slides}</div>
        <div className="">
            <button></button>
        </div>
    </div>

    </>
  )
}
