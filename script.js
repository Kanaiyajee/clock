let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let session  = document.getElementById("session")
// if(hrs.current_time >12){
//     hrs = hrs - 12;
// }

// if(hrs >= 12){
        
//     session.innerHTML = 'PM';
// }else{
//     session.innerHTML ='AM';
// }
setInterval(()=>{
    
    let current_time = new Date();
    var h=current_time.getHours()
    var ses;
    if(h>12)
    {
    h-=12;
    ses='PM'
    }
    else{
        ses='AM'
    }
    hrs.innerHTML = (current_time.getHours()<10?"0":"") + h;
    min.innerHTML = (current_time.getMinutes()<10?"0":"") + current_time.getMinutes();
    sec.innerHTML = (current_time.getSeconds()<10?"0":"") + current_time.getSeconds();
    session.innerHTML=ses


},1000)