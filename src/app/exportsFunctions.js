
// Show Toastify messages
export function showMessage(msg, type = "success") {
  Toastify({
    text: msg,
    duration: type === "success" ? 4000 : 5000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type === "success" ? "green" : "red",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}

// Close signin or signup modal
export function closeModal(id) {
  const signinUp = document.querySelector(id)
  const modal = bootstrap.Modal.getInstance(signinUp)
  modal.hide()
}

export function wellcomeMessage(credentialName) {
  const wellcome = `Hola ${credentialName}`
  showMessage(wellcome)
}

// Throw an exception if email or password are empty
export function inputsEmpty(email, password) {
  if (!email || !password) {
    throw new Error('Email or password cannot be empty.')
  }
}

// Handling errors
export function handleError(error) {
  if (error.code === 'auth/account-exists-with-different-credential') {
    showMessage("Existen cuentas con diferentes credenciales", "error")
  } else if (error.code === 'auth/invalid-credential') {
    showMessage("Nombre de usuario o contraseña inválidos", "error")
  } else if (error.code) {
    showMessage("Algo no esta bien", "error")
  }
  console.log(error.message)
}
