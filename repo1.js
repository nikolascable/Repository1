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

//var select = document.querySelector("select");
//var select = $("#myselect :selected").text();

//var system = {"sys": ''}
//var changeSystem = function() {
//    var select = document.querySelector(".testSelect");
//    var selectOption = select.options[select.selectedIndex].text;
//    var new_system = $("#myselect :selected").text();
//    var stored_system = localStorage.getItem("system");
//    if (stored_system != null){
//        system = JSON.parse(stored_system);
//    }
//    system.sys = new_system;
//    localStorage.setItem("system", JSON.stringify(system));
//}

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
    
//    var sys = localStorage.getItem("system");
//    var new_system = '';
//    if (system != null){
//        var system = JSON.parse(sys);
//        new_system = system.sys;
//    }
//    $("#value").text(new_system);
    
    var select = document.querySelector("#myselect");
    console.log(select);
    var selectOption = select.options[select.selectedIndex];
    var lastSelected = localStorage.getItem('select');

    if(lastSelected) {
        select.value = lastSelected;
        $("#value").text(lastSelected);
    }

    select.onchange = function () {
       lastSelected = select.options[select.selectedIndex].text;
        $("#value").text(lastSelected);
       console.log(lastSelected);
       localStorage.setItem('select', lastSelected);
    }

}

$(document).ready(init);