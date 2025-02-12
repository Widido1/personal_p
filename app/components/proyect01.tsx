"use client"
import Image from "next/image"
import Cozy from "../images/Cozy.webp"
import { IconTec } from "./iconTec"
import Link from "next/link"



export default function Proyect01(){

    return(
        <div className="grid grid-flow-row place-items-center place-content-center place-self-center gap-4 pb-8 min-[652px]:place-self-start min-[652px]:grid-flow-col min-[652px]:px-4 min-[902px]:px-8 min-[902px]:gap-8">
            <div className="grid place-content-center place-items-center place-self-center align-middle mx-auto">
                <Image
                    src={Cozy}
                    alt="buzo selección"
                    width={400}
                    height={400}
                className="rounded-[20%] w-[200px] h-[200px] min-[902px]:w-[250px] min-[902px]:h-[250px]" //tamaño responsivo
                />
            </div>
            <div className="grid grid-flow-row place-self-center min-[652px]:place-self-start min-[652px]:place-content-start gap-2">
                <div className="grid grid-flow-row place-content-center place-items-center place-self-center
                 min-[652px]:place-content-start min-[652px]:place-items-start min-[652px]:place-self-start">
                    <Link href="https://clothstore-aw6p.onrender.com/"><h1 className="ProyectT text-2xl min-[400px]:text-3xl py-2">Cozyboyz</h1></Link>
                    <p className="theme2 w-[300px] text-center min-[402px]:w-[325px] min-[652px]:text-start min-[652px]:text-sm min-[652px]:w-[350px] min-[902px]:text-lg min-[902px]:w-[500px] min-[1202px]:w-[800px]">
                        CozyBoyz is an E-Commerce cloth store that was made in NextJS using React, Prisma and Tailwind.<br/>
                        It has different functionalities:<br/>
                        -Authentication system for the users.<br/>
                        -Admin accounts can add, edit and delete products of the store.<br/>
                        -User accounts can search for products and buy them with stripe.<br/>

                    </p>
                </div>
                <div className="grid w-[70%] grid-flow-row place-content-center place-self-center place-items-center min-[652px]:place-self-start min-[652px]:place-content-start min-[652px]:grid-flow-col gap-2 pt-2">
                    <div className="grid grid-flow-col gap-2">
                        {<IconTec name="Javascript"/>}
                        {<IconTec name="React"/>}
                        {<IconTec name="Next"/>}
                    </div>
                    <div className="grid grid-flow-col gap-2">
                        {<IconTec name="Tailwind"/>}
                        {<IconTec name="Prisma"/>}
                    </div>



                </div>
            </div>
        </div>
    )

}

                        /*CozyBoyz is an E-Commerce cloth store that was made in NextJS using React, Prisma and Tailwind.<br/>
                        It has different functionalities:<br/>
                        -Authentication system for the users.<br/>
                        -Admin accounts can add, edit and delete products of the store.<br/>
                        -User accounts can search for products and buy them with stripe.<br/>*/