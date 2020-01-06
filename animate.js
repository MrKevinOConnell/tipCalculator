




function totalBill() {
  //parseFloat to bring string to float
  var bill = parseFloat(document.getElementById("cost").value);
  var tip = parseFloat(document.getElementById('tip').value);
//if tip is more than 1 divide by 100.. ex = 1/100 = 0.01
  if (tip >= 1) {
    tip = tip / 100;
  }
//if numbers empty pop alert up
  if (bill === "" || tip === 0) {
    alert("enter valid numbers")
    return;
  }
//calculation to see how much is owed
  let total = (bill += (bill * tip)).toFixed(2);
//changes text
  document.getElementById('totalText').innerHTML = total;

}
//button
var button = document.getElementById("c");
//trying to make function where calculator background changes on hover
/*
button.onmouseover = function() {

	calc.className = 'hover';
}
button.onmouseout = function() {

	calc.className = '';
}
*/
button.onclick = function() {
  totalBill();
};
