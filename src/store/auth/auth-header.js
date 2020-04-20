export default function authHeader() {
  let user = JSON.parse(localStorage.getItem("smd-user"));
  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}
