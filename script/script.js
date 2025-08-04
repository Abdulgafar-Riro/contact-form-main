document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const formContainer = document.querySelector(".form-container");
  const feedbackMessage = document.querySelector(".feedback-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Hide all previous errors
    document.querySelectorAll(".error-message").forEach((error) => {
      error.style.display = "none";
    });

    // Validate First Name
    const firstName = document.getElementById("first-name");
    if (firstName.value.trim() === "") {
      showError("error-first-name");
      isValid = false;
    }

    // Validate Last Name
    const lastName = document.getElementById("last-name");
    if (lastName.value.trim() === "") {
      showError("error-last-name");
      isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email");
    if (!validateEmail(email.value)) {
      showError("error-email");
      isValid = false;
    }

    // Validate Query Type (radio)
    const queryRadios = document.querySelectorAll('input[name="query"]');
    const isQueryChecked = Array.from(queryRadios).some(
      (radio) => radio.checked
    );
    if (!isQueryChecked) {
      showError("error-query");
      isValid = false;
    }

    // Validate Message
    const message = document.getElementById("message");
    if (message.value.trim() === "") {
      showError("error-message");
      isValid = false;
    }

    // Validate Consent
    const consent = document.getElementById("consent");
    if (!consent.checked) {
      showError("error-consent");
      isValid = false;
    }

    if (isValid) {
      formContainer.style.display = "block";
      feedbackMessage.style.display = "block";
    }
  });

  function showError(id) {
    const errorElement = document.getElementById(id);
    if (errorElement) {
      errorElement.style.display = "block";
      errorElement.classList.add("visible");
      const input = errorElement.previousElementSibling;
      if (input && input.classList.contains("input-field")) {
        input.classList.add("error");
      }
    }
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
  }
});
