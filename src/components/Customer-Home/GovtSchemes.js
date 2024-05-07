import React from 'react'
import { IndividualScheme } from './IndividualScheme'

export const GovtSchemes = () => {
    const schemes=[1,2,3]
  return (
    <>
    

{
    schemes.map(()=>(
        <div className="flex flex-row justify-center items-center max-w-lg">
            <IndividualScheme/>
        </div>
    ))
}

    </>
  )
}
