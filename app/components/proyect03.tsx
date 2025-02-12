"use client"
import Image from "next/image"
import Calculator from "../images/Calculator.webp"
import { IconTec } from "./iconTec"
import Link from "next/link"

export default function Proyect03(){

    return(
        <div className="grid grid-flow-row place-items-center place-content-center place-self-center gap-4 pb-8 min-[652px]:place-self-start min-[652px]:grid-flow-col min-[652px]:px-4 min-[902px]:px-8 min-[902px]:gap-8">
            <div className="grid place-content-center place-items-center place-self-center align-middle mx-auto">
                <Image
                    src={Calculator}
                    alt="buzo selección"
                    width={400}
                    height={400}
                className="rounded-[20%] w-[200px] h-[200px] min-[902px]:w-[250px] min-[902px]:h-[250px]" //tamaño responsivo
                />
            </div>
            <div className="grid grid-flow-row place-self-center min-[652px]:place-self-start min-[652px]:place-content-start gap-2">
                <div className="grid grid-flow-row place-content-center place-items-center place-self-center
                 min-[652px]:place-content-start min-[652px]:place-items-start min-[652px]:place-self-start">
                    <Link href="https://calcu12.netlify.app/"><h1 className="ProyectT text-2xl min-[400px]:text-3xl py-2">Calculator</h1></Link>
                    <p className="theme2 w-[300px] text-center min-[402px]:w-[325px] min-[652px]:text-start min-[652px]:text-sm min-[652px]:w-[350px] min-[902px]:text-lg min-[902px]:w-[500px] min-[1202px]:w-[800px]">
                    A simple calculator made in React.

                    </p>
                </div>
                <div className="grid w-[70%] grid-flow-row place-self-center place-items-center min-[652px]:place-self-start min-[652px]:place-content-start min-[652px]:grid-flow-col gap-2 pt-2">
                    <div className="grid grid-flow-col gap-2">
                        {<IconTec name="Html"/>}
                        {<IconTec name="Css"/>}
                        {<IconTec name="Javascript"/>}
                    </div>
                    <div className="grid grid-flow-col gap-2">
                        {<IconTec name="React"/>}
                        {<IconTec name="Jquery"/>}
                    </div>
                </div>

            </div>
        </div>
    )

}