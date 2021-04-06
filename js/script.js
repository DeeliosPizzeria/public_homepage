function startTime() { // days
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    m = checkTime(m);
    s = checkTime(s);
    var t = setTimeout(startTime, 500);

    var greet;
    if (h < 12)
    greet = ', Good Morning';
    else if (h >= 12 && h <= 17)
    greet = ', Good Afternoon';
    else if (h >= 17 && h <= 24)
    greet = ', Good Evening';

    document.getElementById('sGreetings').innerHTML = 
    'Today is ' + '<b>' + days[today.getDay()] + '</b>' +
    '<b>' + greet + '</b> Chris!';  //greet
}
 
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}


