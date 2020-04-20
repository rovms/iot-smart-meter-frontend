export default function authHeader() {
  let user = JSON.parse(localStorage.getItem("smd-user"));
  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}

// export default function adminAuthHeader() {
//   let admin = JSON.parse(localStorage.getItem("smd-admin"));
//   if (admin && admin.token) {
//     return { Authorization: "Bearer " + admin.token };
//   } else {
//     return {};
//   }
// }
