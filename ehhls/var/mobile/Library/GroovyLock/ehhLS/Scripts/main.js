var updateTimer = 0,
	batPerc = "",
	batState = "",
	days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
	months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
$.ajaxSetup({
	cache: false,
	headers: {'Cache-Control': 'no-cache'}
});

function updateClock() { 
var currentTime = new Date(),
	currentHours = currentTime.getHours(),
	currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes(),
	currentDate = currentTime.getDate();

if (clock == "24h") {
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
		$("#hour").html(currentHours);
		$("#minute").html(currentMinutes);
	}
if (clock == "12h") {
	//var timeOfDay = ( currentHours < 12 ) ? "am" : "pm";
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours === 0 ) ? 12 : currentHours;
	$("#ampm").html(( currentHours < 12 ) ? "am" : "pm");
}		
	$("#hour").html(currentHours);
	$("#minute").html(currentMinutes);
	$("#weekday").html(days[currentTime.getDay()]);
	$("#date").html(currentDate + ordinalDate(currentDate));
	$("#month").html(months[currentTime.getMonth()]);
}


function ordinalDate (d) {
	// ordinal Date (st, nd, rd, th) credits to
	// http://stackoverflow.com/a/15397495
      if(d>3 && d<21) return 'th';
      switch (d % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
}

function battery() {
	if (showBBar) {
		jQuery.get('file:///private/var/mobile/Library/BatteryStats.txt', function(appdata) {
			var substr = appdata.split('\n');
			batPerc = substr[0].split(':')[1];
			batState = substr[1].split(':')[1];

			if( batPerc >= redPerc  && batPerc < yellowPerc ) { $("#bbar").css("background-color", "#e53935"); }
			if( batPerc >= yellowPerc  && batPerc < greenPerc ) { $("#bbar").css("background-color", "#ffb300"); }
			if( batPerc >= greenPerc) { $("#bbar").css("background-color", "#7cb342"); }

			$("#bbar").width(batPerc + "%");
			$("#bperc").html(batPerc + "%");
			if (showBCharge == "true" && batState == "Charging") {
				$("#bstate").show();
			} else {
				$("#bstate").hide();
			}
			$(".bbar").css("margin-right", $(".binfo").outerWidth() + 4);
		}).fail(function() {
	    	$(".battery").hide();
	    	showBBar = false;
	  	});
	}
}
 
function init(){
	updateClock();
	setInterval(updateClock, 1000);
	battery();
	setInterval(battery, batteryInterval*1000);
}