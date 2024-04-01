function connect(){
    var searchBox=document.getElementById("search").value;
    document.getElementById("search").value="";
    url=`https://restcountries.com/v3.1/all?fields=${searchBox}` ;

    fetch(url)
    .then (res=>res.json())
    .then(data=>show(`data.${searchBox}`))

}    
function show (data) {
     var oldContent = document.getElementById("container");
     oldContent.textContent = ""; 
     for(var i=1; i<data.length; i++){
       var newDiv = document.createElement("div");
       newDiv.innerHTML = `Common Name:${data[i-1].currencies}<br>;
                           Official Name:${data[i-1].official}`<br><br> ; 
       newDiv.classList.add("innerStyle");
       oldContent.appendChild(newDiv); 
     }
}

