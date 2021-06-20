localStorage.setItem("c_pk", 99900);

allStates=null;
allMaps=null;







  


function closeInfo(){
  localStorage.setItem("c_pk", 99900);
  document.getElementById("infoWrapper").style.display = "none";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("attemptQuizButton").style.display = "none";
  document.getElementById("video-box").innerHTML="";
}

function quizStart(){
  document.getElementById("infoWrapper").style.display = "none";
  document.getElementById("attemptQuizButton").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("video-box").innerHTML="";
  document.getElementById("quizQuestions").innerHTML = "Getting Data";

  getQuizApi(parseInt(localStorage.getItem("c_pk")));
}

let countryQuiz= null;
async function getQuizApi(q){
  console.log("getting quiz");
    //await axios.post("http://127.0.0.1:8000/api/country_name_new/", 
    await axios.get(`https://toyca-app.herokuapp.com/api/quiz/${q}`)
    .then(function (response) {
      countryQuiz=response.data;
      console.log(countryQuiz);
      // document.getElementById("stateText").innerHTML = "";
      document.getElementById("quizQuestions").innerHTML = "";
      document.getElementById("quizTitle").innerHTML = `<h2>${country.country_name} Quiz</h2>`;
      for(let s=0; s<countryQuiz.length; s++){
        
        document.getElementById("quizQuestions").innerHTML += `
        <strong id="q${s+1}" answer="${countryQuiz[s].correct_option}">${countryQuiz[s].question}</strong>
			  <br>
			  <br>
			  <br>
			  <div id="q${s+1}a" onclick="setAnswer('q${s+1}', 'q${s+1}a', 'span${s+1}')" class="stateButton quizbtn">${countryQuiz[s].option1}</div>
			  <br>
			  <div id="q${s+1}b" onclick="setAnswer('q${s+1}', 'q${s+1}b', 'span${s+1}')" class="stateButton quizbtn">${countryQuiz[s].option2}</div>
			  <br>
			  <div id="q${s+1}c" onclick="setAnswer('q${s+1}', 'q${s+1}c', 'span${s+1}')" class="stateButton quizbtn">${countryQuiz[s].option3}</div>
			  <br>
			  <div id="q${s+1}d" onclick="setAnswer('q${s+1}', 'q${s+1}d', 'span${s+1}')" class="stateButton quizbtn">${countryQuiz[s].option4}</div>
			  <br>

			  <span id="span${s+1}">Answer</span>
        
			  <br> 
			  <br>
        `

      }
    })
}



let country=null;
async function runScript(i){
  console.log("func linked");
    //await axios.post("http://127.0.0.1:8000/api/country_name_new/", 
    await axios.get(`https://toyca-app.herokuapp.com/api/country/${i}`)
    .then(function (response) {
        country = response.data;
        console.log(country);

        // document.getElementById("country_name").innerHTML= `Country: ${country.country_name}`
        // document.getElementById("no_of_states").innerHTML= `Country: ${country.no_of_states}`
        // document.getElementById("country_population").innerHTML= `Country: ${country.country_population}`
        // document.getElementById("continent").innerHTML= `Country: ${country.continent}`
        // document.getElementById("mother_tongue").innerHTML= `Country: ${country.mother_tongue}`
        // document.getElementById("country_area").innerHTML= `Country: ${country.country_area}`
        // document.getElementById("country_languages").innerHTML= `Country: ${country.country_languages}`
        // document.getElementById("flag_url").innerHTML= `Country: ${country.flag_url}`
        // document.getElementById("country_longitude").innerHTML= `Country: ${country.country_longitude}`
        // document.getElementById("country_latitude").innerHTML= `Country: ${country.country_description}`
        // document.getElementById("country_rivers").innerHTML= `Country: ${country.country_rivers}`
        // document.getElementById("country_capital").innerHTML= `Country: ${country.country_capital}`
        // document.getElementById("head_of_country").innerHTML= `Country: ${country.head_of_country}`
        // document.getElementById("country_video_url").innerHTML= `Country: ${country.country_video_url}`
        document.getElementById("info-box").innerHTML = `
        <div id="info-title" class="boxTitle">
					<strong> Information </strong>
				</div>
        <div id="country_name" class="BoxText">
          <b style="color:#C473FF">Country:</b> ${country.country_name}
        </div>
        <div id="continent" class="BoxText">
          <b style="color:#C473FF">Continent:</b> ${country.continent}
        </div>
        <div id="no_of_states" class="BoxText">
          <b style="color:#C473FF">No. of states/UT:</b> ${country.no_of_states}
        </div>
        <div id="country_population" class="BoxText">
          <b style="color:#C473FF">Population:</b> ${country.country_population}
        </div>
        <div id="mother_tongue" class="BoxText">
          <b style="color:#C473FF">Mother tongue:</b> ${country.mother_tongue}
        </div>
        <div id="country_languages" class="BoxText">
          <b style="color:#C473FF">Languages:</b> ${country.country_languages}
        </div>
        <div id="country_area" class="BoxText">
          <b style="color:#C473FF">Area:</b> ${country.country_area}
        </div>
        <div id="country_longitude" class="BoxText">
          <b style="color:#C473FF">Longitude:</b> ${country.country_longitude}
        </div>
        <div id="country_latitude" class="BoxText">
          <b style="color:#C473FF">Latitude:</b> ${country.country_latitude}
        </div>
        <div id="country_rivers" class="BoxText">
          <b style="color:#C473FF">Rivers:</b> ${country.country_rivers}
        </div>
        <div id="country_capital" class="BoxText">
          <b style="color:#C473FF">Capital:</b> ${country.country_capital}
        </div>
        <div id="head_of_country" class="BoxText">
          <b style="color:#C473FF">Country head:</b> ${country.head_of_country}
        </div>
        `
        document.getElementById("disc-box").innerHTML = `
        <div id="disc-title" class="boxTitle">
					<strong> About ${country.country_name} </strong>
				</div>
        <div id="disc-text" class="BoxText">
        <img src="${country.flag_url}" alt="">
        <br>
          ${country.country_description}
				</div>
        `
        document.getElementById("video-box").innerHTML= `<iframe width="100%" height="100%" frameBorder="0" src="${country.country_video_url}">
        </iframe>`;


        
        
    })
}

