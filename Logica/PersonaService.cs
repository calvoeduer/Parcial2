using Datos;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class PersonaService
    {
        private readonly PersonaContext _context;

        public PersonaService(PersonaContext context)
        {
            _context = context;
        }


        public GuardarPersonaResponse Guardar(Persona persona)
        {
            try
            {
                var personaBuscada = _context.Personas.Find(persona.Identificacion);
                if (personaBuscada != null)
                {
                    return new GuardarPersonaResponse("El usuario está registrado");
                }

                _context.Personas.Add(persona);
                _context.SaveChanges();

                return new GuardarPersonaResponse(persona);
            }
            catch (Exception e)
            {

                return new GuardarPersonaResponse($"Error de la aplicacion {e.Message}");
            }

        }

        public List<Persona> ConsultarTodos()
        {
            List<Persona> personas = _context.Personas.ToList();
            return personas;
        }






        public class GuardarPersonaResponse
        {
            public GuardarDocenteResponse(Persona persona)
            {
                Error = false;
                Persona = persona;
            }
            public GuardarDocenteResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }

            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Persona Persona { get; set; }
        }


    }
}
