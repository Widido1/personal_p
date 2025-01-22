"use client"
import Image from "next/image"
import Cozy01 from "../images/Cozy01.png"
import { IconTec } from "./iconTec"

export default function ProyectCard(){

    return(
        <div className="grid grid-flow-col gap-8 pb-8 place-content-start">
            <div>
                <Image
                    src={Cozy01}
                    alt="buzo selección"
                    width={400}
                    height={400}
                className="rounded-[20%] w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] xl:w-[250px] xl:h-[250px]" //tamaño responsivo
                />
            </div>
            <div className="grid grid-flow-row place-self-start">
                <div>
                    <h1 className="text-2xl py-2">CozyBoyz</h1>
                    <p className="theme2 h-[50px] lg:h-[75px] xl:h-[125px]">
                        CozyBoyz is an E-Commerce cloth store that was made in NextJS using React, Prisma and Tailwind.<br/>
                        It has different functionalities:<br/>
                        -Authentication system for the users.<br/>
                        -Admin accounts can add, edit and delete products of the store.<br/>
                        -User accounts can search for products and buy them with stripe.<br/>

                    </p>
                </div>
                <div className="grid grid-flow-col gap-2 pt-2 justify-items-start w-[70%]">
                    {<IconTec name="React"/>}
                    {<IconTec name="Next"/>}
                    {<IconTec name="Prisma"/>}
                    {<IconTec name="Tailwind"/>}

                </div>
            </div>

        </div>
    )

}
