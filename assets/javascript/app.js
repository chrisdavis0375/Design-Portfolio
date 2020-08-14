function menuToggle() {
  console.log("Menu toggled.");
  document.getElementById("navMenu").classList.toggle("show");
  document.getElementById("burger").classList.toggle("nav-button-color");
}
window.onclick = function (event) {
  if (!event.target.matches(".burger")) {
    var dropdowns = document.getElementsByClassName("nav-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        document.getElementById("burger").classList.toggle("nav-button-color");
      }
    }
  }
};
