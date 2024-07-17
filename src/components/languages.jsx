import React from 'react'
import javaLogo from '../assets/java_logo.png'; 
import pythonLogo from '../assets/python_logo.png';
import { SiC } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { SiR } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";


const Languages = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className= "my-20 text-center text-4xl">Languages</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <img
                    src={javaLogo}
                    alt="Java Logo"
                    className="h-16 w-auto"
                    style={{ height: '70px', width: 'auto' }}

                />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <img
                    src={pythonLogo}
                    alt="Python Logo"
                    className="h-16 w-auto"
                    style={{ height: '70px', width: 'auto' }}

                />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < SiC className="text-7xl" style={{ color: '#008AD7' }} />
        </div>

        
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < SiCplusplus className="text-7xl" style={{ color: '#008AD7' }} />
        </div>


        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < SiCsharp className="text-7xl" style={{ color: '841AEC' }} />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < FaGolang className="text-7xl" style={{ color: '#008AD7' }} />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < SiR className="text-7xl" style={{ color: '#00009B' }} />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < TbBrandJavascript className="text-7xl" style={{ color: '#FFAA33' }} />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < FaCss3Alt className="text-7xl" style={{ color: '#1BB5EB' }} />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < FaHtml5 className="text-7xl" style={{ color: 'EC551A' }} />
        </div>
                    
            
        </div>
    </div>
  )
}

export default Languages


/*
TO DO: 
- when you hover over languages it should tell you what it is or 
when you click on it it should tell you what it is. Some way to tell you what it is.

- On big screens only want 4/5 in a line 


*/