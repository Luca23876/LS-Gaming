$(document).ready(function(){
	var counter = 0;
	$('.box').click(function(){
		counter = counter + 1;
	});
	$('.box').click(function(){
		if (counter%2 == 1){
			$(this).addClass('x');
			if($(one).hasClass('x') && $(two).hasClass('x') && $(three).hasClass('x')){
				alert("Player 1 wins");
				location.reload();
			}
			if($(four).hasClass('x') && $(five).hasClass('x') && $(six).hasClass('x')){
				alert("Player 1 wins");
				location.reload();
			}
			if($(seven).hasClass('x') && $(eight).hasClass('x') && $(nine).hasClass('x')){
				alert("Player 1 wins");
				location.reload();
			}
			if($(one).hasClass('x') && $(four).hasClass('x') && $(seven).hasClass('x')){
				alert("Player 1 wins");
				location.reload();
			}
			if($(two).hasClass('x') && $(five).hasClass('x') && $(eight).hasClass('x')){
				alert("Player 1 wins");
				location.reload();
			}
			if($(three).hasClass('x') && $(six).hasClass('x') && $(nine).hasClass('x')){
				alert("Player 1 wins");
				location.reload();
			}
			if($(one).hasClass('x') && $(five).hasClass('x') && $(nine).hasClass('x')){
				alert("Player 1 wins");
				location.reload();
			}
			if($(three).hasClass('x') && $(five).hasClass('x') && $(seven).hasClass('x')){
				alert("Player 1 wins");
				location.reload();
			}else if(counter === 9) {
				alert("Tie");
				location.reload();
			}
		}else{
			$(this).addClass('o');
			if($(one).hasClass('o') && $(two).hasClass('o') && $(three).hasClass('o')){
				alert("Player 2 wins");
				location.reload();
			}
			if($(four).hasClass('o') && $(five).hasClass('o') && $(six).hasClass('o')){
				alert("Player 2 wins");
				location.reload();
			}
			if($(seven).hasClass('o') && $(eight).hasClass('o') && $(nine).hasClass('o')){
				alert("Player 2 wins");
				location.reload();
			}
			if($(one).hasClass('o') && $(four).hasClass('o') && $(seven).hasClass('o')){
				alert("Player 2 wins");
				location.reload();
			}
			if($(two).hasClass('o') && $(five).hasClass('o') && $(eight).hasClass('o')){
				alert("Player 2 wins");
				location.reload();
			}
			if($(three).hasClass('o') && $(six).hasClass('o') && $(nine).hasClass('o')){
				alert("Player 2 wins");
				location.reload();
			}
			if($(one).hasClass('o') && $(five).hasClass('o') && $(nine).hasClass('o')){
				alert("Player 2 wins");
				location.reload();
			}
			if($(three).hasClass('o') && $(five).hasClass('o') && $(seven).hasClass('o')){
				alert("Player 2 wins");
				location.reload();
			}else if(counter === 9) {
				alert("Tie");
				location.reload();
			}
		}
	});
});
