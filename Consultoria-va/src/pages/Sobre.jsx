import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function AnimatedMetric({ value, suffix, label, delay = 0, start = false }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start) {
      setDisplayValue(0);
      return;
    }

    let animationFrame;
    const duration = 1400;
    const startTime = Date.now() + delay;

    const updateValue = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue);
      }
    };

    animationFrame = requestAnimationFrame(updateValue);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={start ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
    >
      <motion.div
        initial={{ width: "0%" }}
        animate={start ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className="absolute inset-0 rounded-xl bg-[#F7E8CC]"
      />
      <div className="relative z-10 text-center">
        <p className="text-2xl font-bold text-[#A67314]">
          {displayValue}
          {suffix}
        </p>
        <span className="text-[10px] font-medium uppercase tracking-wide text-gray-600 md:text-[13px]">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

function Sobre() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setAnimationKey((prev) => prev + 1);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: "fas fa-laptop-code",
      title: "Excelência Técnica",
      description: "Padrões rigorosos em cada projeto, com metodologias certificadas e equipe altamente qualificada para entregar resultados de alto impacto."
    },
    {
      icon: "fas fa-cloud",
      title: "Visão Estratégica",
      description: "Vamos além da tecnologia. Entendemos o negócio do cliente para alinhar segurança com objetivos estratégicos e crescimento sustentável."
    },
    {
      icon: "fas fa-chart-line",
      title: "Integridade & Ética",
      description: "Transparência total em todos os processos. Relatórios honestos, práticas éticas e compromisso inabalável com a verdade."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Foco no Cliente",
      description: "Soluções personalizadas que respeitam a realidade de cada organização. Acompanhamento contínuo e suporte dedicado em todas as etapas."
    }
  ];

  const metrics = [
    { value: 150, suffix: "+", label: "Projetos Entregues" },
    { value: 98, suffix: "%", label: "Clientes Satisfeitos" },
    { value: 12, suffix: "+", label: "Anos de Experiência" }
  ];

  return (
    <section ref={sectionRef} id="about" className="p-10 bg-white w-[100%] scroll-mt-24 md:p-20 ">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >

        <div className="flex flex-col md:w-[70%] mb-20">

          <p className="text-sm font-serif text-[#A67314]">QUEM SOMOS</p>
          <h2 className="text-4xl font-serif mb-8">Nossos Valores</h2>
          <p className=" font-light text-lg">
            A VA Consultoria nasceu da convicção de que a segurança da informação é um pilar estratégico para qualquer organização.
            Combinamos expertise técnica com visão de negócio para proteger ativos, garantir conformidade e impulsionar a confiança digital.
          </p>

        </div>

        <div className=" flex  mb-8 rounded-lg flex-col md:flex-row  w-[100%] gap-10 justify-content">


          <div className="">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">

              {cards.map((card, index) => (
                <div key={index} className="p-6  rounded-lg shadow-md mb-4 gap-10 shadow-gray-500 hover:scale-95 transition-transform duration-300">

                  <i className={`${card.icon} font-bold text-[#D09945] mb-4 `}></i>

                  <h3 className="font-semibold  mb-3">{card.title}</h3>
                  <p className=" text-gray-500 text-sm">{card.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-18 grid grid-cols-1 gap-4 border-t border-gray-400 p-4 md:grid-cols-3">
              {metrics.map((metric, index) => (
                <AnimatedMetric
                  key={`${metric.label}-${animationKey}`}
                  value={metric.value}
                  suffix={metric.suffix}
                  label={metric.label}
                  delay={index * 0.3}
                  start={isVisible}
                />
              ))}
            </div>


          </div>





        </div>

      </motion.div>



    </section>
  );
}
export default Sobre;
