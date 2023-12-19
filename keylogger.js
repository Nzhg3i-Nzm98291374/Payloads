function keylogger(){
  var x = "";
  document.onKeyPress = function (e) {
    x+=e.key;
    console.log(x);
  }
}
keylogger();
