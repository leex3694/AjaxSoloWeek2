
$(document).ready(function() {

    $.ajax({
    	url: 'data.json'
    }).done(function(response){
        namesArray = response      
        console.log(response);


var colorV;
    for (var i = 0; i < response.length; i++){
    	console.log(response);
    	
    	// this works and is done through stylesheet
	    	// var $content = '<div class="color' +i+'" >' + '<p>' + response[i].color + "<br>" + response[i].value + "</p>" + 
	    	//  "<br>" + "</div>";
	    	// $(".tempContent").append($content)
	    	

	    //I prefer this way that takes it in and styles it at once according to the value assigned to object!
    	colorV = response[i].value
    	var $content = '<div class="color' +i+'" style="background-color:' + colorV + '">' + '<p>' + response[i].color + "<br>" + response[i].value + "</p>" + 
    	 "<br>" + "</div>";
    	$(".tempContent").append($content)
   };

});


});