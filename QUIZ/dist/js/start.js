document.getElementById("map").disabled = true;
document.getElementById("geo").disabled = true;
document.getElementById("hunt").disabled = true;

let mapQuiz = null;
let guessQuiz = null;
let huntQuiz = null;
let i=parseInt(localStorage.getItem("c_pk"));


function submitForm(e, a) {
    e.preventDefault();
    //let name = document.forms["welcome_form"]["name"].value;
    // let email= document.forms["welcome_form"]["email"].value;
  
    //sessionStorage.setItem("name", name);
    sessionStorage.setItem("whichQuiz",a);
    // sessionStorage.setItem("email", email);
  
    location.href = "quiz.html";
}
getMapQuiz(i);
getGuessQuiz(i);
getHuntQuiz(i);


async function getMapQuiz(i){
  console.log("func linked");
    //await axios.post("http://127.0.0.1:8000/api/country_name_new/", 
    await axios.get(`https://toyca-app.herokuapp.com/api/mapquizfk/${i}`)
    .then(function (response) {
      mapQuiz=response.data;
      document.getElementById("map").disabled = false;
      sessionStorage.setItem("mapQuiz",JSON.stringify(mapQuiz));
      // sessionStorage.setItem("whichQuiz",1);
    })
}
async function getGuessQuiz(i){
  console.log("func linked");
    //await axios.post("http://127.0.0.1:8000/api/country_name_new/", 
    await axios.get(`https://toyca-app.herokuapp.com/api/geoguessquizfk/${i}`)
    .then(function (response) {
      guessQuiz=response.data;
      document.getElementById("geo").disabled = false;
      sessionStorage.setItem("guessQuiz",JSON.stringify(guessQuiz));
      // sessionStorage.setItem("whichQuiz",2);
    })
}
async function getHuntQuiz(i){
  console.log("func linked");
    //await axios.post("http://127.0.0.1:8000/api/country_name_new/", 
    await axios.get(`https://toyca-app.herokuapp.com/api/treasurequizfk/${i}`)
    .then(function (response) {
      huntQuiz=response.data;
      console.log(huntQuiz);
      document.getElementById("hunt").disabled = false;
      sessionStorage.setItem("huntQuiz",JSON.stringify(huntQuiz));
      // sessionStorage.setItem("whichQuiz",2);
    })
}




    // document.getElementById("ls").disabled = true;
//   var myVar = setInterval(myTimer, 1000);
  

//   function myTimer() {
//     var d = new Date();
//     //document.getElementById("demo").innerHTML = d.toLocaleTimeString();


// window.setInterval(function(){
// var date = new Date();
// var hr=19;
// var mn=51;
// var sc= 0;

// document.getElementById("startTime").innerHTML=hr+":"+mn+":"+sc;
// if ((date.getHours()=== hr ) && date.getMinutes()===mn && date.getSeconds()===sc)
// {
//     document.getElementById("ls").disabled = false;
//     //document.getElementById("dem").innerHTML="Hello34";
//     document.getElementById("ls").click();
// }else if(date.getHours()>= hr  && date.getMinutes()>=mn && date.getSeconds()>=sc)
// {

//     //document.getElementById("dem").innerHTML="Session Expired";
//     alert("Sorry you're late, the quiz has already been started");

// }

// }, 500);

  
//    // if (d.toLocaleTimeString()!="3:53:40 AM")
//    // {
//     //  document.getElementById("dem").innerHTML="Hello34";
//       //document.getElementById("ls").click();
      
//     //}
//   }