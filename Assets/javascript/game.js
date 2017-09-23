
var startnum = 0;
var score = [];

$ (document).ready (function() {
	$ ("#startbtn").on("click", function(){
		var startNum = Math.floor(Math.random() * 100+25) + 1;
		$("#startnum").html(startNum);
		score.length = 0;
		$("#score").html(score);

		var crs01 = Math.floor(Math.random() * 25) + 1; 
		console.log(crs01);

		var crs02 = Math.floor(Math.random() * 25) + 1; 
		console.log(crs02);

		var crs03 = Math.floor(Math.random() * 25) + 1; 
		console.log(crs03);

		var crs04 = Math.floor(Math.random() * 25) + 1; 
		console.log(crs04);

		$ (".crystal01").on("click", function(){
		score.push(crs01); 
		console.log(score);
		var sum = score.reduce(function(a, b) {return a + b; }, 0);
		console.log(sum);
		$("#score").html(sum);
		
			if (parseInt(sum) < parseInt(startnum)) {
				console.log("Keep Going");
			}	else if (parseInt(sum) > parseInt(startnum)) {
					console.log("You Lose");
			}	else {
					console.log("You WIN");
			}
		})

		$ (".crystal02").on("click", function(){
		score.push(crs02); 
		console.log(score);
		var sum = score.reduce(function(a, b) {return a + b; }, 0);
		console.log(sum);
		$("#score").html(sum);
		})

		$ (".crystal03").on("click", function(){
		score.push(crs03); 
		console.log(score);
		var sum = score.reduce(function(a, b) {return a + b; }, 0);
		console.log(sum);
		$("#score").html(sum);
		})

		$ (".crystal04").on("click", function(){
		score.push(crs04); 
		console.log(score);
		var sum = score.reduce(function(a, b) {return a + b; }, 0);
		console.log(sum);
		$("#score").html(sum);
		})
	})
})

// var a = [1,2,3];
// var sum = a.reduce(function(a, b) { return a + b; }, 0);

// var numberOptions = [13, 23, 5, 20];

// for (var i = 0; i < numberOptions.length; i ++) {
// 	var imageCrystal = $("<img>");
// 	imageCrystal.addClass("crystal-image");
// 	imageCrystal.attr("src", )
// }

// <h1>Number to Guess: <span id="number-to-guess"></span></h1>
// <div id="crystals">
//		<img class="crystal-image" src="http://...">

// <script type="text/javascript">

//		var targetNumber = 50; 
//		$("#number-to-guess").text(targetNumber);

//		var counter = 0;
//		$(".crystal-image").on("click", function() {
//			alert("You Clicked");
//			counter += 1;
//			alert("You clicked this " + counter + "times");

//			if (counter === targetNumber) {
//				alert("You Win");	
//			}
//			
//			else if (counter >= targetNumber) {
//				alert("You Lose");
//			}
//		})