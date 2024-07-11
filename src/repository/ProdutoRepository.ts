import { Produto } from "../model/Produto";

export interface ProdutoRepository {
    procurarPorId(id: number): void;
    listarTodas(): void;
    atualizar(produto: Produto): void;
    cadastrar(produto: Produto): void;
    deletar(id: number): void;
}
