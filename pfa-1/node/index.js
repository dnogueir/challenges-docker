const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'dbcontainer',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sqltable = `CREATE TABLE IF NOT EXISTS courseunit (id int not null auto_increment, name VARCHAR(255), primary key(id))`
const sql = `INSERT INTO courseunit(name) VALUES ('Docker'), ('Kubernetes'), ('RabbitMQ')`
const selectsql = `SELECT * FROM courseunit`
connection.query(sqltable)
connection.query(sql)

app.get('/', (rep,res) => {
    
    connection.query(selectsql, function(err, result, fields) {
        console.log(result)
        var str = '<ul>'
        result.forEach(function(re) {
            str += '<li>'+ re.name + '</li>';
          }); 
        str += '</ul>';
        str = '<h1>Full Cycle Rocks!</h1>' + str;
        console.log(str)
        res.send(str) 
    })
 
})

app.listen(port, () => {
    console.log('rodando na porta ' + port)
})