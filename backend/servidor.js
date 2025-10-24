const express = require("express");
const cors = require("cors");
const porta = 3000;

const app = express();
app.use(express.json());
app.use(cors());

let VEICULOS = [{id: 1, placa:"ABC-1234", modelo: "Sedan", hora_Entrada: new Date().toISOString(), pago: true},
    {id: 1, placa:"ABC-1234", modelo: "Sedan",pago: true, hora_Entrada: new Date().toISOString(), pago: true},
    {id: 2, placa:"DEF-5678", modelo: "Camaro",pago: false, hora_Entrada: new Date().toISOString(), pago: true}
]
app.get("/", (req, res)=>{
    res.status(200).json({msg: "Hello"});
})

app.get("/",(req, res)=>{}
)
app.get("/lerveiculos", (req, res)=>{
    res.status(200).json(VEICULOS)
})

app.get("/lerveiculos/:id", (req, res)=>{
    const id = req.params.id;
    console.log(id);

    const meuCarro = VEICULOS.find(veiculo => veiculo.id === Number(14))

    res.status(200).json(carro);    
})

app.patch("/atualizarpagamento/:id",(req, res)=>{
    const id = Number(req.params.id);

    const veiculo = VEICULOS.find(x =>{x.id === id})
})

app.listen(porta,()=>{
    console.log(`servidor rodando no http://localhost:${porta}`);
})