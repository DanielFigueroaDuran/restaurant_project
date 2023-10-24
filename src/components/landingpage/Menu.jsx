import React from 'react'
import { menus } from "../../utils/data";

const Menu = () => {
    return (
        <div className="section" id='menu'>
            <div className="flex flex-col items-center">
                <div className="text-3xl text-center font-bold mb-16">
                    Hot Selling Menu
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16 ">
                    {menus?.map((menu) => {
                        return (
                            <div
                                className="p-4 shadow-lg hover:shadow transition-all duration-300"
                                key={menu.id}
                            >
                                <img src={menu.image} alt="imagenMenu"
                                    className='rounded-lg mb-4' />
                                <div className='flex items-center justify-between mb-4'>
                                    <div className="md:text-xl text-[1rem] font-semibold">{menu.name}</div>
                                    <div className="flex items-center gap-3">
                                        <button>-</button>
                                        <span className='text-[0.85rem]'>1</span>
                                        <button>+</button>
                                    </div>
                                </div>

                                <p className='text-[0.85rem] opacity-70 mb-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quisquam tempore magni aliquam dolor quis reprehenderit voluptatibus recusandae laboriosam corporis corrupti culpa aspernatur optio necessitatibus veniam similique harum molestiae saepe.
                                </p>

                                <div className="flex items-center justify-between">
                                    <span>{menu.price}</span>
                                    <span className='btn cursor-pointer p-3'>Add to cart</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Menu