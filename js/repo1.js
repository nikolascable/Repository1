var stored={"balance": 0};

var addValue = function() {
	var add_amt = parseInt($("#amount_input").val());
	var stored_temp = localStorage.getItem("stored");
	if (stored_temp != null) {
		stored=JSON.parse(stored_temp);
	}
	console.log(add_amt);
	console.log(stored);
	var new_balance=stored.balance+add_amt;
	//storing again
	stored.balance=new_balance;
	var tostore=JSON.stringify(stored);
	localStorage.setItem("stored", tostore);

}

var addThree = function() {
    var add_amt = 3;
    var stored_temp = localStorage.getItem("stored");
    if (stored_temp != null) {
        stored=JSON.parse(stored_temp);
    }
    console.log(add_amt);
    console.log(stored);
    var new_balance=stored.balance+add_amt;
    //storing again
    stored.balance=new_balance;
    var tostore=JSON.stringify(stored);
    localStorage.setItem("stored", tostore);
    alert("Success! Added $3");
    $('.map-funds').text(new_balance);
}

//var select = document.querySelector("select");
//var select = $("#myselect :selected").text();

var changeMaps = function(){
	$(function() {
  		$("#start").on("change",function() {
    		var period = this.value;
    		console.log(period);
    		if (period==0){
    			var temp = "img/map.jpg";
    		}
    		else {
    			var temp = "img/map_"+period+".jpg";
    		}
    		var s = "<img class=map_trip src="+temp+" width='500px'>";
    		$(".map").html(s);
    		$('.trip_menu').toggle();
    		$('.toggle_button').toggle();
		});
	});
}

var trip_menu = function(){
    $('.trip_menu').toggle();
    $('.toggle_button').toggle();
}


var init = function() {
	var temp = localStorage.getItem("stored");
	var new_balance=0;
	if (temp != null){
		var stored = JSON.parse(temp);
		new_balance=stored.balance;
	}

	var s3 = "$"+new_balance;
	$(".funds #actual_amount").html(s3);

	var s1 = "Balance: $";
	var s4 = s1+new_balance;
	$(".card h1").text(s4);
    $('.map-funds').text(new_balance);
    
	

}

$(document).ready(init);
