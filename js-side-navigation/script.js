function openNav() {
  document.getElementById("sideNav").style.width = "250px"
  document.querySelector(".main").style.marginLeft = "250px"
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0px"
  document.querySelector(".main").style.marginLeft = "0px"
  document.body.style.backgroundColor = "white";
}