import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"
import { showMessage, closeModal, wellcomeMessage } from './exportsFunctions.js'
import { auth } from './firebase.js'


const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = signupForm['signup-email'].value
  const password = signupForm['signup-password'].value

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    closeModal('#signupModal')
    wellcomeMessage(userCredential.user.email)
  } catch (error) {
    signupError(error.code) 
  }
})

// Handling errors of signup
function signupError(errorCode) {
  if (errorCode === 'auth/email-already-in-use') {
    showMessage("Email already in use", "error")
  } else if (errorCode === 'auth/weak-password') {
    showMessage("Password should be at least 6 characters", "error")
  } else if (errorCode === 'auth/invalid-email') {
    showMessage("Invalid email", "error")
  } else if (errorCode) {
    showMessage("Something went wrong", "error")
  }
}