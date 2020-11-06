//API key : 5a4400b1a6ce95a1939d7d7eec652ec9
		
$(document).ready(function(){
  var name =   $("#name").val();


  $("#get").click(function(){
  var name =   $("#name").val();

	  var a =  
`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=5a4400b1a6ce95a1939d7d7eec652ec9&lang=it`;

      


       $.getJSON(a, function(data){
		   
            $("#place").text(data.name);
            $("#temp").text(data.main.temp+"\u00B0C");
			$("#minmax").text("Min "+data.main.temp_min+"\u00B0C / Max "+data.main.temp_max+"\u00B0C");
            $("#humidity").text("Umidit\u00E0 "+data.main.humidity+"%");
			$("#wind").text("Vento "+data.wind.speed+" metro/sec");
			$("#clouds").text("Nuvolosit\u00E0 "+data.clouds.all+"%");
            $("#icon").html("<img src="+"http://openweathermap.org/img/wn/"+data.weather[0].icon+".png"+">"+data.weather[0].description);
			
			
			})
})

})