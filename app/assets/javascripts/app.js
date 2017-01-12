$(document).ready(function() {

	$('form').on('submit', function(e) {
		e.preventDefault();
		var lucasCoolInputValue=document.getElementById('lucas-input-field').value;
		console.log(lucasCoolInputValue);
  	   	//now we want to print the information on to the page
  	   	document.getElementById("password-box-printout").innerHTML = lucasCoolInputValue;
      function myfunction(){
        var x = document.getElementById("myTopnav")
        if (x.className === "Topnav"){
          x.className += " responsive"
        } else {
          x.className = "topnav";
        }
      }
  });
});  