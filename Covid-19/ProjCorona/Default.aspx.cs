using System;
using System.Collections.Generic;
using Objetos;
using Metodos;
using System.Web.Script.Serialization;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;
using System.IO;

namespace ProjCorona
{
    public partial class _default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                List<string> nomePaises = Funcs.ObterPaises();
                var dpdValues = nomePaises.Select(x => new { Nome = x, Valor = x });

                PaisesDropDownList.DataSource = dpdValues;
                PaisesDropDownList.DataBind();
            }
        }

        protected void PlotarGraficoFiltro_OnSelectedIndexChanged(object sender, EventArgs e)
        {
            string periodo = PeriodoDropDownList.SelectedValue;
            string pais = PaisesDropDownList.SelectedValue;

            ScriptManager.RegisterClientScriptBlock(Page, Page.GetType(), "Plotar" + Guid.NewGuid(), "periodo = '" + periodo + "'; paisPlotar = '" + pais + "'; ObterInformacoes();", true);
        }

        protected void PaisesDropDownList_OnDataBound(object sender, EventArgs e)
        {
            PaisesDropDownList.Items.Insert(0, new ListItem("(Selecione um País)", ""));
        }
    }
}