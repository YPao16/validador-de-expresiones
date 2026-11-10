import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Lógica del validador de expresiones regulares
document.addEventListener('DOMContentLoaded', () => {
  const btnCompare = document.getElementById('btnCompare');
  const btnClear = document.getElementById('btnClear');
  const regexInput = document.getElementById('regexInput');
  const flagsInput = document.getElementById('flagsInput');
  const textInput = document.getElementById('textInput');
  const alertBox = document.getElementById('customAlert');
  const alertMessage = document.getElementById('alertMessage');

  function mostrarAlerta(mensaje, tipo) {
    alertMessage.textContent = mensaje;
    // Usamos clases de Bootstrap (alert-success, alert-warning, alert-danger)
    alertBox.className = `alert alert-${tipo} mt-3`;
  }

  btnCompare.addEventListener('click', () => {
    const patron = regexInput.value.trim();
    const banderas = flagsInput.value.trim();
    const texto = textInput.value;

    if (!patron) {
      mostrarAlerta('Ingresa una expresión regular.', 'danger');
      return;
    }

    try {
      const regex = new RegExp(patron, banderas);
      const cumple = regex.test(texto);

      if (cumple) {
        mostrarAlerta('¡Éxito! El texto cumple con la expresión regular.', 'success');
      } else {
        mostrarAlerta('El texto NO cumple con los criterios de la expresión regular.', 'warning');
      }
    } catch (error) {
      mostrarAlerta(`Error en la sintaxis de la Regex: ${error.message}`, 'danger');
    }
  });

  btnClear.addEventListener('click', () => {
    regexInput.value = '';
    flagsInput.value = 'g';
    textInput.value = '';
    alertBox.className = 'alert d-none';
  });
});