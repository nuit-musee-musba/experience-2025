
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("fade-in");
    const homeButton = document.getElementById("home-button");
    homeButton.addEventListener("click", function() {
      document.body.classList.add("fade-out");
      setTimeout(function() {
        window.location.href = "index.html";
      }, 2000);
    });
  });