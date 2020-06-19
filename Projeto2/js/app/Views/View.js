class View{
    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model){
        throw new Error('É necessário criar o método _template() para extender a classe!')
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}