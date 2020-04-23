export default function authHeader() {
  let user = JSON.parse(localStorage.getItem("smd-user"));
  if (user) {
    return { Authorization: "Bearer " + user };
  } else {
    return {};
  }
}
