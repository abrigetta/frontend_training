function amountTocoins() {
    var originalNum = +input.value;
    var num = +input.value;
    var arr=[25, 10, 5, 2, 1];
    var str = '';
    
    for (var i=0; i<arr.length; i++) {
      if (num>=arr[i]) {
        num = num - arr[i];
        str = str + arr[i] + ',';
        i--;
      }
    }
    
    input.value = 'Amount:'+originalNum + '  Coins: '+str.substring(0, str.length - 1);
  }
  
  button.addEventListener("click", amountTocoins);