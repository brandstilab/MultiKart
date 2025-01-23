import { useState } from 'react'
import MenuContext from '.'

const MenuProvider = (props) => {
    const [menuState, setMenuState] = useState([])
    return (
        <MenuContext.Provider value={{ ...props, menuState, setMenuState }}>
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuProvider