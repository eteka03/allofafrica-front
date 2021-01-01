import { Box } from '@chakra-ui/react'
import {GiHamburger } from '@react-icons/all-files/gi/GiHamburger'
import {GrClose} from '@react-icons/all-files/gr/GrClose'
import {FaWindowClose} from '@react-icons/all-files/fa/FaWindowClose'
import React from 'react'

const MenuToggleButton = ({isOpen , toggle}) => {
    return (
        <Box display={{base: "block" ,  md:"none"}} onClick={toggle}>
            {isOpen ?  <FaWindowClose color="white" fontSize="22px"/> : <GiHamburger color="white" fontSize="22px"/>}
        </Box>
    )
}

export default MenuToggleButton

