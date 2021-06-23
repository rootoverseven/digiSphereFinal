// let state="abcda";

var c = 0;
var seconds2 = document.getElementById("countdown").textContent;
var countdown = setInterval(function(){
    if (sessionStorage.getItem("whichQuiz")==1)
    {
        seconds2--;

    }
    (seconds2 == 1) ? document.getElementById("plural").textContent = "c ," : document.getElementById("plural").textContent = "cs ,";
    document.getElementById("countdown").textContent = seconds2;
    if (seconds2 <= 0)
    {
	c++;
      //  clearInterval(countdown); 
        
	
        if(c%2==0)
        {
            seconds2 = 10;
            next();
        }else{
            seconds2=5;
            showAnswer();
            
        }
        
      //  document.getElementById("n").value = user_name;
    }
},1000);



function change(){
    c++
    if(c%2==0)
    {
        next();
        document.getElementById("btnNext").innerHTML="Show Answer";
    }else{
        showAnswer();
        document.getElementById("btnNext").innerHTML="Next";
        
    }
}

function selectState(){
    // if (state != sessionStorage.getItem("state"))
    change();
    // state = sessionStorage.getItem("state");
    sessionStorage.setItem("state", "abcd");

}

window.addEventListener("storage", selectState)

