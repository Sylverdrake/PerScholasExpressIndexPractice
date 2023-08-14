const express = require("express");
const app = express();
const PORT = 3000;
const pokemon = require("./models/pokemon.js")

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Pokemon App</h1><nav><a href='http://localhost:3000/pokemon'>Index</a></nav>");
    });

    app.get("/pokemon", (req, res) => {
        res.render("Index", {
            allPokemon: pokemon,
        });
    });

    app.post("/pokemon", (req, res) => {
        const newPokemon = pokemon.create();
        res.redirect("/pokemon");
        });
        
    app.get("/pokemon/new", (req, res) => {
    res.render("New");
    });

    app.get("/pokemon/:id", (req, res) => {
        const eachPokemon = pokemon[req.params.id];
        res.render("Show", {
            pokemon: eachPokemon,
        });
        });

app.listen(PORT, (req, res) => {
    console.log(`Listening`);
    });