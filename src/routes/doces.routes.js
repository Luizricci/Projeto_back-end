import { Router } from "express";
const docesRoutes = Router();

const guloseimas = [
  {
    id: 1,
    nome: "Trufa",
    preco: 8.5,
  },
  {
    id: 2,
    nome: "Açaí",
    preco: 27.0,
  },
  {
    id: 3,
    nome: "Palha italiana",
    preco: 4.0,
  },
];

// rota para busca todos os itens do array guloseimas
docesRoutes.get("/", (req, res) => {
  return res.status(200).json(guloseimas);
});

// rota para criar nova guloseima
docesRoutes.post("/", (req, res) => {
  const { nome, preco } = req.body;
  const novoDoce = {
    id: guloseimas.length + 1,
    nome: nome,
    preco: preco,
  };
  guloseimas.push(novoDoce);
  return res.status(201).json(guloseimas);
});


//rota para buscar um elemento especifico do array guloseimas
docesRoutes.get("/:id", (req,res) => {
const { id } = req.params

//console.log(id);

const guloseima = guloseimas.find((doce) => doce.id === Number(id)
)
console.log(guloseima);


if (!guloseima){
    return res.status(404).send({message: "guloseima não encontrada!!!!!!!"})
}

return res.status(200).send(guloseima)
})

export default docesRoutes;
