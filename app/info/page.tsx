'use client'
import React from 'react'
import Image5 from '../../public/portrait5.webp'
import Image from 'next/image'


const Info = () => {
  return (
    <>
      
  <div className="info">
    <div className="col">
 
        <Image width={4480} height={6720} src={Image5} alt='' priority/>
    </div>
    <div className="col">
        <p>
            Kaleon is a portrait photograoher who captures striking and artistic Images. His wor focuses on light, shadow, and movement, creating portraits that feel both modern and timeless.
             With a minimal and moody style, he brings out raw emotion and unique beauty in every subject.        </p>
    </div>
  </div>
    </>
  
  )
}

export default Info