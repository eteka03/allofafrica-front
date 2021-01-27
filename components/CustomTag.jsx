import React from 'react'
import {Tag ,TagLeftIcon, TagCloseButton , TagLabel} from '@chakra-ui/react'
import { AddIcon } from "@chakra-ui/icons";
const CustomTag = ({isSelected ,name , handleTag}) => {
    
    return (
        <Tag bgColor={isSelected && "#fff000"} onClick={() => handleTag(name)}>
                        
            {isSelected ? <TagCloseButton mr={2} /> : <TagLeftIcon boxSize="12px" as={AddIcon} />}
            <TagLabel>{name}</TagLabel>
        </Tag>
    )
}

export default CustomTag
