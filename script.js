const right = document.querySelector(".colorRight");
  const left = document.querySelector(".colorLeft");
const right1 = document.querySelector(".colorRight1");
  const left1 = document.querySelector(".colorLeft1");
  window.addEventListener("scroll", function () {
    value1 = -12 + window.scrollY / 55;
    value2 = 12 + window.scrollY / -55;
    right.style.transform = "skewY(" + value1 + "deg)";
    left.style.transform = "skewY(" + value2 + "deg)";
  });
  var x = document.getElementById("login");
  var y = document.getElementById("register");
  var z = document.getElementById("btn");
  function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
  }
  function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
  }
  var modal = document.getElementById("login-form");
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };