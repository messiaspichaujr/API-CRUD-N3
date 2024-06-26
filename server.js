import express from "express";
import cors from "cors";
import db from "./config/database.js";
import { config } from "dotenv-safe";
import jwt from "jsonwebtoken";
import sequelize from "./config/database.js";
import bodyParser from "body-parser";
import { verify } from "crypto";
import proprietarioRoutes from "./routes/proprietario_routes.js";
import veiculoRoutes from "./routes/veiculos_routes.js";

const server = express();

server.use(express.json());
server.use(cors());

//--------------------TOKEN ABAIXO--------------------------------

const app = express() //para construir as rotas
app.use(bodyParser.json())
 
app.get('/', (req,res,next) => {
    res.json({message: "Server base '/' está no ar"})
})
 
app.get('/exemplo', verifyJWT, (req, res, next) => {
    console.log("Retorno do exemplo mockado....")
    res.json([{id:1,nome:'Messias'}])
})
 
app.post('/login', (req, res, next) => {
    if ((req.body.user === 'Messias') && (req.body.pwd === '123'))
        {
            const id = 1
            const token = jwt.sign({id}, process.env.SECRET, {
                expiresIn:300
            })
            return res.json({ auth:true, token: token})
        }
        res.status(500).json({message: 'login inválido!'})
})
 
app.post('/logout', function(req, res){
    res.json ({ auth: false, token: null})
})
 
function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token']
    if (!token) return res.status(401).json({auth:false, message: "Não há token"})
 
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if (err) return res.status(500).json({auth:false, message:"Erro com autenticação"})
           
        req.userId = decoded.id
        next()
 
 
        })
}

//----------------------------------------------------

try {
    await db.authenticate();
    console.log("Conexão com o Mysql estabelecida");
} catch (e) {
    console.log("Conexão com o Mysql Não estabelecida", e);
}

// Use as rotas de proprietarios
server.use('/api', proprietarioRoutes);
server.use('/api', veiculoRoutes);

server.listen(5000, () => console.log("servidor executando em http://localhost:5000"));
