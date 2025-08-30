import React from 'react'

const Prefooter = () => {
    return (
        <>
            <section className = 'bg-[#F2F5FF] py-10'>
                <section className = 'flex flex-col justify-center items-center px-4 mx-auto max-w-screen-xl md:px-20'>
                    <div className = 'text-center'>
                        <h1 className = 'text-center font-bold text-xl text-[#333333]'>Join Our Mailing List</h1>
                        <p className = 'my-2 w-[95%] md:w-[400px] text-center font-normal text-base text-[#666666]'>Sign up to receive inspriration, product updates, and special offers from our team.</p>
                    </div>
                    <div className = 'relative mt-6'>
                        <input type="email" name="" id="" className = 'w-[300px] md:w-[400px] border-1 py-2 ps-2 pr-25 md:pr-26 rounded-[3px]  border-[#054C73] focus:border-[#054C73] focus:border-2 focus: focus:outline-[#054C73] '/>
                        <div className = 'absolute right-0 top-0 '>
                           <button className = ' py-[11px] rounded-[3px] bg-[#054C73] text-white font-bold text-sm px-5 '>Submit</button>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Prefooter
