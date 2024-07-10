import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs} from 'react-icons/fa'
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className= "my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < FaNodeJs className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < FaDocker className="text-7xl text-cyan-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < SiKubernetes className="text-7xl text-blue-#326CE5"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < SiGooglecloud className="text-7xl text-yellow-500"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies


/*
TO DO: 
- kubernetes icon color should be the hex code color
- google cloud icon color is diferent (3 diff colors at once) 

*/