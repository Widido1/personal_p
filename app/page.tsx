import Image from "next/image";
import Perfil from "./images/Perfil.png";
import Link from "next/link";
import ProyectCard from "./components/proyectCard";
import { IconTec } from "./components/iconTec";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Home() {
  
  
  
  return (
    <div>
      <div className="theme1 grid grid-flow-col place-self-center w-[1200px] gap-12 px-8 py-4 my-4 mx-8 bg-stone-950 bg-opacity-90">
        <div className="grid grid-flow-row place-items-center place-content-center">
          <h1 className="text-8xl">Santiago Gonzalez</h1>
          <div>
            <div className="theme3 text-7xl py-4">Front-End Developer</div>
              <div className="grid grid-flow-col gap-2 justify-items-center align-middle">
                {<IconTec name="Html"/>}
                {<IconTec name="Css"/>}
                {<IconTec name="Javascript"/>}
                {<IconTec name="React"/>}
                {<IconTec name="Next"/>}
                {<IconTec name="Typescript"/>}
                {<IconTec name="Tailwind"/>}
                {<IconTec name="Prisma"/>}
            </div>
          </div>

          
        </div>

        <div className="grid grid-flow-row place-items-center">
          <Image                         
            src={Perfil}
            alt="Imagen de perfil"
            width={400}
            height={400}
            className="rounded-full w-[250px] h-[250px]"
          />
          <div className="grid grid-flow-row gap-2 justify-items-center pt-2">
            <Link href="https://www.linkedin.com/in/santiago-gonzalez-32434b218/"> 
              <div className="LinkedIn grid grid-flow-col place-items-center rounded-md border-2 p-1 text-xl w-[300px]">
                <div className="grid grid-flow-col place-items-center"> <FaLinkedin /><h1>LinkedIn</h1> </div>
              </div>
            </Link>
            <Link href="https://github.com/Widido1">
              <div className="Github grid grid-flow-col place-items-center rounded-md border-2 p-1 text-xl w-[300px]">
                <div className="grid grid-flow-col place-items-center"><FaGithub /><h1>Github</h1></div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="theme1 grid grid-flow-row place-self-center place-items-center w-[1200px] px-4 m-4 bg-stone-950 bg-opacity-90">
        <h1 className="py-4 text-center text-3xl">Proyects:</h1>
        <ProyectCard/>
      </div>

      <div className="theme1 grid grid-flow-row place-self-center w-[1200px] px-4 m-4 bg-stone-950 bg-opacity-90">
        <h1 className="py-4 text-center text-3xl">Certifications:</h1>
        <div className="pb-4">
          <h1>
            -<Link href="https://www.freecodecamp.org/certification/Widido/responsive-web-design"> freeCodeCamp Responsive Web Design Developer Certification.</Link>
          </h1>
          <h1>
            -<Link href="https://www.freecodecamp.org/certification/Widido/javascript-algorithms-and-data-structures"> freeCodeCamp Javascript Algorithms and Data Structures Certification.</Link>
          </h1>
          <h1>
            -<Link href="https://www.facebook.com/EET322.ObispoGelabert/?locale=es_LA"> Computer Technician Certification in Escuela Tecnica N°322</Link>
          </h1>
        </div>

      </div>  
    </div>
    
    
  );
}
