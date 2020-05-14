using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Travell.Models
{
    public class TiquetViewModel : TiquetInputModel
    {
        public TiquetViewModel(Tiquet tiquet)
        {
            Id = tiquet.Id;
            PersonaId = tiquet.PersonaId;
            RutaId = tiquet.RutaId;
            if (tiquet.Ruta != null)
                Ruta = new RutaViewModel(tiquet.Ruta);
            if (tiquet.Persona != null)
                Persona = new PersonaViewModel(tiquet.Persona);

        }
        public int Id { get; set; }

        public PersonaViewModel Persona { get; set; }
        public RutaViewModel Ruta { get; set; }
    }
}
