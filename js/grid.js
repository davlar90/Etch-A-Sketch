$(document).ready(function(){
	generateDivs("22");
	



});





function generateDivs(ammount){
	var $container = $("#container");
	var scale = 500 / ammount;
	$("#container").width(ammount*2 + 500);
	$("#container").height(ammount*2 + 500);
	for(var i = 0; i < ammount; i++){
		var row = document.createElement("div");
		row.className = "row";

		$container.append(row);
		for(var j = 0; j < ammount; j++){
			var cell = document.createElement("div");
			cell.className = "gridsquare";
			row.appendChild(cell);


		}

	}
	$(".gridsquare").width(scale);
	$(".gridsquare").height(scale);
	hover();
}

function buttonClicked(form){
	var newSize = form.gridSize.value;
	if(newSize>0 && newSize < 65){
	$(".gridsquare").remove();
	$(".row").remove();
	form.gridSize.value = null;
	generateDivs(newSize);
	} else alert("Please only use numbers between 1-64!")



}
function buttonResetClicked() {
	var n = $(".row").length;
	$(".gridsquare").remove();
	$(".row").remove();
	var c = $('#red').is(':checked');
	if(c == false){
		$('#red').attr('checked', 'checked');
	}
	
	generateDivs(n);

}

function hover(){
	$(".gridsquare").mouseenter(function(){
		$(this).css("background-color", "red");
	});
	}
function colorChanger(input){
	var color = input.value;
	if(color == "blue"){
		$(".gridsquare").mouseenter(function(){
		$(this).css("background-color", "blue");

	});
	} else if (color == "red"){
			$(".gridsquare").mouseenter(function(){
		$(this).css("background-color", "red");
	});
		} else if(color == "green") {
				$(".gridsquare").mouseenter(function(){
		$(this).css("background-color", "green");
	});

		}
}