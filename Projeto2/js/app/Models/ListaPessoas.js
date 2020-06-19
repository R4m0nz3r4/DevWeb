class ListaPessoas {
    constructor(){
        this._listaPessoas = [];
    }

    adicionarPessoa(pessoa){
        this._listaPessoas.push(pessoa);
    }

    removerPessoa(id){
        let pessoa = this._listaPessoas.find(elem => elem._id == id);
        const index = this._listaPessoas.indexOf(pessoa);

        if(index > -1){
            this._listaPessoas.splice(index, 1);
        }
    }

    obterPessoa(id){
        return this._listaPessoas.find(elem => elem._id == id);
    }

    get pessoas(){
        return [].concat(this._listaPessoas);
    }

    get numPessoas(){
        return this._listaPessoas.length;
    }
}