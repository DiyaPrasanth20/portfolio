import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs} from 'react-icons/fa'
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import googleCloudLogo from '../assets/google_cloud_logo.png'; 
import { FaGitAlt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiTensorflow } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import Neo4jLogo from '../assets/Neo4j_logo.png'; 


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
                 <SiKubernetes className="text-7xl" style={{ color: '#326CE5' }} />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <img
                    src={googleCloudLogo}
                    alt="Google Cloud Logo"
                    className="h-16 w-auto"
                    style={{ height: '70px', width: 'auto' }}

                />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMicrosoftazure className="text-7xl" style={{ color: '#008AD7' }} />
            </div> 
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < FaGitAlt className="text-7xl" style={{ color: 'FF5733' }} />
            </div> 
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className="text-7xl" style={{ color: '1B8EB7' }} />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < SiTensorflow className="text-7xl" style={{ color: 'FF9701' }} />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                < SiFlask className="text-7xl" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <img
                    src={Neo4jLogo}
                    alt="Neo4j Logo"
                    className="h-16 w-auto"
                    style={{ height: '70px', width: '70px' }}

                />
            </div>             
            
        </div>
    </div>
  )
}

export default Technologies


/*
TO DO: 

- add tailwind to icons
- make the mySQL picture bigger 
- when you hover over technologies it should tell you what it is or 
when you click on it it should tell you what it is. Some way to tell you what it is.


*/