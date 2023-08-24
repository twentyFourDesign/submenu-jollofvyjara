import React from 'react'
import './style.css'
import image from '../../image/Jollof by Jara 1.png'
import { BsInstagram } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false)
    return (
        <div className='main-nav'>
            <div className='nav-container'>

                <div className='img-container'>
                    <img src={image} alt="" />
                </div>

                <div className='tel'>
                    <p>Tel: +234 (0) 808 0610 290 / bookings@jollofbyjara.com</p>
                </div>

                <div className='links'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Food</p>
                    <p>Drinks</p>
                    <p>Children</p>
                    <p>Booking</p>
                    <p>Contact</p>
                    <BsInstagram className='insta' />
                    <AiFillMessage className='whatsapp' />
                </div>

                <GiHamburgerMenu className='menu-burger' onClick={() => setshowMenu(!showMenu)} />

            </div>
            <hr />

            {
                showMenu ?
                    <div className='reponsive'>
                        <div>
                            <div className='tel-res'>
                                <p>Tel: +234 (0) 808 0610 290 / bookings@jollofbyjara.com</p>
                            </div>

                            <div className='links-res'>
                                <p>Home</p>
                                <p>About</p>
                                <p>Food</p>
                                <p>Drinks</p>
                                <p>Children</p>
                                <p>Booking</p>
                                <p>Contact</p>
                                <BsInstagram className='insta-res' />
                                <AiFillMessage className='whatsapp-res' />
                            </div>
                        </div>
                    </div>
                    : ""
            }
        </div>
    )
}

export default Navbar