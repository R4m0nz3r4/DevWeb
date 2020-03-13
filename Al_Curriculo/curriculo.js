document.addEventListener("DOMContentLoaded", function(){
    var btnVoltar = document.querySelector(".btn-voltar");
    var btnAvancar = document.querySelector(".btn-avancar");
    var btnPts = document.querySelectorAll(".pontos > .pt");

    btnVoltar.addEventListener("click", function(e){
        var pgAtiva = document.querySelector(".pagina.ativa");
        var ptAtivo = document.querySelector(".pontos > .pt.ativo");

        var numPgAtiva = pgAtiva.getAttribute("data-pgnum");

        if(numPgAtiva == 2)
            btnVoltar.style.visibility = "hidden";
        else
            btnAvancar.style.visibility = "visible";

        var pgAtivar = document.querySelector(".pagina[data-pgnum='" + (+numPgAtiva - 1) +"']");
        var ptAtivar = document.querySelector(".pontos .pt[data-ptnum='" + (+numPgAtiva - 1) +"']");

        pgAtiva.classList.remove("ativa");
        ptAtivo.classList.remove("ativo");
        pgAtivar.className += " ativa";
        ptAtivar.className += " ativo";
    });

    btnAvancar.addEventListener("click", function(e){
        var pgAtiva = document.querySelector(".pagina.ativa");
        var ptAtivo = document.querySelector(".pontos > .pt.ativo");

        var numPgAtiva = pgAtiva.getAttribute("data-pgnum");

        if(numPgAtiva == 2)
            btnAvancar.style.visibility = "hidden";
        else
            btnVoltar.style.visibility = "visible";

        var pgAtivar = document.querySelector(".pagina[data-pgnum='" + (+numPgAtiva + 1) +"']");
        var ptAtivar = document.querySelector(".pontos .pt[data-ptnum='" + (+numPgAtiva + 1) +"']");

        pgAtiva.classList.remove("ativa");
        ptAtivo.classList.remove("ativo");
        pgAtivar.className += " ativa";
        ptAtivar.className += " ativo";
    });

    btnPts.forEach(elem => {
        elem.addEventListener("click", function(e){
            var ptAtivo = document.querySelector(".pontos .pt.ativo");
            var ptAtivar = e.target;
    
            var numPtAtivo = ptAtivo.getAttribute("data-ptnum");
            var numPtAtivar = ptAtivar.getAttribute("data-ptnum");
    
            var pgAtiva = document.querySelector(".pagina.ativa");
            var pgAtivar = document.querySelector(".pagina[data-pgnum='" + numPtAtivar +"']");
    
            if(numPtAtivo != numPtAtivar){
                btnAvancar.style.visibility = "visible";
                btnVoltar.style.visibility = "visible";
                
                if(numPtAtivar == 3)
                    btnAvancar.style.visibility = "hidden";
                    
                if(numPtAtivar == 1)
                    btnVoltar.style.visibility = "hidden";
                
                pgAtiva.classList.remove("ativa");
                ptAtivo.classList.remove("ativo");
                pgAtivar.className += " ativa";
                ptAtivar.className += " ativo";
            }
        });
    });
});