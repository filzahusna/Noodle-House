var big = document.getElementById("bigimage");
var small = document.getElementsByClassName ("small");

small[0].onclick = function(){
    big.src = small[0].src;
}
small[1].onclick = function(){
    big.src = small[1].src;
}
small[2].onclick = function(){
    big.src = small[2].src;
}
small[3].onclick = function(){
    big.src = small[3].src;
}