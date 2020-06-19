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

    editarPessoa(id, nome, endereco, telefone, peso, altura, probSaude){
        let pessoa = this._listaPessoas.find(elem => elem._id == id);
        const index = this._listaPessoas.indexOf(pessoa);

        if(index > -1){
            this._listaPessoas[index].nome = nome;
            this._listaPessoas[index].endereco = endereco;
            this._listaPessoas[index].telefone = telefone;
            this._listaPessoas[index].peso = peso;
            this._listaPessoas[index].altura = altura;
            this._listaPessoas[index].probSaude = probSaude;
        }
    }

    get pessoas(){
        return [].concat(this._listaPessoas);
    }

    get numPessoas(){
        return this._listaPessoas.length;
    }
}