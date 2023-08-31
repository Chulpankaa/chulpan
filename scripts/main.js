var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/me.jpg") {
    myImage.setAttribute("src", "images/lico.JPEG");
  } else {
    myImage.setAttribute("src", "images/me.jpg");
  }
};
var myImagee = document.querySelector(".super");

myImagee.onclick = function () {
  var mySrcc = myImagee.getAttribute("src");
  if (mySrcc === "images/palm.JPEG") {
    myImagee.setAttribute("src", "images/zakat.JPEG");
  } else {
    myImagee.setAttribute("src", "images/palm.JPEG");
  }
};
var myImageee = document.querySelector(".kruto");

myImageee.onclick = function () {
  var mySrccc = myImageee.getAttribute("src");
  if (mySrccc === "images/i.jpg") {
    myImageee.setAttribute("src", "images/tanec.JPEG");
  } else {
    myImageee.setAttribute("src", "images/i.jpg");
  }
};
var myImageeee = document.querySelector(".puper");

myImageeee.onclick = function () {
  var mySrcccc = myImageeee.getAttribute("src");
  if (mySrcccc === "images/sea.JPEG") {
    myImageeee.setAttribute("src", "images/voda.JPEG");
  } else {
    myImageeee.setAttribute("src", "images/sea.JPEG");
  }
};
