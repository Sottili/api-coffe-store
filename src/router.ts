import { Request, Response, Router } from "express";
import Coffee from "./models/coffe";
import { Admin } from "./firebase";
import { Coffe } from "./types/types";

const router = Router();
const db = Admin.firestore();

const coffeeInstance = new Coffee(db);

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
    const data: Coffe = {
      title: req.body.title || "",
      description: req.body.description || "",
      price: req.body.price || "",
      categories: req.body.categories,
      photo_url: req.body.photo_url || "",
    };
    try {
      await coffeeInstance.createCoffee(data);
      res.status(200).send("Café cadastrado com sucesso!");
    } catch (error) {
      res.status(500).send(error?.toString());
    }
  });
