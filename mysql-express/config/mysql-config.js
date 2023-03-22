import mysql from 'mysql2';

export const pool = mysql.createPool({
  host: "localhost",
  port: 3307,
  user: "root",
  database: "green" // data selection
}).promise();