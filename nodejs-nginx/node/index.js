const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sqltable = `CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name VARCHAR(255), primary key(id))`
const sql = `INSERT INTO people(name) values('Daniel')`
const selectsql = `SELECT * FROM people`
connection.query(sqltable)
connection.query(sql)

app.get('/', (rep,res) => {
    var name = '';
    
    connection.query(selectsql, function(err, result, fields) {
        console.log(result[0].name)
        name = result[0].name
        res.send(`<h1>Full Cycle</h1><p>${name}</p>`) 
    })
 
})

app.listen(port, () => {
    console.log('rodando na porta ' + port)
})