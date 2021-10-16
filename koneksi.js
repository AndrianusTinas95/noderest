var mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'learn_node'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('mysql terkoneksi');
});

module.export = conn;