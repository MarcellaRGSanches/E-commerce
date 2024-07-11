export abstract class Produto{

   private _id: number;
   private _tipo: number;
   private _preco: number;
    private _persongem: string;

	constructor(id: number, tipo: number, preco: number, personagem: string) {
		this._id = id;
		this._tipo = tipo;
		this._preco = preco;
        this._persongem = personagem
	}

	public get id(): number {
		return this._id;
	}
	public get tipo(): number {
		return this._tipo;
	}
	public get preco(): number {
		return this._preco;
	}
	public get persongem(): string {
		return this._persongem;
	}


	public set id(value: number) {
		this._id = value;
	}
	public set tipo(value: number) {
		this._tipo = value;
	}
	public set preco(value: number) {
		this._preco = value;
	}
	public set persongem(value: string) {
		this._persongem = value;
	}
	
    
    public visualizar() {

        let tipo: string = "";
        switch (this._tipo) {
            case 1:
                tipo = "Funko POP";
                break;
            case 2:
                tipo = "Canecas ";
                break;
        }
        console.log ("***************************************************");
        console.log ("***************** DADOS DO PRODUTO ****************");
        console.log ("***************************************************");
        console.log (`\nID: ${this.id}`);
        console.log (`\nTipo: ${tipo}`);
        console.log (`\nPreço: ${this.preco}`);
        console.log (`\nPersonagem: ${this.persongem}`);
    }

};