var input1p = document.getElementById('input1');
var operator;
var input;
var shousuu = 0;
function clr() {
 input1p.value = "";
 shousuu = 0;
}
function clrAll() {
 input1p.value = "";
 input2 = "";
 operator = "";
 shousuu = 0;
}
function kazu(n) {
 if (operator == "＝") {
 operator = "";
 input1p.value = "";
 }
 if (n == '.') {
 if (shousuu == 1) return;  /*returnで戻す意味?とshosuuに1を定義する必要とは？*/
 if (input1p.value == "") input1p.value = "0.";
 else input1p.value = input1p.value + ".";
 shousuu = 1;
 return;
 }
 if (input1p.value == "0") input1p.value = "";
 input1p.value = input1p.value + n;
}
function kigou(k) {
 operator = k;
 input2 = input1p.value;
 input1p.value = "";
}
function equal() {
 if (operator == "＋") { input1p.value = Number(input2) + Number(input1p.value); }
 else if (operator == "－") { input1p.value = Number(input2) - Number(input1p.value); }
 else if (operator == "×") { input1p.value = Number(input2) * Number(input1p.value); }
 else if (operator == "÷") { input1p.value = Number(input2) / Number(input1p.value); }
 operator = "＝";
}