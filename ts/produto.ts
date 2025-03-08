namespace loja {
    export class Produto {
        private _nome: string;
        private _preco: number;

        constructor(nome: string, preco: number) {
            this._nome = nome;
            this._preco = preco;
        }

        get nome(): string {
            return this._nome;
        }

        get preco(): number {
            return this._preco;
        }

        set nome(novoNome: string) {
            this._nome = novoNome;
        }

        set preco(novoPreco: number) {
            if (novoPreco >= 0) {
                this._preco = novoPreco;
            } else {
                throw new Error("O preço não pode ser negativo");
            }
        }

        //calcular o preço final com imposto
        public calcularPrecoFinal(imposto: number): number {
            if (imposto < 0) {
                throw new Error("O imposto não pode ser negativo");
            }
            
            const valorImposto = this._preco * (imposto / 100);
            return this._preco + valorImposto;
        }
    }
}