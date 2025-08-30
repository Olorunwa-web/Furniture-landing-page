import React from 'react'
import image from '../assets/Image-living room.png';
import image1 from '../assets/Mask Group (4).png';
import image2 from '../assets/Mask Group (5).png';



const Browse = () => {
    return (
        <>
           <section className = 'border-b-1 border-[#D7D6D6]'>
            <section className = ' my-10 px-4  mx-auto max-w-screen-xl md:px-20'>
                <div>
                    <h1 className = 'text-center font-bold text-xl text-[#000000] '>Browse The Range</h1>
                    <p className = 'my-2 text-center font-normal text-base text-[#666666] '>Lorem ipsum dolor dit amet, consecteur adipiscing elit.</p>
                    <div className = 'my-10 flex flex-col sm:flex-row gap-x-5 gap-y-5 justify-between'>
                        <div className = 'flex flex-col gap-4'>
                            <div>
                                <img src= {image1} alt="" className = 'w-full'/>
                            </div>
                            <h1 className = 'text-center text-lg font-semibold text-[#333333] '>Dining</h1>
                        </div>
                        <div className = 'flex flex-col gap-4'>
                            <div>
                                <img src= {image} alt="" className = 'w-full'/>
                            </div>
                            <h1 className = 'text-center text-lg font-semibold text-[#333333] '>Living</h1>
                        </div>
                        <div className = 'flex flex-col gap-4'>
                            <div>
                                <img src= {image2} alt="" className = 'w-full'/>
                            </div>
                            <h1 className = 'text-center text-lg font-semibold text-[#333333] '>Bedroom</h1>
                        </div>
                    </div>
                </div>
            </section>

           </section>
        </>
    )
}

export default Browse
