




function totalBill() {
  var bill = parseFloat(document.getElementById("cost").value);
  var tip = parseFloat(document.getElementById('tip').value);

  if (tip >= 1) {
    tip = tip / 100;
  }

  if (bill === "" || tip === 0) {
    alert("enter valid numbers")
    return;
  }

  let total = (bill += (bill * tip)).toFixed(2);

  document.getElementById('totalText').innerHTML = total;

}
var button = document.getElementById("c");

button.onmouseover = function() {

	calc.className = 'hover';
}
button.onmouseout = function() {

	calc.className = '';
}

button.onclick = function() {
  totalBill();
};
