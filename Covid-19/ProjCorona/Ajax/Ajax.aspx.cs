using Metodos;
using Newtonsoft.Json;
using Objetos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ProjCorona.Ajax
{
    public partial class Ajax : System.Web.UI.Page
    {
        [WebMethod]
        public static string ObterInfoChart(int periodo, string paisPlotar)
        {
            List<Pais> paises = Funcs.ObterDadosExcel();

            paises = paises.Where(x =>  string.IsNullOrEmpty(paisPlotar)
                                        ||
                                        x.Nome.Equals(paisPlotar)).ToList();

            List<string> diasPeriodo = Funcs.ObterDias(periodo);

            foreach(Pais pais in paises)
            {
                List<Confirmacao> novasConfs = new List<Confirmacao>();
                foreach (string dia in diasPeriodo)
                {
                    List<Confirmacao> confsDia = pais.Confirmacoes.Where(x => x.Dia.Equals(dia)).ToList();

                    Confirmacao novaConf = new Confirmacao();
                    novaConf.Latitude = pais.Confirmacoes.FirstOrDefault().Latitude;
                    novaConf.Latitude = pais.Confirmacoes.FirstOrDefault().Longitude;
                    novaConf.Provincia = "";
                    novaConf.Dia = dia;
                    novaConf.NumCasos = confsDia.Sum(x => x.NumCasos);
                    novasConfs.Add(novaConf);
                }
                pais.Confirmacoes = novasConfs;
            }

            //Todos os paises total
            //var retorno = paises.Select(x => new { nPais = x.Nome, cPais = x.CasosPais }).OrderBy(y => y.cPais);

            Random rand = new Random();
            List<int> expectro = new List<int>();

            for(int i = 0; i < 255; i++)
            {
                expectro.Add(i);
            }

            List<string> dias = paises.FirstOrDefault().Confirmacoes.Select(x => x.Dia).ToList();
            var retorno = new
            {
                labels = dias,
                dtSet = paises.Select(w =>
                new
                {
                    label = w.Nome,
                    data = ObterCasos(w, dias),
                    borderColor = "rgba(" + expectro[rand.Next(0, 255)] + "," + expectro[rand.Next(0, 255)] + "," + expectro[rand.Next(0, 255)] + ", 1)",
                    fill = false
                })
            };

            string ret = JsonConvert.SerializeObject(retorno);

            return ret;
        }

        protected static object ObterCasos(Pais pais, List<string> dias)
        {
            List<Confirmacao> conf = new List<Confirmacao>();
            List<int> vals = new List<int>();

            foreach (string dia in dias)
            {
                conf = pais.Confirmacoes.Where(x => x.Dia.Equals(dia)).ToList();
                vals.Add(conf.Sum(x => x.NumCasos));
            }

            return vals.Select(x => x);
        }
    }
}