import React from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { useState } from 'react'

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    //Function to toggle Navbar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    //Function to close Navbar
    const closeNavbar = () => {
        setActive('navBar')
    }
    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <MdOutlineTravelExplore className="icon" /> <h1>Travel.</h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="navBarList flex">

                        <li className="navBarItem">
                            <a href="#" className="navBarLink">Home</a>
                        </li>

                        <li className="navBarItem">
                            <a href="#" className="navBarLink">Packages</a>
                        </li>

                        <li className="navBarItem">
                            <a href="#" className="navBarLink">Shop</a>
                        </li>

                        <li className="navBarItem">
                            <a href="#" className="navBarLink">About</a>
                        </li>

                        <li className="navBarItem">
                            <a href="#" className="navBarLink">Pages</a>
                        </li>

                        <li className="navBarItem">
                            <a href="#" className="navBarLink">News</a>
                        </li>

                        <li className="navBarItem">
                            <a href="#" className="navBarLink">Contact</a>
                        </li>

                        <button className="btn">
                            <a href="#">BOOK NOW</a>
                        </button>

                    </ul>

                    <div onClick={closeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon" />
                    </div>

                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>

    )
}

export default Navbar