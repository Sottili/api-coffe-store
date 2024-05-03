<h1 align="center" style="font-weight: bold;">Coffe Delivery API 💻</h1>

<p align="center">
    <b>System to Delivery Coffes</b>
</p>

<h2 id="technologies">💻 Technologies</h2>

- Typescript
- Firebase
- NodeJS

<h2 id="started">🚀 Getting started</h2>

How to run this project locally.

<h3>Prerequisites</h3>

Prerequisites to run project:

- [NodeJS](https://nodejs.org/)
- [Git](https://git-scm.com/)

<h3>Cloning</h3>

How to clone project

```bash
git clone https://github.com/Sottili/api-coffe-store.git
```

<h3>Starting</h3>

After clone the project, use below command lines to execute.

```bash
cd project-name
npm i (install dependencies)
npm run dev (to execute this project)
```

<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /</kbd>     | retrieves coffes info
| <kbd>POST /</kbd>    | create new coffe in database 
| <kbd>GET /delivery-items</kbd>     | retrieves coffes into Delivery Cart
| <kbd>POST /delivery-items</kbd>    | create new coffe into Delivery Cart

<h3 id="get-auth-detail">GET /</h3>

**RESPONSE**
```json
{
  "id":"4gwprqtYniVarCpg3irB",
  "description":"Café expresso tradicional com espuma cremosa.",
  "categories":["Tradicional"],
  "photo_url":"https://i.postimg.cc/cJtqx7tv/expresso-cremoso.png",
  "title":"Expresso Cremoso",
  "quantity":0,
  "price":9.9
}
```

<h3 id="post-auth-detail">POST /</h3>

**REQUEST**
```json
{
  "description":"Café expresso tradicional com espuma cremosa.",
  "categories":["Tradicional"],
  "photo_url":"https://i.postimg.cc/cJtqx7tv/expresso-cremoso.png",
  "title":"Expresso Cremoso",
  "quantity":0,
  "price":9.9
}
```

**RESPONSE**
```json
{
  "return": "a json enviate to database collection coffes"
}
```

<h3 id="get-auth-detail">GET /delivery-items </h3>

**RESPONSE**
```json
{
  "id":"4gwprqtYniVarCpg3irB",
  "description":"Café expresso tradicional com espuma cremosa.",
  "categories":["Tradicional"],
  "photo_url":"https://i.postimg.cc/cJtqx7tv/expresso-cremoso.png",
  "title":"Expresso Cremoso",
  "quantity":0,
  "price":9.9
}
```

<h3 id="post-auth-detail">POST /delivery-items</h3>

**REQUEST**
```json
{
  "description":"Café expresso tradicional com espuma cremosa.",
  "categories":["Tradicional"],
  "photo_url":"https://i.postimg.cc/cJtqx7tv/expresso-cremoso.png",
  "title":"Expresso Cremoso",
  "quantity":0,
  "price":9.9
}
```

**RESPONSE**
```json
{
  "return": "a json enviate to database collection delivery-items"
}
```

<h2 id="colab">🤝 Collaborators</h2>

Thanks to contribute this project!

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/91507688?v=4" width="100px;" alt="Filipe Sottili Profile Picture"/><br>
        <sub>
          <b>Filipe Sottili</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/94875270?v=4" width="100px;" alt="Juan Pablo Profile Picture"/><br>
        <sub>
          <b>Juan Pablo</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
