var ch = 0;
var f = 0;

let mapQuiz = JSON.parse(sessionStorage.getItem("mapQuiz"));
let guessQuiz = JSON.parse(sessionStorage.getItem("guessQuiz"));
let huntQuiz = JSON.parse(sessionStorage.getItem("huntQuiz"));
let mapFinder = JSON.parse(sessionStorage.getItem("mapFinder"));
let questions = [];


if (sessionStorage.getItem("whichQuiz") == 1) {
  questions = [];
  for (let i = 0; i < mapQuiz.length; i++) {
    questions.push({
      id: i + 1,
      question: `Q${i + 1} ${mapQuiz[i].question}`,
      answer: `${mapQuiz[i].correct_option}`,
      image: mapQuiz[i].map_img_url,
      options: [
        `${mapQuiz[i].option1}`,
        `${mapQuiz[i].option2}`,
        `${mapQuiz[i].option3}`,
        `${mapQuiz[i].option4}`,
        "Don't Know"
      ]
    })
  }
} else if (sessionStorage.getItem("whichQuiz") == 2) {
  questions = [];

  for (let i = 0; i < guessQuiz.length; i++) {
    questions.push({
      id: i + 1,
      question: `Q${i + 1} ${guessQuiz[i].question}`,
      answer: `${guessQuiz[i].correct_option}`,
      image: guessQuiz[i].geo_img_url,
      explanation: guessQuiz[i].explanation,
      options: [
        `${guessQuiz[i].option1}`,
        `${guessQuiz[i].option2}`,
        `${guessQuiz[i].option3}`,
        `${guessQuiz[i].option4}`,
        "Don't Know"
      ]
    })
  }
}
else if (sessionStorage.getItem("whichQuiz") == 3) {
  questions = [];

  for (let i = 0; i < huntQuiz.length; i++) {
    questions.push({
      id: i + 1,
      question: `Q${i + 1} ${huntQuiz[i].question}`,
      answer: `${huntQuiz[i].correct_option}`,
      image: huntQuiz[i].question_img_url,
      explanation: huntQuiz[i].explanation,
      options: [
        `${huntQuiz[i].option1}`,
        `${huntQuiz[i].option2}`,
        `${huntQuiz[i].option3}`,
        `${huntQuiz[i].option4}`,
        "Don't Know"
      ]
    })
  }
}
else if (sessionStorage.getItem("whichQuiz") == 4) {

  questions = [];

  for (let i = 0; i < mapFinder.length; i++) {
    questions.push({
      id: i + 1,
      question: `Q${i + 1} ${mapFinder[i].question}`,
      answer: `${mapFinder[i].answer}`,
      image:`${mapFinder[i].img_url}`,
    })
  }
}


let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);

};


var chk = 0;
var sums = 0;
var unchk = 0;

function showAnswer() {
  if (sessionStorage.getItem("whichQuiz") != 4) {
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    console.log(user_answer)
    if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
    document.getElementById("quizlist").innerHTML = `<li class="option">${questions[question_count].answer}</li>`
    if (sessionStorage.getItem("whichQuiz") == 2 || sessionStorage.getItem("whichQuiz") == 3) {
      document.getElementById("quizlist").innerHTML += `<p style="padding:20px;">Explanation: ${questions[question_count].explanation}</p>`
    }
    let option = document.querySelectorAll("li.option");
    option[0].classList.add("active");


    sessionStorage.setItem("sums", sums);
  }
  else {
      document.getElementById("quizHeading").innerHTML = `
      <ul>
        You have choosen ${sessionStorage.getItem("state")},
        <br>        
      </ul>
      <button class='btn-next' id="btnNext" onclick='change()'>
        Show Answer
      </button>
      <h4>Images Coming from ${questions[question_count].answer}</h4>`;
      document.getElementById("quizHeading").innerHTML += `<br><img src=${questions[question_count].image} alt="">`;

  }



}

function next() {
  ch++;
  f = 0;

  //document.write(sums);
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    clearInterval(countdown);
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  //console.log(question_count);

  // let user_answer = document.querySelector("li.option.active").innerHTML;
  // // check if the answer is right or wrong
  // if (user_answer == questions[question_count].answer) {
  //   points += 10;
  //   sessionStorage.setItem("points", points);
  // }
  // console.log(points);



  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  if (sessionStorage.getItem("whichQuiz") != 4) {
    let [first, second, third, fourth, fifth] = questions[count].options;

    question.innerHTML = `
    <div id="quizHeading">
    <h2>${questions[count].question}</h2>
    <ul id="quizlist" class="option_group">
      <li class="option">${first}</li>
      <li class="option">${second}</li>
      <li class="option">${third}</li>
      <li class="option">${fourth}</li>
      <li class="option">${fifth}</li>
    </ul> 
    </div>
    <div class="imgWrapper">
    <img src=${questions[count].image} alt="">
    <a class="btn-next" href="./start.html">Go Back</a>
    </div>
    `;

    if (sessionStorage.getItem("whichQuiz") != 1){
      document.getElementById("quizHeading").innerHTML+= "<button class='btn-next' id='btnNext' onclick='change()'>Show Answer</button>"
    }

    toggleActive();
  }
  else if (sessionStorage.getItem("whichQuiz") == 4){
    question.innerHTML = `
    <div id="quizHeading">
    <h2>${questions[count].question}</h2>
    <button class='btn-next' id="btnNext" onclick='change()'>Show Answer</button>
  </div>
  <div class="imgWrapper">
  <a class="btn-next" href="./start.html">Go Back</a>
  </div>
    `;
  }
}





function toggleActive() {
  let option = document.querySelectorAll("li.option");
  option[4].classList.add("active");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {


      if (f < 1) {

        f = 3;



        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {


            option[i].classList.remove("active");


          }

        }
        option[i].classList.add("active");


      }

    };
  }
}



