import { Ruta } from "./ruta";
import { Persona } from "./persona";

export class Tiquet {
    id:string;
    personaId:string;
    rutaId:string;
    ruta:Ruta;
    persona:Persona;
}
