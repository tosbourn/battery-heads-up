(function(batteryLevel) {
	var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery,
    warned  = false;
 
function checkBattery() {
	if (!warned && battery.level && battery.level < batteryLevel) {
		alert('Just a friendly heads up, you have less than ' + (batteryLevel * 100) + '% battery remaining on your device.');
		warned = true;
	}
}
 
checkBattery();

battery.addEventListener("levelchange", checkBattery);
})(0.1);