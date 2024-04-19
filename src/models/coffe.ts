import { ICoffe } from "../types/types";

class Coffee {
  db: any;

  constructor(db: any) {
    this.db = db;
  }

  async getCoffees() {
    const usersRef = this.db.collection("coffees");
    const snapshot = await usersRef.get();

    let coffees: String[] = [];

    snapshot.forEach((doc: any) => {
      coffees.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return coffees;
  }

  async createCoffee(coffe: ICoffe) {
    const coffeeData = {
      title: coffe.title,
      description: coffe.description,
      price: coffe.price,
      categories: coffe.categories,
      photo_url: coffe.photo_url,
    };

    try {
      const coffeeRef = this.db.collection("coffees");
      await coffeeRef.add(coffeeData);
    } catch (error) {
      console.error("Erro ao cadastrar café:", error);
      throw error;
    }
  }
}

export default Coffee;