async function getAllStates(i){
  console.log("func linked");
    //await axios.post("http://127.0.0.1:8000/api/country_name_new/", 
    await axios.get(`https://toyca-app.herokuapp.com/api/statefk/${i}`)
    .then(function (response) {
      allStates=response.data;
      console.log(allStates);
      document.getElementById("stateText").innerHTML = "";
      for(let s=0; s<allStates.length; s++){
        
        document.getElementById("stateText").innerHTML += `<div onclick="stateApiCall(${allStates[s].pk})" class="stateButton">${allStates[s].state_name}</div>`

      }
    })
}
async function getAllMaps(i){
  console.log("func linked");
    //await axios.post("http://127.0.0.1:8000/api/country_name_new/", 
    await axios.get(`https://toyca-app.herokuapp.com/api/mapsfk/${i}`)
    .then(function (response) {
      allMaps=response.data;
      console.log(allMaps);
      document.getElementById("image_list").innerHTML = "";
      document.getElementById("mainMap-text").innerHTML = "";

      for(let m=0; m<allMaps.length; m++){
        document.getElementById("image_list").innerHTML += `
        <li>
          <a href="${allMaps[m].map_url}" title="${allMaps[m].map_type} Map">
            <img src="${allMaps[m].map_url}" alt="${allMaps[m].map_type} Map">
          </a>
        </li>
        `
        if(allMaps[m].map_type==="Political"){
          document.getElementById("caption").innerHTML = `Political Map`;
          document.getElementById("mainMap-text").innerHTML = `<img src="${allMaps[m].map_url}" alt="" id="image">`;
        }
      }
      setMaps();
    })
}


function countryApiCall(e){
  document.getElementById("info-box").innerHTML = `Getting Data`;
  document.getElementById("disc-box").innerHTML = `Getting Data`;
  document.getElementById("video-box").innerHTML= `Getting Data`;
  document.getElementById("stateText").innerHTML = "Getting Data";
  document.getElementById("image_list").innerHTML = "Getting Data";
  document.getElementById("mainMap-text").innerHTML = "Getting Data";

  getAllStates(parseInt(localStorage.getItem("c_pk")));
  getAllMaps(parseInt(localStorage.getItem("c_pk")))
  runScript(parseInt(localStorage.getItem("c_pk")));
  console.log(localStorage.getItem("c_pk"))
}

let singleState= null;

