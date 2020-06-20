class MensagemView extends View{

    constructor(elemento){
        super(elemento);
    }

    _template(model){

        this._elemento.classList.add('visivel');

        setTimeout(
            () => this._elemento.classList.remove('visivel'), 
            3000
        );

        return `
            <div class='${model.css}' role='alert'>${model.texto}</div>
        `;
    }

}