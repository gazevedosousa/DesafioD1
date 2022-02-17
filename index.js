import * as db from './Config/database/db.js';
import server from './server.js'

const conectarDB = db.testaConexao();

server.get('/', (req, res) =>{
    return res.send({message: "Testando Servidor"})
})