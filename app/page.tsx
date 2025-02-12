"use client"
import Image from "next/image";
import PerfilF from "./images/PerfilF.webp";
import Perfil2F from "./images/Perfil2F.webp"
import Link from "next/link";
import { IconTec } from "./components/iconTec";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Slider from "./components/slider";
import { sendEmail } from "./actions/sendEmail";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  
  return (
    <div className="absolute w-full"  id="Proyects">
      <div className=" w-full mx-auto fixed">
        <div className="Nav grid grid-flow-col place-content-center place-self-center place-items-center rounded-md 
        p-2 gap-8 w-[326px] min-[402px]:w-[400px] min-[652px]:w-[650px] min-[902px]:w-[900px] min-[1202px]:w-[1200px]">
          <Link href="#About"><h1 className="NavBtn text-2xl">About Me</h1></Link>
          <Link href="#Proyects"><h1 className="NavBtn text-2xl">Proyects</h1></Link>
        </div>
      </div>

      <div className="Box theme1 grid place-self-center place-content-center mx-auto rounded-md
      py-8 my-16 w-[326px] min-[402px]:w-[400px] min-[652px]:w-[650px] min-[902px]:w-[904px] min-[1202px]:w-[1200px]">

        <div className="grid grid-flow-row place-self-center gap-4 min-[652px]:grid-flow-col min-[652px]:gap-8 min-[902px]:gap-4 px-4 pb-8">

          <div className="grid grid-flow-row place-self-center place-items-center place-content-center text-center 
          min-[652px]:place-items-start min-[652px]:w-[320px] min-[902px]:w-[550px] min-[1202px]:w-[800px]">
            <div className="grid place-content-start align-middle text-center
            min-[652px]:text-start text-3xl min-[402px]:text-5xl min-[902px]:text-6xl min-[1202px]:text-8xl">Santiago Gonzalez</div>
            <div className="grid place-content-center text-center min-[652px]:place-content-start min-[652px]:text-start">
              <div className="theme3 text-2xl min-[402px]:text-4xl min-[902px]:text-5xl min-[1202px]:text-7xl py-4">Front-End Developer</div>
              <div className="grid grid-flow-row gap-2 justify-items-center min-[652px]:justify-items-start align-middle
              min-[1202px]:justify-items-center min-[1202px]:grid-flow-col">
                <div className="grid grid-flow-col gap-2 justify-items-center align-middle">
                  {<IconTec name="Html"/>}
                  {<IconTec name="Css"/>}
                  {<IconTec name="Javascript"/>}
                  {<IconTec name="React"/>}
                </div>
                <div className="grid grid-flow-col gap-2 justify-items-center align-middle">
                  {<IconTec name="Next"/>}
                  {<IconTec name="Typescript"/>}
                  {<IconTec name="Tailwind"/>}
                  {<IconTec name="Prisma"/>}
                </div>
              </div>
            </div>          
          </div>

          <div className="grid grid-flow-row place-items-center">
            <Image                       
              src={PerfilF}
              alt="Imagen de perfil"
              width={400}
              height={400}
              className=" rounded-full h-[175px] w-[175px] min-[425px]:h-[200px] min-[425px]:w-[200px] min-[652px]:h-[200px] min-[652px]:w-[200px] min-[1202px]:h-[250px] min-[1202px]:w-[250px]"
            />           
            <div className="grid grid-flow-row gap-2 justify-items-center pt-2">
              <Link href="https://www.linkedin.com/in/santiago-gonzalez-32434b218/"> 
                <div className="LinkedIn grid grid-flow-col place-items-center rounded-md border-2
                 p-1 text-xl w-[200px] min-[425px]:w-[250px] min-[652px]:w-[200px] min-[1202px]:w-[300px]">
                  <div className="grid grid-flow-col place-items-center"> <FaLinkedin /><h1>LinkedIn</h1> </div>
                </div>
              </Link>
              <Link href="https://github.com/Widido1">
                <div className="Github grid grid-flow-col place-items-center rounded-md border-2
                 p-1 text-xl w-[200px] min-[425px]:w-[250px] min-[652px]:w-[200px] min-[1202px]:w-[300px]">
                  <div className="grid grid-flow-col place-items-center"><FaGithub /><h1>Github</h1></div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="theme1 grid grid-flow-row place-self-center place-items-center">
          <h1 className="py-4 text-center text-2xl min-[425px]:text-3xl min-[902px]:text-4xl">Proyects:</h1>
          <Slider />
        </div>
      </div>

      <div className="p-6" id="About"></div>

      {/*second section of the page */}

      <div className="Box theme1 grid grid-flow-row place-self-center place-content-center place-items-center bg-stone-950 bg-opacity-90
      m-4 p-8 gap-8 w-[326px] min-[402px]:w-[400px] min-[652px]:w-[650px] min-[902px]:w-[900px] min-[1202px]:w-[1200px]">
        <div>
          <h1 className="pb-2 text-center text-2xl min-[425px]:text-3xl min-[902px]:text-4xl">Certifications:</h1>
          <div className="grid grid-flow-row place-content-center gap-2 text-center min-[652px]:text-start">
            <h1 className="Cert theme2 text-lg min-[425px]:text-xl min-[652px]:text-2xl min-[902px]:text-3xl">
              <Link href="https://www.freecodecamp.org/certification/Widido/responsive-web-design">- freeCodeCamp Responsive Web Design Developer Certification.</Link>
            </h1>
            <h1 className="Cert theme2 text-lg min-[425px]:text-xl min-[652px]:text-2xl min-[902px]:text-3xl">
              <Link href="https://www.freecodecamp.org/certification/Widido/javascript-algorithms-and-data-structures">- freeCodeCamp Javascript Algorithms and Data Structures Certification.</Link>
            </h1>
            <h1 className="Cert theme2 text-lg min-[425px]:text-xl min-[652px]:text-2xl min-[902px]:text-3xl">
              <Link href="https://www.facebook.com/EET322.ObispoGelabert/?locale=es_LA">- Computer Technician Certification in Escuela Tecnica N°322.</Link>
            </h1>
          </div>
        </div>

        <div className="grid grid-flow-row place-content-center place-items-center place-self-center gap-4">
          
          <div className="grid grid-flow-row place-content-center place-items-center place-self-center gap-4 min-[652px]:grid-flow-col">
            <Image                         
              src={Perfil2F}
              alt="Imagen de perfil"
              width={400}
              height={400}
              className="rounded-full h-[175px] w-[175px] min-[425px]:w-[200px] min-[425px]:h-[200px] min-[1202px]:w-[250px] min-[1202px]:h-[250px]"
            />
            <div>
              <h1 className="text-center min-[650px]:text-left text-2xl min-[425px]:text-3xl min-[902px]:text-4xl">More About me:</h1>
              <p className="theme2 text-center min-[652px]:text-start min-[652px]:w-[350px] min-[902px]:text-lg min-[902px]:w-[500px]">
                My name is Santiago, i begin to code two years ago,
                before that i fix computers and teach chess.<br/>
                I really like web design and coding, it would
                be a great pleasure to work with you.<br/>
             </p>
            </div>
          </div>
        </div>


        <form className="grid place-content-center gap-2" action={async(formdata)=>{await sendEmail(formdata); router.push("/");}} >
          <h1 className="text-center text-2xl min-[425px]:text-3xl min-[902px]:text-4xl">Send me a message to:</h1>
          <h1 className="Email text-[--color2] text-center text-md min-[425px]:text-xl min-[902px]:text-2xl">sdg-1995@protonmail.com</h1>
          <h1 className="pt-4 text-center text-2xl min-[425px]:text-3xl min-[902px]:text-4xl">Or fill this form:</h1>
          <div className="grid gap-2 pb-4">
            <h1 className="theme2 text-md min-[425px]:text-xl" >Your Email: </h1>
            <input className="MessageBox rounded-md px-2 min-[652px]:w-[500px] min-[902px]:w-[600px]" name="email" type="email" required/>
            <h1 className="theme2 text-md min-[425px]:text-xl">Message: </h1>
            <textarea className="MessageBox rounded-md text-start px-2 min-[652px]:w-[500px] min-[902px]:w-[600px] h-[100px]" name="message" required/>
          </div>
          <button className="MessageBtn min-[652px]:w-[500px] min-[902px]:w-[600px] text-2xl" type="submit">Send Message</button>
        </form>

      </div>  
    </div>
    
    
  );
}
