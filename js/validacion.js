// JavaScript para validar el formulario de contacto

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe sin validación

    let valid = true;
    const emailValue = emailInput.value.trim();

    // Validar que el campo de correo no esté vacío
    if (emailValue === "") {
      showError(emailInput, "El campo de correo no puede estar vacío");
      valid = false;
    } else if (!isValidEmail(emailValue)) {
      // Validar que el correo esté en el formato correcto
      showError(
        emailInput,
        "Por favor ingrese un correo electrónico válido (ejemplo: texto@texto.com)"
      );
      valid = false;
    } else {
      removeError(emailInput);
    }

    // Si el formulario es válido, se puede enviar
    if (valid) {
      form.submit();
    }
  });

  // Función para mostrar mensajes de error
  function showError(input, message) {
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains("error-message")) {
      errorElement.textContent = message;
    } else {
      const error = document.createElement("span");
      error.className = "error-message";
      error.textContent = message;
      input.parentElement.appendChild(error);
    }
    input.classList.add("input-error");
  }

  // Función para eliminar mensajes de error
  function removeError(input) {
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains("error-message")) {
      errorElement.remove();
    }
    input.classList.remove("input-error");
  }

  // Función para validar el formato del correo electrónico
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
