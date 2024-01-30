import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'


const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = signupForm['signup-email'].value
  const password = signupForm['signup-password'].value

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential)
     
    closeModal('#signupModal')

    // Show toastify message
    const wellcome = "Wellcome " + userCredential.user.email
    showMessage(wellcome)

  } catch (error) {

    // Handling errors
    if (error.code === 'auth/email-already-in-use') {
      showMessage("Email already in use", "error")
    } else if (error.code === 'auth/weak-password') {
      showMessage("Password should be at least 6 characters", "error")
    } else if (error.code === 'auth/invalid-email') {
      showMessage("Invalid email", "error")
    } else if (error.code) {
      showMessage("Something went wrong", "error")
    } 
  }
})

function closeModal(id) {
  // Close signup modal
  const signupModal = document.querySelector(id)
  const modal = bootstrap.Modal.getInstance(signupModal)
  modal.hide()
}
