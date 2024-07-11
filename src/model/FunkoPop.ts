import { Produto } from "./Produto";

export class FunkoPop extends Produto {
    private _tamanho: string;

	constructor(id: number, tipo: number, preco: number, personagem: string ,tamanho: string) {
        super(id, tipo, preco, personagem);
		this._tamanho = tamanho;
	}


	public get tamanho(): string {
		return this._tamanho;
	}

	public set tamanho(value: string) {
		this._tamanho = value;
	}
    public visualizar(){
        super.visualizar()
        console.log(`\nTamanho: ${this._tamanho}`)
    }
 }
