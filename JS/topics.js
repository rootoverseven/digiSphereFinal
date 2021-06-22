let topics = null;
async function getTopics(i){
  console.log("func linked");
    //await axios.post("http://127.0.0.1:8000/api/country_name_new/", 
    await axios.get(`https://toyca-app.herokuapp.com/api/topicfk/${i}`)
    .then(function (response) {
      topics=response.data;
      console.log(topics);
      document.getElementById("sidenav").innerHTML = "<h3>Topics:</h3><hr>";
      for(let s=0; s<topics.length; s++){
        document.getElementById("sidenav").innerHTML += `<a href="#" onclick="showData(${s})">${topics[s].topic_name}</a><hr>`;
      }
      document.getElementById("main").innerHTML=`
      ${topics[0].topic_description}
      `
      
    })
}
getTopics(parseInt(localStorage.getItem("c_pk")));

function showData(a){
  document.getElementById("main").innerHTML=`
    ${topics[a].topic_description}
  `;
  console.log(localStorage.getItem("c_pk"))
}


