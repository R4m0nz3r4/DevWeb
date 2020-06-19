class Pessoa {
    constructor(id, nome, endereco, telefone, peso, altura, probSaude){
        if (nome && endereco && telefone && peso && altura) {
            this._id = id
            this._nome = nome;
            this._endereco = endereco;
            this._telefone = telefone;
            this._peso = peso;
            this._altura = altura;
            this._probSaude = probSaude;
        } else {
            this._id = 0;
            this._nome = "";
            this._endereco = "";
            this._telefone = 0;
            this._peso = 0;
            this._altura = 0;
            this._probSaude = "";
        }
    }

    get id(){
        return this._id;
    }

    get nome(){
        return this._nome;
    }

    get endereco(){
        return this._endereco;
    }

    get telefone(){
        return this._telefone;
    }

    get peso(){
        return this._peso;
    }

    get altura(){
        return this._altura;
    }

    get probSaude(){
        return this._probSaude;
    }

    set nome(nome){
        this._nome = nome;
    }

    set endereco(endereco){
        this._endereco = endereco;
    }

    set telefone(telefone){
        this._telefone = telefone;
    }

    set peso(peso){
        this._peso = peso;
    }

    set altura(altura){
        this._altura = altura;
    }

    set probSaude(probSaude){
        this._probSaude = probSaude;
    }
}