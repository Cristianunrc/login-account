import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"
import { showMessage, closeModal, wellcomeMessage, inputsEmpty } from './exportsFunctions.js'
import { auth } from './firebase.js'

const signinForm = document.querySelector('#signin-form')

signinForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = signinForm['signin-email'].value
  const password = signinForm['signin-password'].value
  
  try {
    inputsEmpty(email, password)
    const userCredential = await signInWithEmailAndPassword(auth, email, password)  
    closeModal('#signinModal')
    wellcomeMessage(userCredential.user.email)
  } catch (error) {
    signinError(error.code)
    console.log(error.message)
  }
})

// Handling errors of signin
function signinError(errorCode) {
  if (errorCode === 'auth/invalid-credential') {
    showMessage("Invalid email or password", "error")
  } else {
    showMessage("Something went wrong", "error")
  }
}