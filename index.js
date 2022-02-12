import { testaConexao } from './Settings/db.js';
import { queryDB } from './Settings/db.js';

//const conectarDB = testaConexao();

const sql = "SELECT * FROM login"

const query = queryDB(sql);