function GetSeason(){

    var temp = document.getElementById("temp").value;


    //alert("The temperatur is " + temp);

    //goal: send a request which looks like this:
    //http://localhost:61107/api/SeasonAPI/GetSeason/10
    //AJAX

    var URL = "http://localhost:61107/api/SeasonAPI/GetSeason/" + temp;

    var rq = new XMLHttpRequest();

    //where is this request sent to?
    //is the method GET or POST?
    //what should we do with the response?

    rq.onreadystatechange = function(){
        //ready state should be 4 AND status should be 200
        if(rq.readyState==4 && rq.status==200){
            //request is successful and the request is finished

            var Season = JSON.parse(rq.responseText);
            console.log(Season);
            console.log(rq.responseText);

            //Client-Side Rendering
            document.getElementById("place").innerHTML = Season.place;
            document.getElementById("SeasonName").innerHTML = Season.SeasonName;
            document.getElementById("temperature").innerHTML = Season.temp;
            document.getElementById("image").src="image/" + Season.SeasonName+".jpg";
            document.getElementById("PhotoLink").href = Season.url;
            var SeasonContainer = document.getElementById("SeasonContainer");
            SeasonContainer.style.display = "block";

        }
    }

    rq.open("GET", URL);
    rq.send();
}