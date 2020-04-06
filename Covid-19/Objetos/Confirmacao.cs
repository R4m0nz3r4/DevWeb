using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Objetos
{
    public class Confirmacao
    {
        public string Provincia { get; set; }
        public string Dia { get; set; }
        public int NumCasos { get; set; }
        public double? Longitude { get; set; }
        public double? Latitude { get; set; }
    }
}
