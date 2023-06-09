import React from 'react'
import { solarView } from "../images/Aimages"

const About = () => {
    return(
        <div className='w-full bg-white py-16 '>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <video controls className='w-[500px] mx-auto my-4'>
      <source src={solarView} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
                <div className='flex flex-col justify-center max-w-[1240px] bg-white shadow-lg shadow-yellow p-5'>
                    <p className='text-[#dc2626] font-bold'>ABOUT E_SOLAR</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Solar power</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur,
                         adipisicing elit. Nulla laboriosam hic nam.
                          Dolorum unde sed cum nam maxime beatae veniam.
                          Lorem, ipsum dolor sit amet consectetur adipisicing 
                          elit. In, cum?
                    </p>
                    <button className='bg-[#dc2626] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </div>
    )
}


export default About;