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
        <h2>${topics[0].topic_name}</h2>
        <img src="${topics[0].topic_image_url}" alt="">
        <p>${topics[0].topic_description}</p>
        <iframe src="${topics[0].topic_video_url}" frameborder="0"></iframe>
      `
      
    })
}
getTopics(parseInt(localStorage.getItem("c_pk")));

function showData(a){
  document.getElementById("main").innerHTML=`
    <h2>${topics[a].topic_name}</h2>
    <img src="${topics[a].topic_image_url}" alt="">
    <p>${topics[a].topic_description}</p>
    <iframe src="${topics[a].topic_video_url}" frameborder="0"></iframe>
  `;
  console.log(localStorage.getItem("c_pk"))
}


