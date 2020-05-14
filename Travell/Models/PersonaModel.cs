using System.ComponentModel.DataAnnotations;
using Entity;

namespace Travell.Models
{
    public class PersonaImputModel
    {
        [Required(ErrorMessage = "La identificacion es requerida")]
        [StringLength(9, ErrorMessage = "maximo de 9")]
        public string Identificacion { get; set; }

        [Required(ErrorMessage = "El nombre  es requerido")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "La ruta es requerida")]
        public string Ruta { get; set; }
    }


    public class PersonaViewModel : PersonaImputModel
    {
        public PersonaViewModel()
        {

        }

        public PersonaViewModel(Persona persona)
        {
            Identificacion = persona.Identificacion;
            Nombre = persona.Nombre;
            Ruta = persona.Ruta;
        }
    }
}
