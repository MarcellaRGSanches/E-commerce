import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log('\nO produto com o id: ' + produto.id + ' foi atualizado com sucesso!');
        } else {
            console.log('\nO produto com o id: ' + produto.id + 'nao foi encontrado!');
        }


    }
    private listaProdutos: Array<Produto> = new Array<Produto>()
    id: number = 0

    procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            buscaProduto.visualizar();
        } else {
            console.log('\nO produto id: ' + id + ' não foi encontrada');
        }
    }

    listarTodas(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }

    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\nO produto com o id: " + produto.id + " foi criado com sucesso!");

    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("\nO produto id: " + id + " foi comprado com sucesso!");
        } else {
            console.log("\nO produto com o id: " + id + " nao foi encontrado!")
        }

    }
    public gerarId(): number {
        return ++this.id;
    }
    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id)
                return produto;
        }
        return null;
    }
}