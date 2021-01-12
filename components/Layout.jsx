
import React, { useState } from 'react'
import Header from './Header'
import Main from './Main'


const Layout = ({children}) => {
    const [isOpen , setIsOpen] = useState(false)
    const toggleMenu = ()=>{setIsOpen(!isOpen) ; console.log("marche")}
    return (
        <div className="site-layout">
           <Header toggleMenu={toggleMenu} isOpen={isOpen}/>
                <Main>
                    {children}
                </Main>
            <footer className="site-footer">
                pied de page
            </footer>
        </div>
    )
}

export default Layout
