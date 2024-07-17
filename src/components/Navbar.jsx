import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'


const Navbar = () => {

  const openResume = () => {
    window.open('https://example.com/your-resume.pdf', '_blank');
  };

  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        {/* Logo or other content */}
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      
      <a href="https://www.linkedin.com/in/diyaprasanth/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
      </a>
      <a href="https://github.com/DiyaPrasanth20" target="_blank" rel="noopener noreferrer">
          <FaGithub />
      </a>

      <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={openResume}
        >
          View Resume
      </button>

    </div>
  </nav>
}

export default Navbar 


/*
TO DO:
- fix the view resume button 
- 
*/