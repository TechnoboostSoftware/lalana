addEventListener("DOMContentLoaded", (event) => {
  document
    .getElementById("contactForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault();

      const form = e.target;

      const name = form.fullname.value;
      const email = form.email.value;
      const phone = form.phone.value;
      const service = form.service.value;
      const message = form.message.value;

      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const emailBodyContent = `
        <b>Full Name:</b> ${name}<br>
        <b>Email:</b> ${email}<br>
        <b>Phone:</b> ${phone}<br>
        <b>Service Interested In:</b> ${service}<br>
        <b>Date:</b> ${date}<br>
        <b>Time:</b> ${time}<br>
        <b>Timezone:</b> ${timezone}<br>
        <b>Message:</b> ${message}
      `;

      const jsondata = {
        token: "gUXMeJn%d7dj50w1xjgmksdgbphp",
        emailSubjectLine: "Enquiry for business",
        emailBodyContent: emailBodyContent,
      };

      try {
        const response = await fetch(
          "https://es.technoboost.in/api/v1/mail-send",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsondata),
          }
        );

        const result = await response.json();

        if (result.status === "NOT_FOUND") {
          showToast("error", "Something went wrong!");
        } else {
          toastr.success("Thank you for contacting us! We'll get back to you.");

          form.reset();
        }
      } catch (err) {
        toastr.error("Server error. Please try again later.");
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
