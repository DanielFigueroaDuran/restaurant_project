import {createContext, useState} from 'react'

export const Restaurant= createContext();

const Context = ({children}) => {
    const [dishMenu, setDishMenu] = useState([])

  return (
    <Restaurant.Provider value={{dishMenu, setDishMenu}}>
        {children}
    </Restaurant.Provider>

  )
}

export default Context