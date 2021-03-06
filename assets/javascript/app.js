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

// Form data submission
$("#contactForm").on("submit", function (e) {
  e.preventDefault();
  var name = $("#inputName").val().trim(),
    email = $("#inputEmail").val().trim(),
    subject = $("#inputSubject").val().trim(),
    message = $("#inputMessage").val().trim();

  const data = {
    name,
    email,
    subject,
    message,
  };

  $.post("/send", data, function () {
    console.log("Server received data");
    $("#inputName").val("");
    $("#inputEmail").val("");
    $("#inputSubject").val("");
    $("#inputMessage").val("");
  });
});

// Project and design toggler
function siteToggle() {
  document.getElementById("projectsContainer").style.display = "flex";
  document.getElementById("siteToggle").style.color = "#0424d9";
  document.getElementById("designsToggle").style.color = "#000";
  document.getElementById("designsContainer").style.display = "none";
}
function designsToggle() {
  document.getElementById("projectsContainer").style.display = "none";
  document.getElementById("designsContainer").style.display = "flex";
  document.getElementById("siteToggle").style.color = "#000";
  document.getElementById("designsToggle").style.color = "#0424d9";
}
