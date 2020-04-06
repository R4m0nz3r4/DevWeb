using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI.HtmlControls;
using Metodos;
using Objetos;

namespace ProjCorona
{
    public partial class Tabela : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            HtmlTable tabela = Funcs.ObterTableDados();
            tabela.Attributes["class"] = "table-striped table-dark";
            WrapperTable.Controls.Add(tabela);
        }
    }
}