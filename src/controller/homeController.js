import connectionPoll from "../configs/connectDB";
export default async function homeController(req, res) {
  const [rows, fields] = await connectionPoll.execute("SELECT * FROM `users`");
  return res.render("home/index.ejs", { dataUsers: rows });
}
