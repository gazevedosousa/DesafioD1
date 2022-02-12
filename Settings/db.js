import { createConnection } from 'mysql';

const connection = createConnection({
    host     : 'localhost',
    database : 'dbo_terracocida',
    user     : 'root',
    password : 'admin',
});

export function testaConexao(){

    connection.connect(function(err) {
        if (err) {
            console.error('Erro de Conexão: ' + err.stack);
            return;
        }

        console.log('Conectado com a id ' + connection.threadId);

    })};

export function queryDB(sqlQuery){

    connection.connect(function(err) {
        if (err) throw err;

        connection.query(sqlQuery, function (err, result, fields) {
          if (err) throw err;

          console.log(result);
        });

})};
