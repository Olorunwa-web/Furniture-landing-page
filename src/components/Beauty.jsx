import React from 'react'
import mask from '../assets/Mask Group (3).png'
import eliipse from '../assets/Ellipse 5.png'

const Beauty = () => {
    return (
        <>
            <section className = ' bg-[#F2F5FF] my-7 py-9'>
                <div className = 'flex  z-20 md:flex-row flex-col gap-5 lg:gap-0  justify-between  items-center px-4  mx-auto max-w-screen-xl md:px-20'>
                    <div className = 'basis-2/3 flex flex-col gap-5 '>
                        <h1 className = 'text-[#333333] font-bold  text-2xl '>Beauty Your Space</h1>
                        <p className = 'w-[90%] lg:w-[60%] text-[#666666] font-normal text-base  '>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <div>
                            <button className = 'bg-[#054C73] py-3 px-9 text-white text-sm font-bold rounded-full '>LEARN MORE</button>
                        </div>
                    </div>
                    <div className = ' basis-1/3 text-end z-1 relative '>
                        <div className = ''>
                          <img src= {mask} alt="" className = ' w-[90%] md:w-full object-fill'/>
                        </div>
                        <div className = 'absolute -z-1 top-1/2 right-0 md:right-[-13%] -translate-y-1/2 '>
                           <img src= {eliipse} alt="" className = ' md:w- lg:w-'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Beauty
