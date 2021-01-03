import { Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const MotionButton  = motion.custom(Button)

const CustomButton = (props) => {
    const {forme , children , bg , color , evenement , lienUrl} = props
    return (
        <MotionButton   _hover={{backgroundColor:"black"}}  textAlign="center"   color={color ? `${color}` : "white"}  bg={bg? `${bg}`: "black"} {...props}>
            {children}
        </MotionButton>
    )
}

export default CustomButton
