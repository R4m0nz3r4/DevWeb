class ModalView extends View{
    constructor(elemento){
        super(elemento)
    }

    _template(model){
        return `
            <div id='ModalPessoa' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='ModalPessoaTitle' aria-hidden='true'>
                <div class='modal-dialog modal-dialog-centered' role='document'>
                    <div class='modal-content'>
                        <div class='modal-header'>
                            <h5 class='modal-title'>Informações Pessoais</h5>
                            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div class='modal-body'>
                            <div class='row'>
                                <div class='form-group col-lg-6'>
                                    <label>Nome</label>
                                    <input id="NomeModalInput" type="text" placeholder="Nome" class="form-control" 
                                    value='${model.pessoa.nome}' ${ model.editavel ? "" : "readonly" } required></input>
                                </div>
                                <div class='form-group col-lg-6'>
                                    <label>Endereço</label>
                                    <input id="EnderecoModalInput" type="text" placeholder="Endereço" class="form-control" 
                                    value='${model.pessoa.endereco}' ${ model.editavel ? "" : "readonly" } required></input>
                                </div>
                                <div class='form-group col-lg-6'>
                                    <label>Telefone</label>
                                    <input id="TelefoneModalInput" type="text" placeholder="Telefone" class="form-control" 
                                    value='${model.pessoa.telefone}' ${ model.editavel ? "" : "readonly" } required></input>
                                </div>
                                <div class='form-group col-lg-6'>
                                    <label>Peso</label>
                                    <input id="PesoModalInput" type="text" placeholder="Peso" class="form-control" 
                                    value='${model.pessoa.peso}' ${ model.editavel ? "" : "readonly" } required></input>
                                </div>
                                <div class='form-group col-lg-12'>
                                    <label>Altura</label>
                                    <input id="AlturaModalInput" type="text" placeholder="Altura" class="form-control" 
                                    value='${model.pessoa.altura}' ${ model.editavel ? "" : "readonly" } required></input>
                                </div>
                                <div class='form-group col-lg-12'>
                                    <label>Problemas de Saúde</label>
                                    <textarea id="ProbSaudeModalTextarea" class="form-control" rows='5' ${ model.editavel ? "" : "readonly" }>${model.pessoa.probSaude}</textarea>
                                </div>
                            </div>
                        </div>
                        <div class='modal-footer'>
                            <button type='button' class='btn btn-secondary' data-dismiss='modal'>Fechar</button>
                            ${ model.editavel ? 
                                "<button type='button' class='btn btn-primary' onclick='pessoaController.editarPessoa(" + model.pessoa.id + ")'>Salvar</button>" : 
                                "" 
                            }
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}