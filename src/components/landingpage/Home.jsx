import React from 'react'
import pasta from "../../assets/icons/pasta.png";
import { FaArrowRight } from "react-icons/fa";
import { heroIcons } from "../../utils/data";
import { Link } from 'react-router-dom';
const Home = () => {
    //  Sumérgete en un ambiente acogedor y sofisticado donde cada plato te transportará a un mundo de 
    // sabores y sensaciones inigualables. Nuestro talentoso equipo de chefs expertos se esfuerza por 
    // ofrecerte una gastronomía innovadora y de alta calidad, utilizando ingredientes frescos y de 
    // temporada para crear auténticas obras maestras culinarias. Ya sea que desees disfrutar de una cena
    //  romántica, celebrar una ocasión especial o simplemente deleitarte con una comida deliciosa, nuestro
    //   restaurante es el lugar perfecto para satisfacer tus deseos gastronómicos. ¡Ven y déjanos consentirte
    //    con nuestra atención impecable y una carta de vinos seleccionada cuidadosamente para complementar tu
    //     experiencia única!
    return (
        <div className='section flex items-center xl:justify-center justify-start flex-wrap p-10'>
            <div className='flex flex-col items-start gap-10'>
                <div className='flex flex-col items-center w-40'>
                    <h2 className='sm:text-[2.5rem] text-[1.8rem] font-bold'>Exquisito </h2>
                    <p className='text-sm text-center'>te transportará a un mundo de
                        sabores y sensaciones.
                    </p>
                </div>
                <div className='btn'>
                    <Link to="#">View Menu</Link>
                    <FaArrowRight />
                </div>
                <div className='flex md:gap-6 gap-2'>
                    {heroIcons.map((icon, index) => {
                        return (
                            <div
                                className='flex items-center justify-center 
              bg-black w-12 h-12 text-white md:text-3xl text-xl rounded-md '
                                key={index}
                            >
                                {icon}
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div className='min-w[200px] md:w-[600px]'>
                <img src={pasta} alt="" />
            </div>
        </div>
    )
}

export default Home