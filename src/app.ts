import express from "express";
import cors from "cors";
import router from "./router";

const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/coffees", router);

app.listen(port, () => {
  console.log(`O app está rodando em http://localhost:${port}`);
});
