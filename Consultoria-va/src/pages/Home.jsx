import React from "react";
import fundo from "../assets/background.jfif";
import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      className="relative mt-17 md:py-10 px-15 p-2 w-[100%] fade-in ">
      
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${fundo})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", opacity: 0.5 }}></div>
      
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>

       
      <div className="text-[#D09945] text-[12px] mb-4 rounded-[15px] border border-[#A67314] text-center bg-gray-800 md:mb-10 mt-10 py-2 px-4 md:w-[20%] relative z-10">
        <i className="fas fa-shield-alt"></i> SEGURANÇA & TECNOLOGIA
      </div>
    
      <div className="flex flex-col items-center text-center justify-center justify-content relative z-10">
        <h2 className=" invisible md:visible md:text-5xl mx-text-center relative text-white font-serif">
          Trasformando Complexidade <br></br>  em  <br></br> resultados eficientes
        </h2>

        <p className=" invisible md:visible text-xl text-gray-300 font-serif text-center mt-4">
          Consultoria, Serviços de Tecnologia, governança de TI <br></br>e
          soluções digitais para empresas.
</p>

          <p class="visible md:invisible text-white font-serif text-center text-3xl mb-50">
            Trasformando Complexidade <br></br>em  <br></br>resultados eficientes
          </p>
        
        <div className="flex space-x-4 md:mt-0 mt-4">
          <a href="#contact" className="bg-blue-500 text-[15px] text-white py-2 px-4 rounded hover:bg-blue-700 inline-block">
            Agendar diagnóstico
          </a>
          <a href="#services" className="bg-gray-500 mx-text-[15px] text-white py-2 px-4 rounded hover:bg-gray-700 inline-block">
            Conhecer serviços
          </a>
        </div>
       
      </div> 
      <div className="border-t border-gray-600 my-8 text-gray-300 text-center text-[15px] flex mt-30 md:mt-10 gap-2 md:gap-5 items-center p-4 justify-content font-serif relative z-10">
          <p className="">
            <i className="fas fa-shield-alt text-[#D09945] mr-2"></i> ISO 27001
          </p>
          <p className="">
            <i className="fas fa-check-circle text-[#D09945]  mr-2"></i> LGPD
            Compliance
          </p>
          <p className="">
            <i className="fas fa-check-circle text-[#D09945] mr-2"></i>NIST
            Framework
          </p>
        </div>
        </motion.div>
        
    </section>
  );
}

export default Home;
