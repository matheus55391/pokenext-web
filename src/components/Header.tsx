"use client";
import { FaBars, FaGithub } from "react-icons/fa";
import { MdOutlineCatchingPokemon } from "react-icons/md";

const Header: React.FC = () => {
  return (
    <header className="bg-rose-500">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex flex-row font-bold text-3xl items-center">
          <div className="rotate-180">
            <MdOutlineCatchingPokemon color="white" size={32} />
          </div>
          <span className="text-white pl-2">POKE</span>
          <span className="text-slate-800">NEXT</span>
        </div>

          <a 
            href="https://github.com/matheus55391/Pokenext" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white flex flex-row space-x-2 bg-slate-800 p-2 px-4 rounded-lg items-center"
          >
            <FaGithub size={20} />
            <span className="text-white font-medium">Project</span>
          </a>
          <button className="hidden">
            <FaBars size={24} />
          </button>
      </nav>
    </header>
  );
};

export default Header;
