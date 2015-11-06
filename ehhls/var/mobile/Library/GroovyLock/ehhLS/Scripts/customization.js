/*
--------  LSjafc by dansaDisco  --------
--------  Just a f****** clock  --------
-------- twitter.com/dansaDisco --------

CUSTOMIZATION "LIBRARY"
If you want to use something like this in your widget but don't understand a shit of javascript let me know lol maybe I can help you out
*/


function isColor(value){
	return /^#([A-Fa-f0-9]{3}$)|([A-Fa-f0-9]{6}$)/.test(value); //function to check if provided variable is a valid hex-color!
}

//	-------- SHOW/HIDE STUFF ---------------------------------------------------------
	if (showAMPM == "true" && clock == "12h") {
		$("#ampm").show();
	}
	if (showWeekday == "false") {
		$("#weekday").hide();
	}
	if (showDate == "false") {
		$("#month, #date").hide();
	}
	if (showColon == "false") {
		$("#colon").html("&nbsp;");
	} else {
		$("#colon").html(":");
	}
	if (showBBar == "false") {
		$(".battery").hide();
	}
	if (showBText == "false") {
		$("#bperc").hide();
	}
	if (showBCharge == "false") {
		$("#bstate").hide();
	}

// -------- COLORS ETC ---------------------------------------------------------------
	if (boltStyle == "solid") {
		$("#bstate").removeClass("bolt-line").addClass("bolt-solid");
	} else {
		$("#bstate").removeClass("bolt-solid").addClass("bolt-line");
	}
	if (+0<=+cOpacity==+cOpacity<=100) { //check if variable is a value between 0-100
		$(".wrapper").css("opacity", cOpacity / 100); //divide variable by 100 because opacity in css is 0.0-1.0 and not 0-100..
	}
	if (isColor(bgColor)) {
		$(".wrapper").css("background-color", bgColor);
	}
	if (isColor(textColor)) {
		$(".wrapper").css("color", textColor);
		$(".dot").css("background", textColor);
	}