class PessoaController {
    constructor(){
        let $ = document.querySelector.bind(document);

        this._nome = $("#NomeInput");
        this._endereco = $("#EnderecoInput");
        this._telefone = $("#TelefoneInput");
        this._peso = $("#PesoInput");
        this._altura = $("#AlturaInput");
        this._probSaude = $("#ProbSaudeInput");

        this._listaPessoas = new ListaPessoas();
        this._pessoaView = new PessoaView($("#PessoasTabela"));
        this._pessoaView.update(this._listaPessoas);

        this._modal = new Modal();
        this._modalView = new ModalView($("#PessoasModal"));
        this._modalView.update(this._modal);
    }

    inserirPessoa(event){
        event.preventDefault();

        let pessoa = this._criarPessoa();
        this._listaPessoas.adicionarPessoa(pessoa);

        this._pessoaView.update(this._listaPessoas);

        this._limparFormulario();
    }

    _criarPessoa(){
        return new Pessoa(
            Util._gerarID(),
            this._nome.value,
            this._endereco.value,
            this._telefone.value,
            this._peso.value,
            this._altura.value,
            this._probSaude.value
        );
    }

    _limparFormulario(){
        this._nome.value = "";
        this._endereco.value = "";
        this._telefone.value = "";
        this._peso.value = "";
        this._altura.value = "";
        this._probSaude.value = "";
    }

    _abrirModalEditar(id){
        let pessoa = this._listaPessoas.obterPessoa(id);
        this._modal = new Modal(pessoa, true);
        this._modalView.update(this._modal);

        $("#ModalPessoa").modal('show');
    }

    _abrirModalVisualizar(id){
        let pessoa = this._listaPessoas.obterPessoa(id);
        this._modal = new Modal(pessoa, false);
        this._modalView.update(this._modal);
        
        $("#ModalPessoa").modal('show');
    }

    _deletarPessoa(id){
        this._listaPessoas.removerPessoa(id);
        this._pessoaView.update(this._listaPessoas);
    }
}