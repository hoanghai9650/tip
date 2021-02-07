

var btn = document.getElementById('btn');
var hide = document.getElementById('hide');
var ketQua = document.getElementById('ketQua');
hide.style.visibility="hidden";

 var tinhtien = function(a,b,c){
     var soTien = a*(b/100)/c;
     return soTien;
 }

btn.onclick = function(){
    var tongTien = document.getElementById('soTien').value;
    var soNguoi = document.getElementById('soNguoi').value;
   var phanTramTip = document.getElementById('phanTramTip').value;
   hide.style.visibility="visible";
   ketQua.innerHTML=tinhtien(tongTien, phanTramTip, soNguoi );
}
