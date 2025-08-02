document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const inputs = form.querySelectorAll("input, textarea");
  const feedbackMessage = document.querySelector(".feedback-message");
  const formContainer = document.querySelector(".form-container");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let formIsValid = true;

    // Reset previous error messages
    form.querySelectorAll('p[aria-hidden="true"]').forEach((p) => {
      p.style.display = "none";
    });

    inputs.forEach((input) => {
      const fieldWrapper =
        input.closest(".form-field") ||
        input.closest(".query-type") ||
        input.closest(".consent-field");

      if (input.type === "radio") {
        const radios = form.querySelectorAll('input[name="query"]');
        const oneChecked = Array.from(radios).some((radio) => radio.checked);
        if (!oneChecked) {
          const error = fieldWrapper.querySelector('p[aria-hidden="true"]');
          error.style.display = "block";
          formIsValid = false;
        }
      } else if (input.type === "checkbox") {
        if (!input.checked) {
          const error = fieldWrapper.querySelector('p[aria-hidden="true"]');
          error.style.display = "block";
          formIsValid = false;
        }
      } else if (!input.value.trim()) {
        const error = fieldWrapper.querySelector('p[aria-hidden="true"]');
        error.style.display = "block";
        formIsValid = false;
      } else if (input.type === "email" && !validateEmail(input.value)) {
        const error = fieldWrapper.querySelector('p[aria-hidden="true"]');
        error.textContent = "Please enter a valid email address";
        error.style.display = "block";
        formIsValid = false;
      }
    });

    if (formIsValid) {
      formContainer.style.display = "none";
      feedbackMessage.style.display = "block";
    }
  });

  function validateEmail(email) {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
