export default function isLoggedIn() {
  const token = localStorage.getItem("kracada:token");
  const fname = localStorage.getItem("kracada:fname");
  const lname = localStorage.getItem("kracada:lname");
  
  if (token && fname && lname) {
    return true;
  } else {
    return false;
  }
}
