import connection from "../configs/connectDB";
export default function homeController(req, res) {
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    return res.render("home/index.ejs", { dataUsers: results });
  });
}
