import React from 'react'
import heroimage from '../assets/scandinavian-interior-mockup-wall-decal-background 1.png';
import bus from '../assets/Group.svg'
import hours from '../assets/Group (1).svg'
import sheild from '../assets/shield-1 1.svg'
import Inspire from '../components/Inspire'; 
import Beauty from '../components/Beauty';
import Browse from '../components/Browse';
import Work from '../components/Work'
import Prefooter from '../components/Prefooter';




const stages = [
    {
        id:1,
        photo: bus,
        titles: "Lorem ipsum dolor sit amet.",
        word: 'Free Delivery'

    },
    {
        id:2,
        photo: hours,
        titles: "Lorem ipsum dolor sit amet.",
        word: 'Support 24/7'

    },
    {
        id:3,
        photo: sheild,
        titles: "Lorem ipsum dolor sit amet.",
        word: "100% Authentic",

    }
]

const Home = () => {
    return (
        <>
            <section className ="bg-cover object-fit py-20 md:py-40 bg-no-repeat " style = {{ backgroundImage: `url(${heroimage})`}}>
                <section className = 'bord flex justify-end py-4 px-4 h-full mx-auto max-w-screen-xl md:px-20'>
                    <div className = 'bg-[#DFE9F4] p-5 lg:p-7 rounded-[10px]  lg:max-w-1/2'>
                        <h4 className = 'text-base text-[#111111] font-semibold tracking-[.23em]'>New Arrival</h4>
                        <div className = 'borde my-3 w-full lg:w-[350px] '>
                            <h1 className = 'text-[#054C73] font-bold text-4xl lg:text-[42px] leading-10 lg:leading-[3.1rem] '>Discover Our New Collection</h1>
                        </div>
                        <div className = 'w-full py-2'>
                           <p className = 'text-[#333333] tracking-wider font-medium text-base leading-[1.7rem] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae eligendi ratione accusantium inventore?</p>
                        </div>
                        <button className = 'mt-4 py-[13px] w-40 bg-[#054C73] rounded-full text-sm text-white font-bold '>BUY NOW</button>
                    </div>
                </section>
            </section>
            {/* second-place */}
            <section className = 'bg-[#F2F5FF]'>
            <section className = ' py-7 flex sm:flex-row flex-col gap-y-10 justify-center items-center  sm:justify-between px-4 h-full mx-auto max-w-screen-xl md:px-20  '>
                {stages.map((free) =>{
                    return(
                        <div key = {free.id} className = 'flex gap-4 items-center '>
                            <div>
                                <img src= {free.photo} alt="" className = {` ${free.id === 1 && 'md:w-18 w-14 '} ${free.id === 2 && 'md:w-14 w-12'} ${free.id === 3 &&  'w-11 md:w-13'} `}/>
                            </div>
                            <div className = 'flex flex-col'>
                                <h3 className = 'text-[#333333] font-semibold text-lg'>{free.word}</h3>
                                <p className = 'text-[#333333] font-normal md:text-base text-sm'>{free.titles}</p>
                            </div>

      
                        </div>
                    )
                })}

            </section>
            </section>
            <Inspire/>
            <Beauty/>
            <Browse/>
            <Work/>
            <Prefooter/>
        </>
    )
}

export default Home
