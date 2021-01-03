import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <Grid h="100%" boxSizing="border-box" gridGap="0px 0px" gridTemplateAreas={`"header header header header"
    "main main main main"
    "footer footer footer footer"`} gridTemplateRows="100px auto auto" >
            <GridItem gridArea="header">
                <Navbar />
            </GridItem>
            <GridItem gridArea="main">
                {children}
            </GridItem>
            <GridItem gridArea="footer">
                <footer>pied de page</footer>
            </GridItem>
            
        </Grid>
    )
}

export default Layout
