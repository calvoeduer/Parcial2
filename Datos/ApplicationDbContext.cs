using Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Travell.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Ruta>().HasData(new Ruta[]
            {
                new Ruta
                {
                    Id = 1,
                    Nombre = "Valledupar-Bogotá",
                    Precio = 90000
                },
                new Ruta
                {
                    Id = 2,
                    Nombre = "Valledupar-Barranquilla",
                    Precio = 35000
                },
                new Ruta
                {
                    Id = 3,
                    Nombre = "Valledupar - Santa marta",
                    
                    Precio = 40000
                },
                new Ruta
                {
                    Id = 4,
                    Nombre = "Valledupar - Cartagena",
                    Precio= 60000
                }
            });
        }

        public DbSet<Persona> Personas { get; set; }
        public DbSet<Ruta> Rutas { get; set; }
        public DbSet<Tiquet> Tiquets { get; set; }
    }
}
