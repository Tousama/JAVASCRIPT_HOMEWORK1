function showTime() {
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let d=date.getDay();
    if (d==1){
        day='Pazartesi'
    }else if (d==2) {
        day='Salı'
    }else if (d==3) {
        day='Çarşamba'
    }else if (d==4){
        day='Perşembe'
    }else if (d==5) {
        day='Cuma'
    }else if (d==6) {
        day='Cumartesi'
    }else if (d==7) {
        day='Pazar'
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    let time=h+":"+m+":"+s+" "+day;
    document.getElementById("MyClockDisplay").innerText=time;
    document.getElementById("MyClockDisplay").textContent=time;

}
setInterval(showTime,1000);

let isim = prompt('Adınız nedir?');
let welcome=document.getElementById('welcome2')
welcome.innerHTML=isim;

