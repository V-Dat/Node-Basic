// get the client
import mysql from "mysql2/promise";

// create the connection to database
const connectionPoll = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodejsbasic",
});

export default connectionPoll;
