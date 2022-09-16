function showDate(){
    var todayDate = new Date()
    document.getElementById("dateContainer").innerHTML = todayDate.toDateString ();
}

showDate()

function getTime(){
    var todayDate = new Date()
    var hours = todayDate.getHours()
    var minutes = todayDate.getMinutes()
    var seconds = todayDate.getSeconds() 

hours = hours < 10?0+""+hours:hours
minutes =minutes < 10?0+""+minutes:minutes
seconds = seconds < 10?0+""+seconds:seconds

var clockTime = hours + " : " + minutes + " : " + seconds //+ " " + //sessior
document.getElementById("clockContainer").innerHTML = clockTime;
}

var inteveralRef
function startClock(){
inteveralRef=setInterval(getTime ,1000);
}
function stopClock(){
clearInterval(inteveralRef)
}