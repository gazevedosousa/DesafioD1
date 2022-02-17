import express from "express";
import morgan from "morgan";


const PORT = process.env.PORT || 3000;
const server = express();

server.use(morgan("tiny"));
server.use(express.json());

server.listen(PORT, () => {
    console.log(`SERVIDOR RODANDO EM http://localhost:${PORT}`);
});

export default server;