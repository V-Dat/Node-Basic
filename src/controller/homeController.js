import connectionPoll from "../configs/connectDB";
import ERROR_MESSAGE from "../constant/errorMessage";
import QUERY from "../constant/query";
import VIEW from "../constant/view";

async function getUsers(req, res) {
  const [rows] = await connectionPoll.execute(QUERY.GET_ALL_USER);
  return res.render(VIEW.HOME, { dataUsers: rows });
}

async function getUserDetail(req, res) {
  const id = req.params.id;
  const [rows] = await connectionPoll.execute(QUERY.GET_USER_BY_ID, [id]);
  return res.render(VIEW.USER_DETAIL, { user: rows[0] });
}

async function createUser(req, res) {
  let { firstName, lastName, email, address } = req.body;
  if (!firstName || !lastName || !email || !address) {
    return res.status(200).json({
      message: ERROR_MESSAGE.INSERT_FAIL,
    });
  }
  await connectionPoll.execute(QUERY.INSERT_USER, [
    firstName,
    lastName,
    email,
    address,
  ]);
  return res.redirect("/");
}

async function getUserEditPage(req, res) {
  const id = req.params.id;
  const [rows] = await connectionPoll.execute(QUERY.GET_USER_BY_ID, [id]);
  return res.render(VIEW.USER_EDIT, { user: rows[0] });
}

async function deleteUser(req, res) {
  const id = req.body.id;
  await connectionPoll.execute(QUERY.DELETE_USER_BY_ID, [id]);
  return res.redirect("/");
}

const homeController = {
  getUsers,
  getUserDetail,
  createUser,
  deleteUser,
  getUserEditPage,
};

export default homeController;
