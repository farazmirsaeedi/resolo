var wid = document.getElementsByClassName('wid')[0];
var hait = document.getElementsByClassName('hait')[0];
var total = document.getElementsByClassName('total')[0];
var btnref = document.getElementsByClassName('btnref')[0];

var wid2 = document.getElementsByClassName('wid2')[0];
var hait2 = document.getElementsByClassName('hait2')[0];
var total2 = document.getElementsByClassName('total2')[0];

var screenw = window.screen.width;
var screenh = window.screen.height;

wid.innerHTML += innerWidth;
hait.innerHTML += innerHeight;
total.innerHTML = innerWidth + "x" + innerHeight;

// if(wid2 != null)

wid2.innerHTML += screenw
hait2.innerHTML += screenh;
total2.innerHTML = screenw + "x" + screenh;



// btnref.addEventListener("onclick",refresh)
function refresh() {
    window.location.reload();
}