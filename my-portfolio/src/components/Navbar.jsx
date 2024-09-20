import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 z-30">
      {/* Onur Asım İlhan with custom font */}
      <div className="flex flex-shrink-0 items-center great-vibes-regular text-3xl">
        Onur Asım İlhan
      </div>
      {/* Social media icons */}
      <div className="m-4 flex items-center justify-center gap-6 text-2xl">
        <a
          href="https://github.com/your-github-profile" // Add your GitHub link here
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/onurasim" // Add your LinkedIn link here
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
