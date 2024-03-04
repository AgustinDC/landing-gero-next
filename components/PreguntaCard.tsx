"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function PreguntaCard() {
  return (
    <div>
      <PinContainer
        title="Nos alineamos a las necesidades de tu negocio y nos transformamos en tu equipo. Vas a sentir que somos parte de tu empresa."  
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          {/* <h3 className="max-w-xs  !m-0 font-bold  text-base text-slate-100">
          EQUIPO COMPROMETIDO?
          </h3> */}
          <div className="text-base !m-0 !p-0 font-normal">
            {/* <span className="text-slate-500 ">
            hola
            </span> */}
          </div>
          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
          <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </PinContainer>
    </div>
  );
}