using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Travell.Data;
using Travell.Models;

namespace Travell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TiquetsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TiquetsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public  ActionResult<IEnumerable<RutaViewModel>> Rutas()
        {
            return Ok(_context.Rutas.Select(r => new RutaViewModel(r)).ToList());
        }

        [HttpGet]
        public ActionResult<IEnumerable<TiquetViewModel>> Tiquetes()
        {
            return Ok(_context.Tiquets.Include(p => p.Persona).Include(p => p.Ruta).Select(t => new TiquetViewModel(t)).ToList());
        }

        [HttpPost("Personas")]
        public ActionResult<PersonaViewModel> PostPersona([FromBody]PersonaInputModel personaModel)
        {
            Persona persona = new Persona()
            {
                Identificacion = personaModel.Identificacion,
                Nombre = personaModel.Nombre
            };

            _context.Add(persona);
            _context.SaveChanges();

            return new PersonaViewModel(persona);
        }

        [HttpPost]
        public ActionResult<TiquetViewModel> PostTiquete([FromBody]TiquetInputModel tiqueteModel)
        {
            Tiquet tiquet = new Tiquet()
            {
                PersonaId = tiqueteModel.PersonaId,
                RutaId = tiqueteModel.RutaId
            };

            _context.Add(tiquet);
            _context.SaveChanges();

            return new TiquetViewModel(tiquet);
        }


    }
}