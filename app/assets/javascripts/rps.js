$(document).ready(function(){
	$('#choiceOne').click(function(){
		var rock = 0;
		var paper = 1;
		var scissors = 2;
		var playerChoice = rock;
		var computerChoice = Math.random();
		if(computerChoice < .34){
			var computerFinal = rock;
		}else if(computerChoice >= .34 && computerChoice <= .66){
			var computerFinal = paper;
		}else{
			var computerFinal = scissors;
		}
		if(playerChoice === computerFinal){
			alert("It's a tie!");
		}
		if(playerChoice === rock && computerFinal === paper){
			alert("computer wins");
		}
		if(playerChoice === paper && computerFinal === scissors){
			alert("computer wins");
		}
		if(playerChoice === scissors && computerFinal === rock){
			alert("computer wins");
		}
		if(playerChoice === rock && computerFinal === scissors){
			alert("You Win!");
		}
		if(playerChoice === paper && computerFinal === rock){
			alert("You Win!");
		}
		if(playerChoice === scissors && computerFinal === paper){
			alert("You Win!");
		}
	});
	$('#choiceTwo').click(function(){
		var rock = 0;
		var paper = 1;
		var scissors = 2;
		var playerChoice = paper;
		var computerChoice = Math.random();
		if(computerChoice < .34){
			var computerFinal = rock;
		}else if(computerChoice >= .34 && computerChoice <= .66){
			var computerFinal = paper;
		}else{
			var computerFinal = scissors;
		}
		if(playerChoice === computerFinal){
			alert("It's a tie!");
		}
		if(playerChoice === computerFinal){
			alert("It's a tie!");
		}
		if(playerChoice === rock && computerFinal === paper){
			alert("computer wins");
		}
		if(playerChoice === paper && computerFinal === scissors){
			alert("computer wins");
		}
		if(playerChoice === scissors && computerFinal === rock){
			alert("computer wins");
		}
		if(playerChoice === rock && computerFinal === scissors){
			alert("You Win!");
		}
		if(playerChoice === paper && computerFinal === rock){
			alert("You Win!");
		}
		if(playerChoice === scissors && computerFinal === paper){
			alert("You Win!");
		}
	});
	$('#choiceThree').click(function(){
		var rock = 0;
		var paper = 1;
		var scissors = 2;
		var playerChoice = scissors;
		var computerChoice = Math.random();
		if(computerChoice < .34){
			var computerFinal = rock;
		}else if(computerChoice >= .34 && computerChoice <= .66){
			var computerFinal = paper;
		}else{
			var computerFinal = scissors;
		}
		if(playerChoice === computerFinal){
			alert("It's a tie!");
		}
		if(playerChoice === rock && computerFinal === paper){
			alert("computer wins");
		}
		if(playerChoice === paper && computerFinal === scissors){
			alert("computer wins");
		}
		if(playerChoice === scissors && computerFinal === rock){
			alert("computer wins");
		}
		if(playerChoice === rock && computerFinal === scissors){
			alert("You Win!");
		}
		if(playerChoice === paper && computerFinal === rock){
			alert("You Win!");
		}
		if(playerChoice === scissors && computerFinal === paper){
			alert("You Win!");
		}
	});
});