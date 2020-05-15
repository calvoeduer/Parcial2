import { Ruta } from "./ruta";
import { Persona } from "./persona";

export class Tiquet {
    id:string;
    personaId:string;
    rutaId:number;
    ruta:Ruta;
    persona:Persona;
}
