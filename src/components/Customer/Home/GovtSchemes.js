import React from 'react'
import { IndividualScheme } from './IndividualScheme'

export const GovtSchemes = () => {
    const schemes=[1,2,4,5,6]
  return (
    <>
    
<div className="mt-16 flex flex-row justify-around items-center flex-wrap max-w-350px ">

{
    schemes.map(()=>(
        <div >
            <IndividualScheme />
        </div>
    ))
}
</div>


    </>
  )
}
