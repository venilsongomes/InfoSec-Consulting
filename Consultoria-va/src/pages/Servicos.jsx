import React, { useEffect, useState } from "react";
import "../index.css";
import { motion } from "framer-motion";

const frases = ["Segurança", "Software", "Infraestrutura", "Consultoria"];

function Servicos(){
  const [textoAtual, setTextoAtual] = useState("");
  const [indiceFrase, setIndiceFrase] = useState(0);
  const [apagando, setApagando] = useState(false);

  useEffect(() => {
    const frase = frases[indiceFrase];
    const tempo = apagando ? 45 : 90;

    const timer = setTimeout(() => {
      if (!apagando) {
        if (textoAtual.length < frase.length) {
          setTextoAtual(frase.slice(0, textoAtual.length + 1));
        } else {
          setApagando(true);
        }
      } else if (textoAtual.length > 0) {
        setTextoAtual(frase.slice(0, textoAtual.length - 1));
      } else {
        setApagando(false);
        setIndiceFrase((prev) => (prev + 1) % frases.length);
      }
    }, tempo);

    return () => clearTimeout(timer);
  }, [apagando, indiceFrase, textoAtual]);

const Serviços = [
    {
      icon: "fas fa-shield-alt",
      name: "Segurança da Informação",
      description: "Implementação e gestão de políticas de segurança, controles de acesso, criptografia e monitoramento contínuo para proteger dados críticos.",
     
    },
    {
      icon: "fas fa-laptop-code",
      name: "Desenvolvimento de Software",
      description:
        "Soluções personalizadas para atender às suas necessidades específicas.",
     
    },
    {
      icon: "fas fa-search",
      name: "Auditoria de TI;",
      description:
        "Avaliação independente e abrangente da infraestrutura tecnológica, identificando gaps, riscos e oportunidades de meltyalizamento..",
     
    },
    {
      icon: "fas fa-tools",
      name: "Manutenção de Hardware;",
      description: "Manutenção preventiva e corretiva de equipamentos de informática.",
      
    },
    {
      icon: "fas fa-graduation-cap",
      name: "Compliance LGPD",
      description: "Consultoria completa para adequação à Lei Geral de Proteção de Dados, incluindo mapeamento de dados, DPIA e gestão de consentimentos.",
     
    },
    {
      icon: "fas fa-network-wired",
      name: "Infraestrutura de Rede",
      description: "Planejamento, implementação e monitoramento de redes corporativas seguras e escaláveis.",
    }
  ];
    return (
    <section id="services" className="bg-white p-10 w-full md:p-20 scroll-mt-24">
  
  <div className="flex flex-col w-full md:w-[50%] mb-20 scroll-mt-50"> 

       <p className="text-sm font-serif text-[#A67314]">O QUE FAZEMOS</p>
      <h2 className="text-4xl font-serif mb-8">
        Nossos <span className="text-[#D09945]">{textoAtual}</span> 
        <span className="ml-1 inline-block h-6 w-2 bg-[#D09945] align-middle animate-pulse" />
      </h2>
      <p className=" mb-8 justify-text">
        Oferecemos soluções completas em segurança da informação, desenvolvimento de software e consultoria técnica.
      </p>
     </div>

      <div className="flex gap-10  mb-8 rounded-lg flex-col md:flex-row  "> 

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {Serviços.map((serviço, index) => (
              <div key={index} className=" p-6  rounded-lg shadow-md mb-4 gap-10 shadow-gray-500 hover:scale-95 transition-transform duration-300 ">
                <i className={`${serviço.icon} text-[20px] text-[#D09945] mb-4`}></i>
                <h3 className=" font-semibold  mb-3 ">{serviço.name}</h3>
                <p className="text-gray-500 text-sm">{serviço.description}</p>

                <motion.button 
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.95 }} 
                     className="flex  hover:border text-sm p-2 
                                 border-[#D09945] mt-4 " 
                                 whileHover={{ scale: 1.05 }} 
                                 whileTap={{ scale: 0.95 }}>

                  Saiba Mais
                  <motion.div 
                             animate={{   x: [0, 2, 0]  }}  
                             transition={{   duration: 1,    repeat: Infinity,   ease: "easeInOut" }} 
                             className="">   <i className="fas fa-arrow-right ml-1"> </i>
                  </motion.div>
                             
                </motion.button>

              </div>
            ))}
             
          </div>  
        </div>
    </section>
  );
}
export default Servicos;
