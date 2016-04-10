var addValue = function() {
	s = "<p id='balance'> Balance: <p> <p id='actual_amount'> What's up </p>";
	$("div.funds").html(s);
	// k = "What's up";
	// $("div.hello").html(k);
	console.log("hello world");
	var divs = document.getElementById("content").innerHTML;
	var storeds={"html": divs}
	var tostore=JSON.stringify(storeds);
	localStorage.setItem("stored", tostore);
}

var init = function() {
	var stored=localStorage.getItem("stored");
	if (stored != null) {
		console.log("hheeeeelllloooo")
		var storeds=JSON.parse(stored);
		console.log(storeds);
		$('#content').html(storeds.html);
		console.log("hello world");
	};
}

window.onload=init;

// What's the best way to work with different html pages? One javascript function 
// is being called form one page and affects another. Online source says to use
// iframes but it seems messy. Also, our user html page seems to reload every time
// we call the function and our changes to the html revert back