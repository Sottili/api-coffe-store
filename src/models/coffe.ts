import { ICoffe } from "../types/types";

class Coffee {
  db: any;

  constructor(db: any) {
    this.db = db;
  }

  async getCoffees() {
    // Referência da collection
    const usersRef = this.db.collection("coffees");

    //Query no banco
    const snapshot = await usersRef.get();

    // Array tipado que vai receber a resposta da query
    let coffees: String[] = [];

    // Foreach passando por todos os itens da query e adicionando um por um no array que vai recebê-los
    snapshot.forEach((doc: any) => {
      coffees.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    // Return dos itens
    return coffees;
  }

  async createCoffee(coffe: ICoffe) {
    try {
      // Referência da collection
      const coffeeRef = this.db.collection("coffees");
      // Criação do café na collection
      await coffeeRef.add(coffe);
    } catch (error) {
      console.error("Erro ao cadastrar café:", error);
      throw error;
    }
  }
}

export default Coffee;
