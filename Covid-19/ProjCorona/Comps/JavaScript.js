var periodo = 17, paisPlotar = "";

$(document).ready(function () {
    ObterInformacoes();

    if (window.location.href.indexOf("Tabela") != -1) {
        $("#LinkGraficos").removeClass("active");
        $("#LinkTabela").addClass("active");
    } else {
        $("#LinkGraficos").addClass("active");
        $("#LinkTabela").removeClass("active");
    } 
});

function ObterInformacoes() {
    var data = {
        periodo: periodo,
        paisPlotar: paisPlotar
    };

    $.ajax({
        type: 'POST',
        url: 'Ajax/Ajax.aspx/ObterInfoChart',
        data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (dt) {
            var dados = JSON.parse(dt.d);
            GerarGrafico(dados.labels, dados.dtSet);
        }
    });
}

function GerarGrafico(labels, dados) {
    if (document.getElementById('chart') != null) {
        $("#chart").remove();
        var canvas = '<canvas id="chart"></canvas>';
        $(".canvas-warapper").append(canvas);

        var ctx = document.getElementById('chart');
        ctx.height = '122';

        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: dados,
                labels: labels
            },
            options: {
                legend: {
                    usePointStyle: true,
                    position: 'bottom',
                    align: 'center'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

}