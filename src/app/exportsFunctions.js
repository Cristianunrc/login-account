
// Show Toastify messages
export function showMessage(msg, type = "success") {
  Toastify({
    text: msg,
    duration: 4000,
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
  const wellcome = `Wellcome ${credentialName}`
  showMessage(wellcome)
}
