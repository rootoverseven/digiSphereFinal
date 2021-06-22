var ch=0;
var f=0;
let questions = [
  {
    id: 1,
    question: "Q1. Who is Tarun's r?",
    answer: "Robert Downey Jr",
    options: [
      "Robert Downey Jr",
      "Ranbir Kapoor",
      "Disha Patani",
      "None of these",
      "Don't Know"
    ]
  },
  {
    id: 2,
    question: "The Correct answer is:",
    answer: "hello",
    options: [
      "Robert Downey Jr",
      "-------",
      "-------",
      "-------",
      "-------"
    ]
  },
  {
    id: 3,
    question: "Q2. What did Tarun Study?",
    answer: "Information Technology",
    options: [
      "Information Technology",
      "Management",
      "Social Science",
      "None of these",
      "Don't Know"
    ]
  },
  {
    id: 4,
    question: "The Correct answer is:",
    answer: "hello",
    options: [
      "Information Technology",
      "-------",
      "-------",
      "-------",
      "-------"
    ]
  },
  {
    id: 5,
    question: "Q3. What is Tarun's favourite food?",
    answer: "Paneer",
    options: [
      "Chowmin",
      "Biryani",
      "Paneer",
      "None of these",
      "Don't Know"
    ]
  },
  {
    id: 6,
    question: "The Correct answer is:",
    answer: "hello",
    options: [
      "-------",
      "-------",
      "Paneer",
      "-------",
      "-------"
    ]
  },
    {
    id: 7,
    question: "Q4. Who is best?",
    answer: "Piyush",
    options: [
      "Spider-man",
      "Batman",
      "Piyush",
      "Goku",
      "Don't Know"
    ]
  },
  {
    id: 8,
    question: "The Correct answer is:",
    answer: "hello",
    options: [
      "-------",
      "-------",
      "Piyush",
      "-------",
      "-------"
    ]
  }
  
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};


var chk= 0;
var sums=0;
var unchk=0;

function next() {
  ch++;
  f=0;

   //document.write(sums);
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    clearInterval(countdown);
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth, fifth] = questions[count].options;

  question.innerHTML = `
  <h2>${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
  <li class="option">${fifth}</li>
</ul> 
  `;
  toggleActive();
  sessionStorage.setItem("sums", sums);
}


      
      

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  option[4].classList.add("active");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {


      if(f<1)
      {

        f=3;
      
      
    
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          
          
          option[i].classList.remove("active");

          
        } 
       
      } 
      option[i].classList.add("active");
      chk= 10-seconds2;
      //
      if(ch%2==0)
      {
        sums=sums+chk;
        //f++;
        //unchk=chk;
      }

    }
      
    };
  }
}


  
    