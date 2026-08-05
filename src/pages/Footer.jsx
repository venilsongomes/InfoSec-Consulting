import React  from "react";

function Footer() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="text-white bg-[#050E21] scroll-mt-24">
        
   <div className="flex flex-col md:flex-row justify-content gap-10  rounded-lg  p-10 text-white font-sarif mt-10"> 

      <div className=" justify-content mb-8  gap-4 md:p-6 text-white font-sarif"> 
      <p className="text-3xl text-white font-bold mb-5"> <i className="fas fa-shield-alt  text-[#A67314]"></i> VA Consultoria</p>

      <p className="font-serif text-sm text-white">Especialistas em segurança da informação e auditoria de TI. Proteja sua organização com quem entende do assunto.</p>

        <div className="flex flex-col gap-2 mt-4"> 
            <p className=" text-sm text-gray-300"><i className="fas fa-envelope text-[#A67314] mr-2"></i>  <a></a>contato@vaconsultoria.com.br  </p>
            <p className=" text-sm text-gray-300"><i className="fas fa-phone text-[#A67314] mr-2 "></i> (11) 1234-5678</p>
            <p className=" text-sm text-gray-300"><i className="fas fa-map-marker-alt  text-[#A67314] mr-2"></i>  Leste Universitário - 200 Goiânia</p>

            <div className="flex gap-4 mt-4">

            <p className="flex justify-content font-serif text-xl "><i className="fa-brands fa-linkedin-in text-gray-400 m-1 hover:text-[#A67314] p-3 border border-gray-600 rounded-[100%] cursor-pointer"></i></p>
            <p className="flex justify-content font-serif text-xl "><i className="fa-brands fa-twitter text-gray-400 m-1 hover:text-[#A67314] p-3 border border-gray-600 rounded-[100%] cursor-pointer"></i></p>
            <p className="flex justify-content font-serif text-xl "><i className="fa-brands fa-instagram text-gray-400 m-1 hover:text-[#A67314] p-3  border border-gray-600 rounded-[100%]  cursor-pointer"></i></p>
            
            
            </div>
        </div>

        </div>

             
            <form action="" className="flex flex-col text-xl gap-2 md:w-1/2 border p-10 rounded-lg bg-[#0E1529] text-white font-sarif "> 

             <p className="font-bold mb-6  text-center md:text-left ">Entre em contato conosco</p>
             


             <div className="flex flex-col gap-6">  
          
             <input type="text" placeholder="Nome" className="p-2 rounded-lg  border text-gray-200 text-[15px] font-serif hover:border-[#A67314]" required/>
             <input type="email" placeholder="Email" className="p-2 rounded-lg   border text-gray-200 text-[15px] font-serif hover:border-[#A67314]" required/>
         
             <input type="text" placeholder="Empresa" className="p-2 rounded-lg  border text-gray-200 text-[15px] font-serif hover:border-[#A67314] " required/>
             <textarea placeholder="Desafio de Negócio" className="p-2 rounded-lg  border text-gray-200 text-[15px] font-serif hover:border-[#A67314] " required></textarea>
             <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg  hover:bg-[#A67314] w-full text-gray-200 text-[15px] font-serif cursor-pointer ">Enviar</button>
               </div>
               
            </form>
           

    </div>
        
         <footer className=" flex md:flex-row flex-col   md:justify-between    border-t border-gray-700 text-white font-sarif p-6 ">

          <div className="flex  justify-content justify-center gap-4 text-[15px] font-serif "> 

          <a href="#home" className=" text-sm text-gray-400 hover:text-[#A67314]">Site</a>
          <a href="#services" className=" text-sm text-gray-400 h hover:text-[#A67314]">Serviços</a>
          <a href="#about" className=" text-sm text-gray-400  hover:text-[#A67314]">Empresa</a>
          <a href="#contact" className=" text-sm text-gray-400  hover:text-[#A67314]">Contato</a>
           </div>
           <p className="flex justify-center text-sm text-gray-400 mt-2">&copy; 2026 VA Consultoria. Todos os direitos reservados.</p>
         </footer>

    </section>
  );
}
export default Footer;