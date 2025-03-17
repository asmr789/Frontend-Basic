var exchangeRate = 25000;
var usd = prompt("Nhập tiền (USD):");
usd = parseFloat(usd);
var vnd = usd * exchangeRate;
alert(usd + " USD tương đương " + vnd.toLocaleString() + " VND");