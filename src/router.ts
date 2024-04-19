import { Request, Response, Router } from "express";
import { Admin } from "./firebase";

import Coffee from "./models/coffe";
import DeliveryItem from "./models/deliveryItem";

import { ICoffe } from "./types/types";

const router = Router();
const db = Admin.firestore();

const coffeeInstance = new Coffee(db);
const deliveryItemInstance = new DeliveryItem(db);

export default router
  .get("/", async (req: Request, res: Response) => {
    try {
      const coffees = await coffeeInstance.getCoffees();
      res.json(coffees);
    } catch (error) {
      res.status(500).send(error?.toString());
    }
  })
  .post("/", async (req: Request, res: Response) => {
    const data: ICoffe = req.body;
    try {
      await coffeeInstance.createCoffee(data);
      res.status(200).send("Café cadastrado com sucesso!");
    } catch (error) {
      res.status(500).send(error?.toString());
    }
  })
  .get("/delivery-items", async (req: Request, res: Response) => {
    try {
      const deliveryItems = await deliveryItemInstance.getDeliveryItems();
      res.json(deliveryItems);
    } catch (error) {
      res.status(500).send(error?.toString());
    }
  })
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
