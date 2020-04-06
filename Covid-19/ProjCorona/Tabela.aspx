<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Tabela.aspx.cs" Inherits="ProjCorona.Tabela" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container-fluid" style="padding: 0 40px;">
        <h2 class="titulo-ph20">Tabela de Confirmações</h2>
        <asp:Panel ID="WrapperTable" runat="server" CssClass="table-responsive table-wrapper"></asp:Panel>
    </div>
</asp:Content>

