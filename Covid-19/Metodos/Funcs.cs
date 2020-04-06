using System;
using System.Collections.Generic;
using System.Web;
using System.Data;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using GenericParsing;
using Objetos;
using System.Globalization;
using System.Web.UI.HtmlControls;
using System.Web.UI;

namespace Metodos
{
    public class Funcs
    {
        protected static string caminho = "C:\\Users\\caver\\source\\repos\\ProjCorona\\ProjCorona\\Dados\\time_series_covid19_confirmed_global.csv";

        public static List<Pais> ObterDadosExcel()
        {

            //Separa o arquivo em linhas
            List<string> arquivo = File.ReadAllLines("C:\\Users\\caver\\source\\repos\\ProjCorona\\ProjCorona\\Dados\\time_series_covid19_confirmed_global.csv").ToList();

            List<DateTime> datas = new List<DateTime>();
            List<Pais> paises = new List<Pais>();

            foreach (string linha in arquivo)
            {
                //Separa as colunas da linhas
                string[] colunas = linha.Split(char.Parse(","));

                //Verifica se é primeira linha
                if (arquivo.IndexOf(linha) == 0)
                {
                    //Salva as datas
                    foreach (string coluna in colunas)
                    {
                        DateTime data = DateTime.MinValue;
                        DateTime.TryParse(coluna, CultureInfo.GetCultureInfo("en-US"), DateTimeStyles.None, out data);

                        if (data != DateTime.MinValue)
                            datas.Add(data);
                    }
                }
                else
                {
                    Pais pais = new Pais();
                    //Estado estado = null;
                    List<Confirmacao> confis = new List<Confirmacao>();

                    //Separa as confirmações da coluna por Data
                    foreach (DateTime data in datas)
                    {
                        Confirmacao confi = new Confirmacao();

                        confi.Dia = data.ToString("dd/MM/yyyy");
                        confi.NumCasos = int.Parse(colunas[datas.IndexOf(data) + 4]);
                        confi.Latitude = double.Parse(colunas[2]);
                        confi.Longitude = double.Parse(colunas[3]);

                        if (!string.IsNullOrEmpty(colunas[0]))
                            confi.Provincia = colunas[0];

                        confis.Add(confi);
                    }

                    //Verifica se o país ja foi adicionado, se não seta um novo
                    if (paises.Any(x => x.Nome.Equals(colunas[1])))
                    {
                        pais = paises.FirstOrDefault(x => x.Nome.Equals(colunas[1]));
                        pais.Confirmacoes.AddRange(confis);
                        pais.CasosPais += confis.LastOrDefault().NumCasos;
                    }
                    else
                    {
                        pais.Nome = colunas[1];
                        pais.Confirmacoes = confis;
                        pais.CasosPais += confis.LastOrDefault().NumCasos;

                        paises.Add(pais);
                    }
                }
            }

            return paises;
        }

        public static HtmlTable ObterTableDados()
        {
            List<string> arquivo = File.ReadAllLines("C:\\Users\\caver\\source\\repos\\ProjCorona\\ProjCorona\\Dados\\time_series_covid19_confirmed_global.csv").ToList();

            HtmlTable table = new HtmlTable();
            table.Border = 1;
            table.CellPadding = 3;

            foreach (string linha in arquivo)
            {
                string[] colunas = linha.Split(char.Parse(","));

                if (arquivo.IndexOf(linha) == 0)
                {
                    HtmlTableRow TLinha = new HtmlTableRow();

                    foreach (string coluna in colunas)
                    {
                        string valCel = "----";

                        if (colunas.First() == coluna)
                            valCel = "#";
                        else if (coluna.Equals("Province/State"))
                            valCel = "Provincia";
                        else if (coluna.Equals("Country/Region"))
                            valCel = "País";
                        else if (coluna.Equals("Lat"))
                            valCel = "Latitude";
                        else if (coluna.Equals("Long"))
                            valCel = "longitude";
                        else
                            valCel = DateTime.Parse(coluna, CultureInfo.GetCultureInfo("en-US"), DateTimeStyles.None).ToString("dd/MM/yyyy");

                        HtmlTableCell TCelula = new HtmlTableCell();
                        TCelula.Controls.Add(new LiteralControl(valCel));

                        TLinha.Cells.Add(TCelula);
                    }

                    table.Rows.Add(TLinha);
                }
                else
                {
                    HtmlTableRow TLinha = new HtmlTableRow();

                    for (int i = 0; i < colunas.Length; i++)
                    {
                        string valCel = "----";

                        if (colunas[0] == colunas[i])
                            valCel = arquivo.IndexOf(linha) + "";
                        else if (!string.IsNullOrEmpty(colunas[i]))
                            valCel = colunas[i] + "";

                        HtmlTableCell TCelula = new HtmlTableCell();
                        TCelula.Controls.Add(new LiteralControl(valCel));

                        TLinha.Cells.Add(TCelula);
                    }

                    table.Rows.Add(TLinha);
                }
            }

            return table;
        }

        public static List<string> ObterDias(int periodo)
        {
            List<string> arquivo = File.ReadAllLines(caminho).ToList();
            string[] colunas = arquivo.FirstOrDefault().Split(char.Parse(","));
            List<string> datas = new List<string>();

            for (int i = (3 + periodo); i < colunas.Length; i = (i + periodo))
            {
                DateTime data = DateTime.Parse(colunas[i], CultureInfo.GetCultureInfo("en-US"), DateTimeStyles.None);
                datas.Add(data.ToString("dd/MM/yyyy"));
            }

            return datas;
        }

        public static List<string> ObterPaises()
        {
            List<string> arquivo = File.ReadAllLines(caminho).ToList();
            List<string> paises = new List<string>();

            foreach(string linhas in arquivo)
            {
                string[] colunas = linhas.Split(char.Parse(","));

                paises.Add(colunas[1]);
            }

            return paises.Distinct().ToList();
        }

        public static List<string> ObterProvincias()
        {
            List<string> arquivo = File.ReadAllLines(caminho).ToList();
            List<string> provincias = new List<string>();

            foreach (string linhas in arquivo)
            {
                string[] colunas = linhas.Split(char.Parse(","));

                if (!string.IsNullOrEmpty((colunas[0])))
                {
                    provincias.Add(colunas[1]);
                }
            }

            return provincias.ToList();
        }
    }
}
