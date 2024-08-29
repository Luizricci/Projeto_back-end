import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

const guloseimas = [
    {
        id: 1,
        nome: "Trufa",
        preco: 8.50,
    },
    {
        id: 2,
        nome: "Açaí",
        preco: 27.0
    },
    {
        id: 3,
        nome: "Palha italiana",
        preco: 4.0
    }
]

const filmesMarcantes = [
    {
        id: 1001,
        titulo: "Hero",
        genero: "animação",
        emCartaz: false
    },
    {
        id: 1002,
        titulo: "harry potter",
        genero: "ficção",
        emCartaz: false
    },
    {
        id:1003,
        titulo: "divertidamente 2",
        genero: "ficção",
        emCartaz: true
    }
]
app.get("/", (req, res) => {
return res.status(200).send({ message:"Hello, World!"})
})

app.get("/doces", (req, res) => {
    return res.status(200).json(guloseimas)
    })
    
app.get("/filmes", (req, res) => {
return res.status(200).json(filmesMarcantes)
})

app.listen(port, () => {
    console.log(`👀 server started on http://localhost:${port}`)
})