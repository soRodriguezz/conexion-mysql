const mysql = require('mysql2');
require('dotenv').config();

try {
    const connection = mysql.createConnection(process.env.DATABASE_URL);
    console.log('Connected to PlanetScale!');
    
    connection.query('SELECT * FROM fruit', (_err, rows) => {
        console.log(rows);
    });
    
    // connection.query('INSERT INTO fruit VALUES("SEBASTIAN")');
    // connection.query('CREATE TABLE fruit(name VARCHAR(100))');
    
    connection.end();
}catch (_err) {
    console.log(_err);
}
