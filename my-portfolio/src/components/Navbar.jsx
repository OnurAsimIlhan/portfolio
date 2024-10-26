import { FaLinkedin, FaGithub } from "react-icons/fa";
import cv from '../assets/cv.png';
const Navbar = () => {
  return (
    <nav className="flex relative items-center justify-between py-6 z-30">
      {/* Onur Asım İlhan with custom font */}
      <div className="flex flex-shrink-0 items-center great-vibes-regular  text-3xl ml-1">
        Onur Asım İlhan
      </div>
      {/* Social media icons */}
      <div className="m-4 flex items-center justify-center gap-3 sm:gap-6 text-3xl sm:text-4xl">
        <a
          href="https://github.com/OnurAsimIlhan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/onurasim"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <FaLinkedin />
          
        </a>
        <a
          href="https://docs.google.com/document/d/18mjs5uIBCHGbyUDCLIlloXNRgpUtpGhUscL0ZPkXzNw/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={cv} alt="cv" className="w-8 h-8"/>
          
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
