import { useState } from 'react';
import { motion } from 'framer-motion';
function Navegacao() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex bg-[#050E21] justify-between text-white px-4  py-4 fixed top-0 left-0 right-0 shadow z-11">
      <div className="hidden md:flex flex items-center gap-2">
        <a href="#home" className="inline-flex items-center">
          <div className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300">
            <i className="fas fa-shield-alt text-[#D4AF37]"></i>
            <p>VA CONSULTORIA</p>
          </div>
        </a>
      </div>
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="flex items-center gap-2 md:hidden z-20"
      >
        <i className="fas fa-bars" aria-hidden="true"></i>
        <span className="sr-only">Abrir menu</span>
      </button>

      <ul className="hidden md:flex p-4 gap-8 items-center">

          <li><a href="#home" className='hover:text-[#A67314]'>Home</a></li>
          <li><a href="#about" className='hover:text-[#A67314]'>Sobre</a></li>
          <li> <a href="#services" className='hover:text-[#A67314]'>Serviços</a> </li>
          <li><a href="#contact" className='hover:text-[#A67314]'>Contato</a></li>
          <li><a href="#contact" className='hover:text-[#A67314]'>Trabalhe conosco</a></li>

      </ul>

      <ul
        id="mobile-menu"
        className={`fixed right-0 top-15 w-full bg-gray-800 border-b flex flex-col gap-3 p-3 italic text-xl transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <li><a href="#home" className=" font-semibold text-sm hover:text-[#D4AF37]" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" className="font-semibold text-sm hover:text-[#D4AF37]" onClick={toggleMenu}>Sobre</a></li>
        <li><a href="#services" className="font-semibold text-sm hover:text-[#D4AF37]" onClick={toggleMenu}>Serviços</a></li>
        <li><a href="#contact" className="font-semibold text-sm hover:text-[#D4AF37]" onClick={toggleMenu}>Contato</a></li>
        <li><a href="#contact" className="font-semibold text-sm hover:text-[#D4AF37]" onClick={toggleMenu}>Trabalhe conosco</a></li>
      </ul>

      <a href="#contact" className="bg-blue-500 text-[12px] hover:text-[#D4AF37] text-white p-2 md:p-2 rounded inline-flex items-center h-fit">
            Fale com um Especialista <motion.div animate={{   x: [0, 4, 0]  }}  transition={{   duration: 1,    repeat: Infinity,   ease: "easeInOut" }} className="text-sm">   <i className="fas fa-arrow-right ml-2"> </i></motion.div>
      </a>
      
    </nav>
  );
}

export default Navegacao;