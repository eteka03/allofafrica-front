import React from 'react'
import Link from 'next/link'
import {Image,CloseButton, Img} from '@chakra-ui/react'

const Header = ({toggleMenu , isOpen}) => {
    return (
       <header className="site-header">
               <Link href="/">
                    <a className="logo" ><Img maxWidth="60px" objectFit="cover" boxSize="40px" src="/images/logo_transparent.png" alt="logo" /></a>
               </Link>
                    {isOpen ? <CloseButton onClick={toggleMenu} className="menu-toggler" fontSize="22px" />: <img src="https://img.icons8.com/metro/26/000000/menu.png" onClick={toggleMenu} className="menu-toggler" alt="menu"  />}
               <ul  className={`nav-list ${isOpen && 'active'}`}>
                    <Link  href={`/services?name=restaurants`}><a className="nav-item" >restauration</a></Link>
                    <Link  href="/hotels"><a className="nav-item">hotelerie</a></Link>
                    <Link  href="/culture"><a className="nav-item">culture</a></Link>
               </ul>
           </header>
    )
}

export default Header
