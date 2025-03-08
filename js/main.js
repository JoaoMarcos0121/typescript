"use strict";
/// <reference path="produto.ts" />
var loja;
(function (loja) {
    class Produtos {
        constructor() {
            // Criar uma classe Produto com valores iniciais
            this.produto = new loja.Produto("Notebook", 2500);
            this.atualizarInfoProduto();
            this.configurarEventos();
        }
        atualizarInfoProduto() {
            const nomeProdutoElement = document.getElementById("nomeProduto");
            const precoProdutoElement = document.getElementById("precoProduto");
            if (nomeProdutoElement && precoProdutoElement) {
                nomeProdutoElement.textContent = this.produto.nome;
                precoProdutoElement.textContent = `R$ ${this.produto.preco.toFixed(2)}`;
            }
        }
        configurarEventos() {
            //botao de calcula finaz
            const calcularBotao = document.getElementById("calcularBotao");
            if (calcularBotao) {
                calcularBotao.addEventListener("click", () => this.calcularPrecoFinal());
            }
            // vai atualizar o nome e preço que o usuario digitar
            const atualizarBotao = document.getElementById("atualizarBotao");
            if (atualizarBotao) {
                atualizarBotao.addEventListener("click", () => this.atualizarProduto());
            }
        }
        //atualizar nome e preço dao pelo usuario
        atualizarProduto() {
            const NomeProdutoUser = document.getElementById("NomeProdutoUser");
            const PrecoProdutoUser = document.getElementById("PrecoProdutoUser");
            if (NomeProdutoUser && PrecoProdutoUser) {
                const novoNome = NomeProdutoUser.value.trim();
                const novoPreco = parseFloat(PrecoProdutoUser.value);
                // se valido
                if (novoNome && !isNaN(novoPreco) && novoPreco >= 0) {
                    // Atualiza o produto com o valor novo
                    this.produto.nome = novoNome;
                    this.produto.preco = novoPreco;
                    // mostra a atualização na tela
                    this.atualizarInfoProduto();
                    // Limpa os campos
                    //NomeProdutoUser.value = "";
                    //PrecoProdutoUser.value = "";
                    //mensagem de sucesso
                    alert("Produto atualizado!");
                }
                else {
                    //mensagem de erro
                    alert("Por favor, preencha os campos.");
                }
            }
        }
        calcularPrecoFinal() {
            const ImpostoUser = document.getElementById("ImpostoUser");
            const resultado = document.getElementById("resultado");
            if (ImpostoUser && resultado) {
                const imposto = parseFloat(ImpostoUser.value);
                try {
                    // valor final para o calculo
                    const precoFinal = this.produto.calcularPrecoFinal(imposto);
                    resultado.innerText = `Preço final com ${imposto}% de Imposto: R$ ${precoFinal.toFixed(2)}`;
                    resultado.style.color = "green";
                }
                catch (error) {
                    if (error instanceof Error) {
                        resultado.innerText = `Erro: ${error.message}`;
                        resultado.style.color = "red";
                    }
                }
            }
        }
    }
    loja.Produtos = Produtos;
})(loja || (loja = {}));
window.addEventListener("DOMContentLoaded", () => {
    new loja.Produtos();
});
