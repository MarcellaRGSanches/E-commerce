import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';

export function main() {

    let opcao: number;
 
    while (true) {
        console.log(colors.bg.black, colors.fg.magenta,
            "******************************************************");
        console.log("                                                     ");
        console.log("                LOJINHA DO HARRY                     ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os produtos             ");
        console.log("            3 - Listar os produtos por ID            ");
        console.log("            4 - Atualizar Dados do produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.bg.black, colors.fg.magentastrong, "\nNa lojinha do Harry tu garante o seu produto potterhead", colors.reset);
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:

                console.log("\n\nCadastrar Produto\n\n");
                keyPress()
                break;

            case 2:
                console.log("\n\nListar todos os produtos\n\n");
                keyPress()
                break;

            case 3:
                console.log("\n\nListar os produtos por ID\n\n");
                keyPress()
                break;

            case 4:
                console.log("\n\nAtualizar Dados do produto\n\n");
                keyPress()
                break;

            case 5:
                console.log("\n\nApagar Produto\n\n");
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