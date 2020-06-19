class Modal {
    constructor(pessoa, editavel){
        if (pessoa, editavel) {
            this._pessoa = pessoa;
        } else {
            this._pessoa = new Pessoa();
        }

        this._editavel = editavel ? true : false;
    }

    get pessoa(){
        return this._pessoa;
    }

    get editavel(){
        return this._editavel;
    }
}