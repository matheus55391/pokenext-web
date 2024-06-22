'use client';
import { FaBars } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <nav className="container mx-auto p-6 flex justify-between items-center">
        <div className="text-2xl font-bold">POKENEXT</div>

        <div className="md:hidden">
          <button>
            <FaBars size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
