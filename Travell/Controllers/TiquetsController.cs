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
using Microsoft.AspNetCore.SignalR;
using Travell.Hubs;

namespace Travell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TiquetsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IHubContext<TravelHub> _hubContext;
        public TiquetsController(ApplicationDbContext context, IHubContext<TravelHub> hubContext)
        {
            _context = context;
            _hubContext = hubContext;

        }

        [HttpGet("[action]")]
        public async Task <ActionResult<IEnumerable<RutaViewModel>>> Rutas()
        {
           
             return Ok( await _context.Rutas.Select(r => new RutaViewModel(r)).ToListAsync());
        }

        [HttpGet]
        public async Task <ActionResult<IEnumerable<TiquetViewModel>>> Tiquetes()
        {
            return Ok(await _context.Tiquets.Include(p => p.Persona).Include(p => p.Ruta).Select(t => new TiquetViewModel(t)).ToListAsync());
        }

        [HttpPost("Personas")]
        public async Task <ActionResult<PersonaViewModel>> PostPersona([FromBody]PersonaInputModel personaModel)
        {
            Persona persona = new Persona()
            {
                Identificacion = personaModel.Identificacion,
                Nombre = personaModel.Nombre
            };

            _context.Add(persona);
          await  _context.SaveChangesAsync();

            return new PersonaViewModel(persona);
        }

        [HttpPost]
        public async Task <ActionResult<TiquetViewModel>> PostTiquete([FromBody]TiquetInputModel tiqueteModel)
        {
            Tiquet tiquet = new Tiquet()
            {
                PersonaId = tiqueteModel.PersonaId,
                RutaId = tiqueteModel.RutaId
            };

            _context.Add(tiquet);
           await _context.SaveChangesAsync();

            return new TiquetViewModel(tiquet);
        }


    }
}