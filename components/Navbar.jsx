import { Box, Flex, Stack } from '@chakra-ui/react';
import React , {useState} from 'react'
import Logo from './Logo';
import MenuItem from './MenuItem';
import MenuToggleButton from './MenuToggleButton'



const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false) ;
    return (
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" h="100%"  p={8} bg={"black"} color={"white"}>
            <Logo />
            <MenuToggleButton isOpen={isOpen}  toggle={()=>setIsOpen(!isOpen)} />

            <Box display={{base: isOpen ? "block" : "none" , md:"block"}} flexBasis={{base:"100%" , md:"auto"}}>
            <Stack spacing={8} align="center" justify={["center", "space-between" , "flex-end" , "flex-end"]} direction={["column" , "row" , "row" , "row"]} pt={[4, 4 , 0 , 0]}>
                <MenuItem lienUrl="/services">Services</MenuItem>
                <MenuItem lienUrl="/contact ">Contact</MenuItem>
                <MenuItem lienUrl="/apropos ">À Propos</MenuItem>
            </Stack>
            </Box>
        </Flex>
    )
}

export default Navbar
