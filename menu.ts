import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { FunkoPop } from "./src/model/FunkoPop";
import { Caneca } from "./src/model/Caneca";
import { Produto } from "./src/model/Produto";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {

    let produtos: ProdutoController = new ProdutoController();

    let opcao, id, tipo, preco: number;
    let cor, tamanho, personagem: string;
    const tipoProduto = ['Funko POP', 'Caneca'];

    produtos.cadastrar(new FunkoPop(produtos.gerarId(), 1, 150, "Harry Potter", "grande"));
    produtos.cadastrar(new FunkoPop(produtos.gerarId(), 1, 140, "Luna Lovegood", "medio"));
    produtos.cadastrar(new FunkoPop(produtos.gerarId(), 1, 200, "Tom Riddle", "medio"));

    produtos.cadastrar(new FunkoPop(produtos.gerarId(), 2, 55, "Mandragora", "marrom"));
    produtos.cadastrar(new FunkoPop(produtos.gerarId(), 2, 65, "Edwiges", "branca"));
    produtos.cadastrar(new FunkoPop(produtos.gerarId(), 2, 65, "Vira Tempo", "dourado"));

    while (true) {
        console.log(colors.bg.black, colors.fg.magenta,
            "******************************************************");
        console.log("                                                     ");
        console.log("                LOJINHA DOS POTTERHEADS              ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os produtos             ");
        console.log("            3 - Procurar os produtos por ID          ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Comprar Produto                      ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.bg.black, colors.fg.magentastrong, "\nNa lojinha dos Potterheads voce garante o seu produto com qualidade!!", colors.reset);
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Produto\n\n");

                console.log("Digite o numero do ID: ");
                id = readlinesync.questionInt("");

                console.log("Digite o Tipo do produto: ");
                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                console.log("Digite o preco do produto: ");
                preco = readlinesync.questionFloat("");

                console.log("Digite o personagem do seu produto: ")
                personagem = readlinesync.question("");


                switch (tipo) {
                    case 1:
                        console.log("Digite o Tamanho do seu Funko: ");
                        tamanho = readlinesync.question("");
                        produtos.cadastrar(new FunkoPop(produtos.gerarId(), tipo, preco, personagem, tamanho));
                        break;

                    case 2:
                        console.log("Digite a cor da sua caneca: ");
                        cor = readlinesync.question("");
                        produtos.cadastrar(new Caneca(produtos.gerarId(), tipo, preco, personagem, cor));
                        break;
                }
                keyPress()
                break;


            case 2:
                console.log("\n\nListar todos os produtos\n\n");
                produtos.listarTodas();
                keyPress()
                break;

            case 3:
                console.log("\n\nProcurar os produtos por ID\n\n");
                id = readlinesync.questionInt("");
                produtos.procurarPorId(id);
                keyPress()
                break;

            case 4:
                console.log("\nDigite o id do produto: ");
                id = readlinesync.questionInt("");

                let conta = produtos.buscarNoArray(id);

                if (conta) {
                    console.log("Digite o id do produto: ");
                    id = readlinesync.questionInt("");

                    console.log("Digite o preco do produto: ");
                    preco = readlinesync.questionFloat("");

                    tipo = conta.tipo;

                    console.log("Digite o personagem do seu produto: ")
                    personagem = readlinesync.question("");


                    switch (tipo) {
                        case 1:
                            console.log("Digite o tamanho do seu Funko: ");
                            tamanho = readlinesync.question(" ");
                            produtos.atualizar(new FunkoPop(id, tipo, preco, personagem, tamanho));
                            break;
                        case 2:
                            console.log("Digite a cor da sua caneca: ");
                            cor = readlinesync.question("");
                            produtos.atualizar(new Caneca(id, tipo, preco, personagem, cor));
                            break;
                    }
                } else {
                    console.log("\nO produto nao foi encontrado!")
                }
                keyPress()
                break;

            case 5:
                console.log("\n\nComprar Produto\n\n");
                console.log("\n\nEscolha um Id pra realizar sua compra: \n\n");
                id = readlinesync.questionInt(" ");
                produtos.deletar(id);
                keyPress()
                break;

            default:
                console.log("\nOpção Inválida!\n");
                keyPress()
                break;
        }
    }
}
export function sobre(): void {
    console.log(colors.bg.black, colors.fg.magenta, "\n*****************************************************");
    console.log("Projeto Desenvolvido por: Marcella R.G. Sanches");
    console.log("Generation Brasil - marcella.sanches@genstudents.org ou rochaamarcellaaa@gmail.com");
    console.log("https://github.com/MarcellaRGSanches");
    console.log("*****************************************************", colors.reset);
}
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
main();