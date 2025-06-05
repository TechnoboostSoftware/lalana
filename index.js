addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    if (!form.checkValidity()) {
      e.preventDefault();
      alert("Please fill in all fields correctly.");
    } else {
      alert("Form submitted successfully!");
    }
  });
  // Initialize AOS
  AOS.init();
});

$(document).ready(function () {
  $("#mobile-menu-button").on("click", function () {
    $("#mobile-menu").stop(true, true).slideToggle(300);

    $(this).find("span").eq(0).toggleClass("rotate-45 translate-y-1.5");
    $(this).find("span").eq(1).toggleClass("opacity-0");
    $(this).find("span").eq(2).toggleClass("-rotate-45 -translate-y-1.5");
  });
});
