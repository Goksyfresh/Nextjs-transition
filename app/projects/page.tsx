'use client'
import React from 'react'

import Image4 from '../../public/portrait5.webp';
import Image from 'next/image';



const Projects = () => {
  return (
    <>
    
    <div className="projects">
    <div className="images">
        {/* <Image src={Image1} alt='' priority  placeholder="blur"/>
        <Image src={Image2} alt='' priority placeholder="blur"/>
        <Image src={Image3} alt='' priority placeholder="blur"/> */}
        <Image src={Image4} alt='' priority placeholder="blur"/>

        <Image src={Image4} alt='' priority placeholder="blur"/>

        <Image src={Image4} alt='' priority placeholder="blur"/>

        <Image src={Image4} alt='' priority placeholder="blur"/>

    </div>
    </div>
    </>
    )

}


export default Projects