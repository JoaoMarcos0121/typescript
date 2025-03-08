"use strict";
var loja;
(function (loja) {
    class Produto {
        constructor(nome, preco) {
            this._nome = nome;
            this._preco = preco;
        }
        get nome() {
            return this._nome;
        }
        get preco() {
            return this._preco;
        }
        set nome(novoNome) {
            this._nome = novoNome;
        }
        set preco(novoPreco) {
            if (novoPreco >= 0) {
                this._preco = novoPreco;
            }
            else {
                throw new Error("O preço não pode ser negativo");
            }
        }
        //calcular o preço final com imposto
        calcularPrecoFinal(imposto) {
            if (imposto < 0) {
                throw new Error("O imposto não pode ser negativo");
            }
            const valorImposto = this._preco * (imposto / 100);
            return this._preco + valorImposto;
        }
    }
    loja.Produto = Produto;
})(loja || (loja = {}));
