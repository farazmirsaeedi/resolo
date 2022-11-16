var wid = document.getElementsByClassName('wid')[0];
var hait = document.getElementsByClassName('hait')[0];
var total = document.getElementsByClassName('total')[0];
var btnref = document.getElementsByClassName('btnref')[0];



wid.innerHTML += innerWidth;
hait.innerHTML += innerHeight;
total.innerHTML = innerWidth + "x" + innerHeight;

// btnref.addEventListener("onclick",refresh)
function refresh(){
window.location.reload();
}