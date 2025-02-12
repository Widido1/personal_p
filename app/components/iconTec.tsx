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
                return(<div className="icon p-[6px] text-xs min-[402px]:text-sm min-[902px]:p-[10px]"><FaHtml5 />HTML</div>);
            case "Css":
                return(<div className="icon p-[6px] text-xs min-[402px]:text-sm min-[902px]:p-[10px]"><FaCss3 />CSS</div>);
            case "Javascript":
                return(<div className="icon p-[6px] text-xs min-[402px]:text-sm min-[902px]:p-[10px]"><IoLogoJavascript />Javascript</div>);
            case "React":
                return(<div className="icon p-[6px] text-xs min-[402px]:text-sm min-[902px]:p-[10px]"><FaReact /> <h1>React</h1> </div>);
            case "Next":
                return(<div className="icon p-[6px] text-xs min-[402px]:text-sm min-[902px]:p-[10px]"><RiNextjsFill />NextJS</div>);
            case "Typescript":
                return(<div className="icon p-[6px] text-xs min-[402px]:text-sm min-[902px]:p-[10px]"><BiLogoTypescript />Typescript</div>);
            case "Tailwind":
                return(<div className="icon p-[6px] text-xs min-[402px]:text-sm min-[902px]:p-[10px]"><RiTailwindCssFill />Tailwind</div> );
            case "Prisma":
                return(<div className="icon p-[6px] text-xs min-[402px]:text-sm min-[902px]:p-[10px]"><SiPrisma />Prisma</div>);
            case "Jquery":
                return(<div className="icon p-[6px] text-xs min-[402px]:text-sm min-[902px]:p-[10px]"><DiJqueryLogo />JQuery</div>);
            
        }
    }

    return(
        <div>
            {IconSwitch(props.name)}
        </div>
    )
}