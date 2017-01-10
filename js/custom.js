//API
$(function() {
	var URL = "https://private-f3b4b-interview2.apiary-mock.com/data";
	$.ajax ({
		dataType: "json",
		url: URL,
		success: showData
	});
});

function showData(i) {	
	var html="";
	$.each(i,function(index, value){
		//Format "timestamp" property
		var js_date = new Date(parseInt(value.timestamp));
		var formatedDate=(js_date.getMonth()+1) + "/" + js_date.getDate() + "/" + js_date.getFullYear();
		//HTML output
		html += "<div class='row' data-secret='" + value.secret + "'>";
		html += "<div class='col-md-1'>";
		html += "<img class='img-circle img-responsive center-block' src='" + value.image + "'>";
		html += "</div>";
		html += "<div class='col-md-11'>";
		html += "<h1>" + value.name + "</h1>";
		html += "<p>" + formatedDate + "</p>";
		html += "</div>";
		html += "</div>";
	});
	$('#result').html(html);

	setListHandlers();	
}

//Onclick change background-color and value for input
function setListHandlers(){
	$(".row").click(function(){
	    $(".form-control").css({"backgroundColor": $(this).data("secret"), "color": "white"});
	    $(".form-control").val($(this).data("secret"));
	});
}

//Reset input
function setFormHandlers(){
	$(".btn").click(function(){
	    $(".form-control").css({"backgroundColor": "white", "color": "initial"});
	    $(".form-control").val("???");
	});
}
setFormHandlers();