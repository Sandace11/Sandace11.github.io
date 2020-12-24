function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = 'AM';

    if(hour > 12) {
        hour -= 12;
        session = 'PM';
    }

   hour = (hour < 10 ) ? hour = '0' + hour : hour;
   min = (min < 10 ) ? min = '0' + min : min;
   sec = (sec < 10 ) ? sec = '0' + sec : sec;

    document.getElementById('hour').textContent = hour;
    document.getElementById('min').textContent = min;
    document.getElementById('sec').textContent = sec;
    document.getElementById('session').textContent = session;
    setTimeout(showTime, 1000);
}

showTime();



