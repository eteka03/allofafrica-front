import { Box, Flex, Stack } from '@chakra-ui/react';
import React , {useState} from 'react'
import Logo from './Logo';
import MenuItem from './MenuItem';
import MenuToggleButton from './MenuToggleButton'



const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false) ;
    return (
        <Flex bgColor={isOpen ? 'black' : null} as="nav" align="center" justify="space-between" wrap="wrap" w="100%" h="100%"  p={8}  >
            <Logo />
            <MenuToggleButton isOpen={isOpen}  toggle={()=>setIsOpen(!isOpen)} />

            <Box transition=".3s" display={{base: isOpen ? "block" : "none" , md:"block"}} flexBasis={{base:"100%" , md:"auto"}}>
            <Stack transition=".3s" spacing={8} align="center" justify={["center", "space-between" , "flex-end" , "flex-end"]} direction={["column" , "column" , "row" , "row"]} pt={[4, 4 , 0 , 0]}>
                <MenuItem lienUrl="/services">Services</MenuItem>
                <MenuItem lienUrl="/contact ">Contact</MenuItem>
                <MenuItem lienUrl="/apropos ">À Propos</MenuItem>
            </Stack>
            </Box>
        </Flex>
    )
}

export default Navbar
