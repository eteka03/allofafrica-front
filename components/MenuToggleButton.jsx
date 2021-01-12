import { Box } from '@chakra-ui/react'
import {GiHamburger } from '@react-icons/all-files/gi/GiHamburger'
import {GrClose} from '@react-icons/all-files/gr/GrClose'
import {FaWindowClose} from '@react-icons/all-files/fa/FaWindowClose'
import React from 'react'

const MenuToggleButton = ({isOpen , toggle}) => {
    return (
        <Box display={{base: "block" ,  md:"none"}} onClick={toggle}>
            {isOpen ?  <img src="https://img.icons8.com/ios/50/000000/multiply.png" alt="Close" /> : <img src="https://img.icons8.com/metro/26/000000/menu.png" alt="Menu" />}
        </Box>
    )
}

export default MenuToggleButton

