function hour(){
    var date = new Date();

    var hours = (date.getHours() < 10 ? '0' : '') +  
        date.getHours(); 
    var minutes = (date.getMinutes() < 10 ? '0' : '') +  
        date.getMinutes(); 
                
    var div = document.getElementById('datetime'); 
        div.innerHTML = hours + ":" + minutes;

    setTimeout(hour, 1000);
}

hour();