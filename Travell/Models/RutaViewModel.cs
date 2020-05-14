using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Travell.Models
{
    public class RutaViewModel
    {
        public RutaViewModel(Ruta ruta)
        {
            Id = ruta.Id;
            Nombre = ruta.Nombre;
            Precio = ruta.Precio;
        }
        public int Id { get; set; }
        public string Nombre { get; set; }
        public decimal Precio { get; set; }
    }
}
