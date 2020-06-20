class Mensagem {
    constructor(texto, css) {
        if (texto && css) {
            this._texto = texto;
            this._css = css;
        } else {
            this._texto = "";
            this._css = "";
        }
    }

    get texto() {
        return this._texto;
    }

    get css() {
        return this._css;
    }

    set texto(texto) {
        this._texto = texto;
    }

    set css(css) {
        this._css = css;
    }
}