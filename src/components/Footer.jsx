import React from 'react'
import image1 from '../assets/IG-1.jpg';
import image2 from '../assets/IG-2.jpg';
import image3 from '../assets/IG-3.png';
import image4 from '../assets/IG-4.png';


const Footer = () => {
    return (
        <>
            <section className = 'bg-[#03344F] py-10'>
                <section className = '  px-4 mx-auto max-w-screen-xl md:px-20'>
                    <div className = ' flex flex-col lg:flex-row justify-between  gap-y-8 gap-x-4 '>
                        <div className = ' w-full lg:w-1/3 flex flex-col gap-5 '>
                            <h1 className = 'text-white font-bold text-lg'>Beauty</h1>
                            <p className = 'w-[90%] lg:w-full text-white text-base font-normal '>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                            <h2 className = 'text-white font-bold text-lg'>Follow Us</h2>
                        </div>
                        <div className = 'w-full lg:w-2/3 pt-3'>
                            <h1 className = 'mb-3 text-white font-bold text-lg'>Instagram Shop</h1>
                            <div className = 'flex w-full  flex-col md:flex-row gap-x-3 gap-y-4'>
                                <div>
                                  <img src= {image1} alt="" className = 'w-50 md:w-full '/>
                                </div>
                                <div>
                                   <img src= {image2} alt="" className = 'w-50 md:w-full'/>
                                </div>
                                <div>
                                  <img src= {image3} alt="" className = 'w-50 md:w-full'/>
                                </div>
                                <div>
                                  <img src= {image4} alt="" className = 'w-50 md:w-full'/>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </section>
        </>
    )
}

export default Footer
