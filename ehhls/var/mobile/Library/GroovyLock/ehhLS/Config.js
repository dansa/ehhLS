/*
--------  LSjafc by dansaDisco  ------------------------------------------------------
--------  Just a f****** clock  ------------------------------------------------------
-------- twitter.com/dansaDisco ------------------------------------------------------

-------- CREDITS:
-------- Dacal and Schnedi for original widget code ----------------------------------
-------- Some stackoverflow.com people/answers for a few code snippets I (used) ------
*/

//	-------- GENERAL CLOCK SETTINGS --------------------------------------------------
var clock = "24h";		 	// 12h or 24h time format

//	-------- SHOW/HIDE STUFF ---------------------------------------------------------
var showAMPM = "false";		// Show/Hide AM/PM , only if you use 12h time
var showDate = "true";		// Show/Hide date
var showWeekday = "true";	// Show/Hide weekday (Monday, Tuesday etc)
var showColon = "true";		// Show/Hide ":" between Hour/Minute
var showBBar = "true"; 		// Show/Hide battery bar
var showBText = "true";		// Show/Hide Battery % text
var showBCharge = "true";	// Show/Hide Battery charge icon

//	-------- BATTERY SETTINGS --------------------------------------------------------
var batteryInterval = 30; 	// Battery update interval in seconds
							// Should be same as the update interval set in InfoStats
var greenPerc = 20;			// Battery level where bar turns green
var yellowPerc = 10;		// Battery level where bar turns yellow
var redPerc = 0;			// Battery level where bar turns Red
var boltStyle = "solid";	// Charge-bolt style, line or solid

// -------- COLORS ETC ---------------------------------------------------------------
// -------- ALL COLORS MUST BE VALID HEX COLOR CODES ---------------------------------
// -------- USE HTTP://WWW.COLORPICKER.COM/ OR SOMETHING?? ---------------------------
// -------- IF COLOR DOESN'T CHANGE YOU HAVE ENTERED INVALID HEX COLOR :) ------------
var cOpacity = "90";		// Clock Opacity, 0 = invisible, 100 = solid
var bgColor = "#FAFAFA";	// Color of the Background
var textColor = "#333333";	// Color of the text