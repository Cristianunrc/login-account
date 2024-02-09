import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"
import { showMessage, closeModal, wellcomeMessage, inputsEmpty } from './exportsFunctions.js'
import { auth } from './firebase.js'

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = signupForm['signup-email'].value
  const password = signupForm['signup-password'].value

  try {
    inputsEmpty(email, password)
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    closeModal('#signupModal')
    wellcomeMessage(userCredential.user.email)
  } catch (error) {
    signupError(error.code)
    console.log(error.message) 
  }
})

// Handling errors of signup
function signupError(errorCode) {
  if (errorCode === 'auth/email-already-in-use') {
    showMessage("El email ya esta en uso, prueba con otro", "error")
  } else if (errorCode === 'auth/weak-password') {
    showMessage("La contraseña debe ser de al menos 6 caracteres", "error")
  } else if (errorCode === 'auth/invalid-email') {
    showMessage("Email inválido", "error")
  } else {
    showMessage("Algo no esta bien", "error")
  }
}