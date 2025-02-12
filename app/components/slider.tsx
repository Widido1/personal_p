"use client"

import { useState } from "react";
import Proyect01 from "./proyect01";
import Proyect02 from "./proyect02";
import Proyect03 from "./proyect03";
import Proyect04 from "./proyect04";


function makeArr(){
    const arr = [<div key={1}><Proyect01 /></div>, <div key={2}><Proyect02 /></div>, <div key={3}><Proyect03 /></div>, <div key={4}><Proyect04 /></div>]
    return arr
}

export default function Slider(){
    const cArray = makeArr(); //creamos el arreglo de componentes usando el arreglo de las props
    const [mI, setMI] = useState(0); //creamos el indice maestro del slider

    const detI = (I: number) => {
        //esta funcion garantiza que el IndiceMaestro (mI) no se pase de los limites del arreglo
        let i = I; 
        const L = cArray.length;
        if(i >= L){i = i - L};
        if(i < 0){i = L + i}; 
        return(i);
    }

    const NextF = () => {
        setMI(detI(mI + 1)); // le suma 3 a mI y utiliza detI para determinar que mI no se alga de los limites del arreglo
        //al modificar el mI cambian todos los componentes que se muestran en el slider
    }

    const PrevF = () => {
        setMI(detI(mI - 1));// le resta 3 a mI y utiliza detI para determinar que mI no se alga de los limites del arreglo
    }


    return(
        <div className="Slider mx-auto mt-2 gap-[20px] w-[326px] min-[402px]:w-[400px] min-[652px]:w-[650px] min-[902px]:w-[900px] min-[1202px]:w-[1200px] px-4 pb-2">         
            <div className="ButtonBox grid grid-flow-col place-content-center gap-4 pb-8">
                <button className="SliderBtn text-stone-950 bg-[--color2] rounded-md text-xl min-[1202px]:text-3xl h-[30px] min-[1202px]:h-[40px] px-10 w-[100px] min-[400px]:w-[180px] min-[650px]:w-[275px] min-[902px]:w-[350px] min-[1202px]:w-[500px]" onClick={PrevF}>{"<"}</button>
                <button className="SliderBtn text-stone-950 bg-[--color2] rounded-md text-xl min-[1202px]:text-3xl h-[30px] min-[1202px]:h-[40px] px-10 w-[100px] min-[400px]:w-[180px] min-[650px]:w-[275px] min-[902px]:w-[350px] min-[1202px]:w-[500px]" onClick={NextF}>{">"}</button>
            </div>
            <div className="SliderWrapper grid grid-flow-col">
                <div>{cArray[detI(mI)]}</div>
            </div>

        </div>
    ) 
}
