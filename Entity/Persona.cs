using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Persona
    {
        [Key, MaxLength(10)]
        public string Identificacion { get; set; }
        [MaxLength(30)]
        public string Nombre { get; set; }
    }
}
