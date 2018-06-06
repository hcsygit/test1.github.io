var baseUrl="http://120.77.244.8:8080";
(function() {
    var newRem = function() {
        var html = document.documentElement;
        var lwidth=html.getBoundingClientRect().width;
        if(lwidth>750){lwidth=750;}
        html.style.fontSize = lwidth / 10 + 'px';
    };
    window.addEventListener('resize', newRem, false);
    newRem();
})();

 //获取地址栏参数
 function HGetHashUrl(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var HashCan = window.location.hash;
    HashCan = HashCan.split("?");
    if (HashCan.length >= 2) {
      HashCan = "?" + HashCan[1];
      var r = HashCan.substr(1).match(reg);
      if (r != null) return decodeURIComponent(r[2]); return null;
    } else {
      return null;
    }
  }