import { Pipe, PipeTransform } from '@angular/core';
import { Tiquet } from '../models/tiquet'

@Pipe({
  name: 'filtrotiquete'
})
export class FiltrotiquetePipe implements PipeTransform {

  transform(tiquete : Tiquet[], filter: string): Tiquet[] {
    if (filter) {
			return tiquete.filter((p) => {
				return (
					p.persona.nombre.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
					p.ruta.nombre.toLowerCase().indexOf(filter.toLowerCase()) !== -1 
					
				);
			});
		}
		return tiquete;
  }

}


