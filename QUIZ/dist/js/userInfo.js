//let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
//let user_time = sessionStorage.getItem("time");
// let user_email = sessionStorage.getItem("email");
//let ss = sessionStorage.getItem("sums");
//document.getElementById("name").innerHTML = user_name;
document.getElementById("points").innerHTML = user_points;

sessionStorage.setItem("points",0);
//document.getElementById("time_taken").innerHTML = user_time;
// document.getElementById("email").innerHTML = user_email;
//document.getElementById("sums").innerHTML = ss;
