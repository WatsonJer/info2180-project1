/* Add your JavaScript to this file */
window.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".newsletter form");
  const emailInput = document.getElementById("email");
  const message = document.querySelector(".message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {
      message.textContent = "Please enter a valid email address.";
    } else {
      message.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
      emailInput.value = "";
    }
  });
});
