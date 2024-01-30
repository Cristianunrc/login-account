import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"
import { showMessage, closeModal } from './exportsFunctions.js'
import { auth } from './firebase.js'


const signinForm = document.querySelector('#signin-form')

signinForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = signinForm['signin-email'].value
  const password = signinForm['signin-password'].value

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)  
    
    closeModal('#signinModal')

    // Show toastify message
    const wellcome = "Wellcome " + userCredential.user.email
    showMessage(wellcome)

  } catch (error) {    
    signinError(error.code)
  }
})

// Handling errors of signin
function signinError(errorCode) {
  if (errorCode === 'auth/invalid-credential') {
    showMessage("Invalid email or password", "error")
  } else if (errorCode) {
    showMessage("Something went wrong", "error")
  }
}