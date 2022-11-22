import connectionPoll from "../configs/connectDB";

async function getUsers(req, res) {
  const [rows, fields] = await connectionPoll.execute("SELECT * FROM users");
  return res.render("home/index.ejs", { dataUsers: rows });
}

async function getUserDetail(req, res) {
  const id = req.params.id;
  const [rows, fields] = await connectionPoll.execute(
    `SELECT * FROM users where id=?`,
    [id]
  );
  return res.render("userDetail/index.ejs", { detailUser: rows[0] });
}

const homeController = {
  getUsers,
  getUserDetail,
};

export default homeController;
