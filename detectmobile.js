/* detect mobile & tablet */
var deviceType;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  deviceType = true;
}else{
  // false for not mobile device
  deviceType = false
}
/* /detect mobile & tablet */