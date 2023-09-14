import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1', //IP
    port: 3306, //端口
    database: 'my_db_01',
    user: 'root',
    password: 'ymx19930118',
})

export default pool.promise()