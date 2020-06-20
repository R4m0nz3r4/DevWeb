class PessoaController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._nome = $("#NomeInput");
        this._endereco = $("#EnderecoInput");
        this._telefone = $("#TelefoneInput");
        this._peso = $("#PesoInput");
        this._altura = $("#AlturaInput");
        this._probSaude = $("#ProbSaudeTextarea");

        this._listaPessoas = new ListaPessoas();
        this._pessoaView = new PessoaView($("#PessoasTabela"));
        this._pessoaView.update(this._listaPessoas);

        this._modal = new Modal();
        this._modalView = new ModalView($("#PessoasModal"));
        this._modalView.update(this._modal);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#Mensagem"));
        this._mensagemView.update(this._mensagem);
    }

    inserirPessoa(event) {
        event.preventDefault();

        let pessoa = this._criarPessoa();
        this._listaPessoas.adicionarPessoa(pessoa);

        this._pessoaView.update(this._listaPessoas);

        this._limparFormulario();

        this._mensagem = new Mensagem("Inserção efetuada!", "alert alert-success");
        this._mensagemView.update(this._mensagem);
    }

    editarPessoa(id) {
        try{
            let nome = $("#NomeModalInput")[0].value;
            let endereco = $("#EnderecoModalInput")[0].value;
            let telefone = $("#TelefoneModalInput")[0].value;
            let peso = $("#PesoModalInput")[0].value;
            let altura = $("#AlturaModalInput")[0].value;
            let probSaude = $("#ProbSaudeModalTextarea")[0].value;
    
            this._listaPessoas.editarPessoa(id, nome, endereco, telefone, peso, altura, probSaude);
    
            this._pessoaView.update(this._listaPessoas);
    
            $("#ModalPessoa").modal('hide');
    
            this._mensagem = new Mensagem("Dados atualizados!", "alert alert-success");
            this._mensagemView.update(this._mensagem);
        }catch(e){
            this._mensagem = new Mensagem("Algo deu errado. Verifique o terminal!", "alert alert-danger");
            this._mensagemView.update(this._mensagem);

            console(e.message);
        }
    }

    _deletarPessoa(id) {
        try{
            this._listaPessoas.deletarPessoa(id);
            this._pessoaView.update(this._listaPessoas);
    
            this._mensagem = new Mensagem("Remoção realizada!", "alert alert-success");
            this._mensagemView.update(this._mensagem);
        }catch(e){
            this._mensagem = new Mensagem("Algo deu errado. Verifique o terminal!", "alert alert-danger");
            this._mensagemView.update(this._mensagem);

            console(e.message);
        }
    }

    _criarPessoa() {
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

    _limparFormulario() {
        this._nome.value = "";
        this._endereco.value = "";
        this._telefone.value = "";
        this._peso.value = "";
        this._altura.value = "";
        this._probSaude.value = "";
    }

    _abrirModalEditar(id) {
        let pessoa = this._listaPessoas.obterPessoa(id);
        this._modal = new Modal(pessoa, true);
        this._modalView.update(this._modal);

        $("#ModalPessoa").modal('show');
    }

    _abrirModalVisualizar(id) {
        let pessoa = this._listaPessoas.obterPessoa(id);
        this._modal = new Modal(pessoa, false);
        this._modalView.update(this._modal);

        $("#ModalPessoa").modal('show');
    }
}