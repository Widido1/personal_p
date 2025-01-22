import { BiLogoTypescript } from "react-icons/bi";
import { DiJqueryLogo } from "react-icons/di";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";

type IconProps = {
    name: string
}

export function IconTec(props:IconProps){

    const IconSwitch = (name:string) => {
        switch(name){
            case "Html":
                return(<div className="icon"><FaHtml5 />HTML</div>);
            case "Css":
                return(<div className="icon"><FaCss3 />CSS</div>);
            case "Javascript":
                return(<div className="icon"><IoLogoJavascript />Javascript</div>);
            case "React":
                return(<div className="icon"><FaReact /> <h1>React</h1> </div>);
            case "Next":
                return(<div className="icon"><RiNextjsFill />NextJS</div>);
            case "Typescript":
                return(<div className="icon"><BiLogoTypescript />Typescript</div>);
            case "Tailwind":
                return(<div className="icon"><RiTailwindCssFill />Tailwind</div> );
            case "Prisma":
                return(<div className="icon"><SiPrisma />Prisma</div>);
            case "Jquery":
                return(<div className="icon"><DiJqueryLogo />JQuery</div>);
            
        }
    }

    return(
        <div>
            {IconSwitch(props.name)}
        </div>
    )
}