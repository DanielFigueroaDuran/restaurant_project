import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import iras from "../../assets/icons/iras.png";
import chef from "../../assets/icons/charan.jpg";

const Abaut = () => {
    return (
        <div className="section" id='about'>
            <div className="grid md:grid-cols-2 items-center mb-10">
                <div className="flex flex-col justify-center items-start gap-6">
                    <div className="sm:text-3xl text-xl font-bold mb-6">
                        Best
                    </div>
                    <p className='text-sm opacity-70 '>Lorem, ipsum dolor sit amet consectetur adipisicing  elit. Quidem id sit maxime nisi quis similique molestias dignissimos cupiditate nam, vel, debitis rerum et, earum ut. Recusandae nisi quaerat ea unde?
                    </p>
                    <div className="btn">
                        <Link
                            to="#"
                            className='text-white text-[0.85rem]'
                        >
                            Explore more
                        </Link>
                        <FaArrowRight className='text-white' />
                    </div>
                </div>
                <div className="md:row-start-1">
                    <img src={iras} alt="hero" />
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="">
                    <div className="sm:text-3xl text-xl font-bold mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <p className='text-sm opacity-70 text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quae commodi pariatur, vel nobis odio. Optio ducimus soluta maiores consequatur libero, eligendi adipisci, corrupti quos omnis, vel officia repellendus earum?
                    </p>
                </div>
                <div>
                    <img className='rounded-xl' src={chef} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Abaut