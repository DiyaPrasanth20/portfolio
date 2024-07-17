import React from 'react'
import javaLogo from '../assets/java_logo.png'; 
import pythonLogo from '../assets/python_logo.png';
import CLogo from '../assets/C_logo.png';
import CPlusPlusLogo from '../assets/CPlusPlus_logo.png';
import CSharpLogo from '../assets/CSharp_logo.png';
import { FaGolang } from "react-icons/fa6";
import { SiR } from "react-icons/si";

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
                <img
                    src={CLogo}
                    alt="C Logo"
                    className="h-16 w-auto"
                    style={{ height: '70px', width: 'auto' }}

                />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <img
                    src={CPlusPlusLogo}
                    alt="C++ Logo"
                    className="h-16 w-auto"
                    style={{ height: '70px', width: 'auto' }}

                />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <img
                    src={CSharpLogo}
                    alt="C# Logo"
                    className="h-16 w-auto"
                    style={{ height: '70px', width: 'auto' }}

                />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < FaGolang className="text-7xl" style={{ color: '#008AD7' }} />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < SiR className="text-7xl" style={{ color: '#00009B' }} />
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

-  Shell Scripting, JavaScript, HTML/CSS


- could probably change the c icons to the react icons 


*/