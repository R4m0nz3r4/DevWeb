class Util {
    constructor(){
        throw new Error("A classe Util não pode ser instanciada!")
    }

    static _gerarID(){
        return Math.floor(Math.random() * 100000);
    }
}