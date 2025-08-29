import React, { useState, useRef, useEffect,} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { navbar } from '../lib/db';
import menu from '../assets/Menu Button.svg'
import close from '../assets/close_20dp_161E54_FILL0_wght400_GRAD0_opsz20.svg';
import chevron from '../assets/keyboard_arrow_down_20dp_333333_FILL0_wght400_GRAD0_opsz20.svg';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target)
          ) {
            setIsOpen(false);
          }
        };
    
        if (isOpen) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [isOpen]);

    return (
        <>
            <section className = 'sticky reltive backdrop-blur-md top-0 z-[100] inset-x-0 transition-all w-full bg-white w-full '>
                <section className = 'py-4 px-2.5 h-full mx-auto max-w-screen-xl md:px-20 z-20'>
                    <section className = 'flex items-center justify-between   '>
                        <div>
                            <h1 className = 'text-[#054C73] font-bold text-[1.45rem] '>Furniture</h1>
                        </div>
                        <div className = 'hidden lg:flex gap-13 items-center'>
                            {navbar.map((nav) =>{
                                return (
                               <Link key = {nav.id}
                                className = 'text-[#333333] font-semibold hover:text-[#054C73] text-sm'
                               >
                                   {nav.name}
                               </Link>
                                )
                            })}
                        </div>
                        <div className = 'block  lg:hidden  '>
                           <div  className = 'w-full h-full '>
                               {isOpen ? (
                                   <div onClick={() => setIsOpen(false)}>
                                       <img src= {close} alt="" className = 'w-12 h-12 transform transition-all duration-500 '/>
                                   </div>
                                   ) : (
                                   <div onClick={() => setIsOpen(true)}>
                                      <img src= {menu}  alt=""  className = 'w-12 h-12 transform  scale-y-[-1] scale-x-[-1] transition-all duration-500 ' />
                                   </div>
                               )}
                           </div>
                        </div>
                    </section>
                </section>
                <div className = 'absolute top-16 borde inset-0 w-full  '>
                {isOpen && (
                       <div className = 'flex pl-4 py-6 bg-white pr-11 flex-col gap-10 h-[55vh]  overflow-auto translate-y-0  '>
                            {navbar.map((nav) =>{
                                return (
                               <Link key = {nav.id}
                                className = 'flex justify-between items-center'
                               >
                                   <h5 className = 'text-[#333333] font-semibold text-[0.95rem]'>{nav.name}</h5>
                                   <img src= {chevron}  alt="" className = {`w-6 ${nav.id === 1 ? 'hidden': ""}`}/>
                               </Link>
                                )
                            })}
                        </div>
                )}
                </div>
            </section>
            <Outlet/>
        </>
    )
}

export default Navbar
