import React from 'react'
import image1 from '../assets/Mask Group (8).png';
import image2 from '../assets/Mask Group (6).png';
import image3 from '../assets/Mask Group (7).png'

const work = [
    {
        id : 1,
        image : image1,
        words : "Purchase Securely",
        lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
        number: "1."
    },
    {
        id : 2,
        image : image2,
        words : "Ship From Warehouse",
        lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
        number: "2."
    },
    {
        id : 3,
        image : image3,
        words : "Style Your Room",
        lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
        number: "3."
    },
]


const Work = () => {
    return (
        <>
            <section className = 'mt-10 mb-30 '>
                <section className = ' px-4  mx-auto max-w-screen-xl md:px-20'>
                    <div>
                        <h1 className = 'text-center font-bold text-xl text-[#000000]'>How it Works</h1>
                        <p className = 'my-2 text-center font-normal text-base text-[#666666]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <div className = 'mt-8 flex flex-col md:flex-row gap-x-4 gap-y-8 justify-between'>
                            {work.map((works) => {
                                return (
                                    <div key = {works.id} className = 'flex flex-col gap-10'>
                                        <div className = 'relative'>
                                            <img src= {works.image} alt="" className = 'w-full object-cover'/>
                                            <div className = 'absolute p-3 rounded-full bg-white top-full -translate-y-1/2 -translate-x-1/2 left-1/2 '>
                                                <div className =  'border w-11 rounded-full h-11 bg-[#000000] flex justify-center items-center'>
                                                  <span className = 'text-white font-bold text-lg '>{works.number}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = 'text-center '>
                                            <h1 className = 'text-[#333333] font-bold text-lg'>{works.words}</h1>
                                            <p className = 'text-[#2B324C] font-normal text-base'>{works.lorem}</p>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Work
