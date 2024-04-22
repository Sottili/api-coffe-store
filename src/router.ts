//Imports da aplicação
import { Request, Response, Router } from "express";
import { Admin } from "./firebase";

import Coffee from "./models/coffe";
import DeliveryItem from "./models/deliveryItem";

import { ICoffe } from "./types/types";

// Router do express para criação das rotas
const router = Router();

// Db trago do firebase
const db = Admin.firestore();

// Instances para manipulação dos métodos de cada classe de item.
const coffeeInstance = new Coffee(db);
const deliveryItemInstance = new DeliveryItem(db);

export default router
  //  Rota de Get dos Coffes trazendo os dados do banco
  .get("/", async (req: Request, res: Response) => {
    try {
      const coffees = await coffeeInstance.getCoffees();
      res.json(coffees);
    } catch (error) {
      res.status(500).send(error?.toString());
    }
  })
  //  Rota de Post para criar um novo Coffe no banco
  .post("/", async (req: Request, res: Response) => {
    const data: ICoffe = req.body;
    try {
      await coffeeInstance.createCoffee(data);
      res.status(200).send("Café cadastrado com sucesso!");
    } catch (error) {
      res.status(500).send(error?.toString());
    }
  })
  // Rota de Get dos Coffes trazendo eles do banco
  .get("/delivery-items", async (req: Request, res: Response) => {
    try {
      const deliveryItems = await deliveryItemInstance.getDeliveryItems();
      res.json(deliveryItems);
    } catch (error) {
      res.status(500).send(error?.toString());
    }
  })
  // Rota para adicioanr um produto ao carrinho
  .post("/delivery-items", async (req: Request, res: Response) => {
    const data: ICoffe = req.body;
    try {
      await deliveryItemInstance.createDeliveryItem(data);
      res
        .status(201)
        .json({ message: "Item de entrega cadastrado com sucesso!" });
    } catch (error) {
      res.status(500).send(error?.toString());
    }
  });
