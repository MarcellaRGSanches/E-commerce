import { Produto } from "./Produto";

export class Caneca extends Produto {
    private _cor: string;

	constructor(id: number, tipo: number, preco: number, personagem: string ,cor: string) {
        super(id, tipo, preco, personagem);
		this._cor = cor;
	}


	public get cor(): string {
		return this._cor;
	}

	public set cor(value: string) {
		this._cor = value;
	}
    public visualizar(){
        super.visualizar()
        console.log(`\nCor: ${this._cor}`)
    }
 }
