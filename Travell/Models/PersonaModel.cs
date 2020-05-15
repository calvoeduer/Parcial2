using System.ComponentModel.DataAnnotations;
using Entity;

namespace Travell.Models
{
    public class PersonaInputModel
    {
        [Required(ErrorMessage = "La identificacion es requerida")]
        public string Identificacion { get; set; }

        [Required(ErrorMessage = "El nombre  es requerido")]
        public string Nombre { get; set; }
    }


    public class PersonaViewModel : PersonaInputModel
    {
        public PersonaViewModel()
        {

        }

        public PersonaViewModel(Persona persona)
        {
            Identificacion = persona.Identificacion;
            Nombre = persona.Nombre;
        }
    }
}
