// get the client
import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "nodejsbasic",
});

// simple query
connection.query("SELECT * FROM `users`", function (err, results, fields) {
  console.log("checking sql");
  console.log(results); // results contains rows returned by server
});

export default connection;
