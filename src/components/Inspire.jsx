import React from 'react'
import mask1 from '../assets/Mask Group.png';
import mask2 from '../assets/Mask Group (1).png'
import mask3 from '../assets/Mask Group (2).png'


const Inspire = () => {
    return (
        <>
            <section className = 'mt-13 px-4 h-full mx-auto max-w-screen-xl md:px-20'>
                <div className = ''>
                    <h1 className = 'text-center font-bold text-2xl text-[#111111]'>Inspiration Collection</h1>
                    <p className = 'mt-2 text-center text-[#2B324C] font-normal text-[17px]  ' >Lorem ipsum dolor sit amet, consecteur adipscing eiit.</p>
                    <div className = ' my-10 flex sm:flex-row gap-5 sm:gap-3 lg:gap-5 flex-col justify-between '>
                        <div className = ' lg:pt-12'>
                            <div className = ''>
                                <img src={mask1} alt="" className = 'w-full'/>
                            </div>
                        </div>
                        <div className = ' '>
                            <div>
                                <img src= {mask2} alt="" className = 'w-full'/>
                            </div>
                        </div>
                        <div className = ' lg:pt-6'>
                            <div>
                                <img src= {mask3} alt="" className = 'w-full'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Inspire
