import React from 'react'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'

const MenuItem = ({children , lienUrl,  isLast }) => {
    return (
        <Link href={`${lienUrl}`}>
            <Text fontStyle="italic" fontSize="20px" fontFamily="'Open Sans Condensed', sans-serif" display="block">
                {children}
            </Text>
        </Link>
    )
}

export default MenuItem
