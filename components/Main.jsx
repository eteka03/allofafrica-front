import { Box } from '@chakra-ui/react'
import React from 'react'

const Main = ({children}) => {
    return (
        <main className="site-main">
            {children}
        </main>
    )
}

export default Main
