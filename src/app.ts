// Imports da aplicação
import express from "express";
import cors from "cors";
import router from "./router";

// Inicializando o App
const app = express();

// Opções do Cors para as requisições
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

// Porta da aplicação
const port = process.env.PORT;

// Padronizando os returns de requisições
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Utilizando as rotas do router.ts
app.use("/", router);

// Listen do APP
app.listen(port, () => {
  console.log(`O app está rodando em http://localhost:${port}`);
});
