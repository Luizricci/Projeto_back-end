import { Router } from "express"
const docesRoutes = Router()


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
docesRoutes.get("/", (req, res) => {
    return res.status(200).json(guloseimas)
    })

docesRoutes.post("/", (req, res) => {
    const{nome, preco} =req.body
    const novoDoce = {
        id:guloseimas.length + 1,
        nome: nome,
        preco: preco
    }
    guloseimas.push(novoDoce)
    return res.status(201).json(guloseimas)
    })

export default docesRoutes