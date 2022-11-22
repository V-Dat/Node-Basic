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

async function createUser(req, res) {
  let { firstName, lastName, email, address } = req.body;
  if (!firstName || !lastName || !email || !address) {
    return res.status(200).json({
      message: "missing required params",
    });
  }
  await connectionPoll.execute(
    "insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );
  return res.redirect("/");
}

const homeController = {
  getUsers,
  getUserDetail,
  createUser,
};

export default homeController;
