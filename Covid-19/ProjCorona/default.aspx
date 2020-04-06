<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs"
    Inherits="ProjCorona._default" ValidateRequest="false" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="FiltrosUpdatePanel" runat="server">
        <ContentTemplate>
            <div class="filtro-wrapper">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <div class="form-group">
                                <label>Período</label>
                                <asp:DropDownList ID="PeriodoDropDownList" runat="server" OnSelectedIndexChanged="PlotarGraficoFiltro_OnSelectedIndexChanged"
                                    CssClass="form-control" AutoPostBack="true">
                                    <asp:ListItem Text="(Selecione um Período)" Value="1"></asp:ListItem>
                                    <asp:ListItem Text="Dois dias" Value="2"></asp:ListItem>
                                    <asp:ListItem Text="Quatro dias" Value="4"></asp:ListItem>
                                    <asp:ListItem Text="Dezessete dias" Value="17" Selected="True"></asp:ListItem>
                                </asp:DropDownList>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                            <div class="form-group">
                                <label>País</label>
                                <asp:DropDownList ID="PaisesDropDownList" runat="server" OnDataBound="PaisesDropDownList_OnDataBound"
                                    DataTextField="Nome" DataValueField="Valor" OnSelectedIndexChanged="PlotarGraficoFiltro_OnSelectedIndexChanged"
                                    AutoPostBack="true" CssClass="form-control">
                                </asp:DropDownList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
    <div class="canvas-warapper">
        <canvas id="chart"></canvas>
    </div>
</asp:Content>
