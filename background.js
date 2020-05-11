function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  var money = 0
while(document.getElementsByTagName("input")[0].value == ""){
    var pic1 = document.getElementById("cimg1").innerHTML
    var pic2 = document.getElementById("cimg2").innerHTML
    var pic3 = document.getElementById("cimg3").innerHTML
    var patt = /\d.png/i;
    var res1 = (pic1.match(patt))[0].slice(0,1);
    var res2 = (pic2.match(patt))[0].slice(0,1);
    var res3 = (pic3.match(patt))[0].slice(0,1);
    var final = ""+res1+res2+res3
    document.getElementsByTagName("input")[0].value=final
    document.getElementsByTagName("input")[1].click()
    sleep(2000)
    console.log(document.getElementById("moneycount").innerHTML)
}
