class PessoaView extends View {
    constructor(elemento) {
        super(elemento);
    }

    _template(model){
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Endereço</td>
                        <td>Telefone</td>
                        <td>Peso</td>
                        <td>Altura</td>
                        <td>Opções</td>
                    </tr>
                </thead>
                <tbody>
                    ${model.pessoas.map(pessoa => `
                        <tr>
                            <td>${pessoa.nome}</td>
                            <td>${pessoa.endereco}</td>
                            <td>${pessoa.telefone}</td>
                            <td>${pessoa.peso}</td>
                            <td>${pessoa.altura}</td>
                            <td class='txt-centro'>
                                <span class='fa fa-pencil opc-icon m-r-5' onclick='pessoaController._abrirModalEditar(${pessoa.id})'></span>
                                <span class='fa fa-eye opc-icon m-r-5' onclick='pessoaController._abrirModalVisualizar(${pessoa.id})'></span>
                                <span class='fa fa-trash opc-icon' onclick='pessoaController._deletarPessoa(${pessoa.id})'></span>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `
    }
}