using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entity
{
    public class Tiquet
    {
        public int Id { get; set; }
        [MaxLength(10)]
        public string PersonaId { get; set; }
        public int RutaId { get; set; }

        public Persona Persona { get; set; }
        public Ruta Ruta { get; set; }
    }
}
