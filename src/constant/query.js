const QUERY = {
  GET_ALL_USER: "select * from users",
  GET_USER_BY_ID: "select * from users where id=?",
  DELETE_USER_BY_ID: "delete from users where id = ?",
  INSERT_USER:
    "insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)",
};

export default QUERY;