async function stateApiCall(a){
  document.getElementById("info-box").innerHTML = `Getting Data`;
  document.getElementById("disc-box").innerHTML = `Getting Data`;
  document.getElementById("video-box").innerHTML= `Getting Data`;
  document.getElementById("image_list").innerHTML = "Getting Data";
  document.getElementById("mainMap-text").innerHTML = "Getting Data";
  console.log("func linked");
    //await axios.post("http://127.0.0.1:8000/api/country_name_new/", 
    await axios.get(`https://toyca-app.herokuapp.com/api/state/${a}`)
    .then(function (response) {
        singleState = response.data;
        console.log(country);

        // document.getElementById("country_name").innerHTML= `Country: ${country.country_name}`
        // document.getElementById("no_of_states").innerHTML= `Country: ${country.no_of_states}`
        // document.getElementById("country_population").innerHTML= `Country: ${country.country_population}`
        // document.getElementById("continent").innerHTML= `Country: ${country.continent}`
        // document.getElementById("mother_tongue").innerHTML= `Country: ${country.mother_tongue}`
        // document.getElementById("country_area").innerHTML= `Country: ${country.country_area}`
        // document.getElementById("country_languages").innerHTML= `Country: ${country.country_languages}`
        // document.getElementById("flag_url").innerHTML= `Country: ${country.flag_url}`
        // document.getElementById("country_longitude").innerHTML= `Country: ${country.country_longitude}`
        // document.getElementById("country_latitude").innerHTML= `Country: ${country.country_description}`
        // document.getElementById("country_rivers").innerHTML= `Country: ${country.country_rivers}`
        // document.getElementById("country_capital").innerHTML= `Country: ${country.country_capital}`
        // document.getElementById("head_of_country").innerHTML= `Country: ${country.head_of_country}`
        // document.getElementById("country_video_url").innerHTML= `Country: ${country.country_video_url}`
        document.getElementById("info-box").innerHTML = `
        <div id="info-title" class="boxTitle">
          <strong> Information </strong>
        </div>
        <div id="country_name" class="BoxText">
          State: ${singleState.state_name}
        </div>
        <div id="country_name" class="BoxText">
          Country: ${singleState.country_name}
        </div>
        <div id="no_of_cities" class="BoxText">
          No. of cities: ${singleState.no_of_cities}
        </div>
        <div id="state_population" class="BoxText">
          Population: ${singleState.state_population}
        </div>
        <div id="country_languages" class="BoxText">
          Languages: ${singleState.state_languages}
        </div>
        <div id="state_area" class="BoxText">
          Area: ${singleState.state_area}
        </div>
        <div id="state_longitude" class="BoxText">
          Longitude: ${singleState.state_longitude}
        </div>
        <div id="state_latitude" class="BoxText">
          Latitude: ${singleState.state_latitude}
        </div>
        <div id="state_rivers" class="BoxText">
          Rivers: ${singleState.state_rivers}
        </div>
        <div id="state_capital" class="BoxText">
          Capital: ${singleState.state_capital}
        </div>
        <div id="head_of_state" class="BoxText">
          State head: ${singleState.head_of_state}
        </div>
        `
        document.getElementById("disc-box").innerHTML = `
        <div id="disc-title" class="boxTitle">
          <strong> About ${singleState.state_name} </strong>
        </div>
        <div id="disc-text" class="BoxText">
          ${singleState.state_description}
        </div>
        `
        document.getElementById("video-box").innerHTML= `<iframe width="100%" height="100%" frameBorder="0" src="${singleState.state_video_url}?autoplay=1&mute=1">
        </iframe>`;

        document.getElementById("caption").innerHTML = `${singleState.state_name} Map`;
        document.getElementById("mainMap-text").innerHTML = `<img src="${singleState.state_map_url}" alt="" id="image">`;
        
        document.getElementById("image_list").innerHTML = `
        <li>
          <a href="${singleState.state_map_url}" title="${singleState.state_name} Map">
            <img src="${singleState.state_map_url}" alt="${singleState.state_name} Map">
          </a>
        </li>
        `
      setMaps();  
    })

}

window.addEventListener("storage", countryApiCall);

function setMaps() {
	// preload images
    $("#image_list a").each( (index, link) =>{
        const image = new Image();
        image.src = link.href;      
    });

	
	// set up event handlers for links    
	$("#image_list a").click((evt)=> {

		const imageURL = $(evt.currentTarget).attr("href");

		const caption = $(evt.currentTarget).attr("title");

        //evt.currentTarget is the clicked image
        $("#image").fadeOut( 500, function(){ 
                  
			$("#image").attr("src", imageURL);
			$("#image").fadeIn(500);
               });
        				
		$("#caption").fadeOut( 500, function(){ 
                  
			$("#caption").text(caption);
			$("#caption").fadeIn(500);
               });
		

		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}

function setAnswer(q, did, s){
  console.log(document.getElementById(q).getAttribute("answer"));
  console.log(document.getElementById(did).innerText);
  document.getElementById(s).style.display="block";
  document.getElementById(s).innerHTML = `Correct Ans: ${document.getElementById(q).getAttribute("answer")}`;
  
}

// let x='hi';


// window.addEventListener('storage', function(e) {  
//  console.log('Woohoo, someone changed my localstorage va another tab/window!');
// });

// function setData(){
//   console.log('SET');
//   localStorage.setItem('superpower', 'heatviision');
//   console.log(localStorage.getItem('superpower'));
//   if(x != localStorage.getItem('superpower')){
//     console.log("localestoragechanged")
//     x=localStorage.getItem('superpower')
//   }
// }

// function clearData(){
//   console.log('CLEAR');
//   localStorage.setItem('superpower', 'new');
//   console.log(localStorage.getItem('superpower'));
//   if(x != localStorage.getItem('superpower')){
//     console.log("localestoragechanged")
//     x=localStorage.getItem('superpower')
//   }
// }
