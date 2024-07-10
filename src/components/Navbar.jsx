import React from 'react'
import logo from "../assets/krlogo.jpg"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import  { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaTwitter />
        <FaInstagram />
    </div>
  </nav>
}

export default Navbar 


/*
TO DO:
- find another logo or none at all (need to add stuff that will scroll to relevant pages)
- add links to icons 
*/