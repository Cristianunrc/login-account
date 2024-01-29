import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"
import { auth } from './firebase.js'

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = signupForm['signup-email'].value
  const password = signupForm['signup-password'].value

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential)
     
    // Close signup modal
    const signupModal = document.querySelector('#signupModal')
    const modal = bootstrap.Modal.getInstance(signupModal)
    modal.hide()
    
  } catch (error) {
    console.log(error)
  }

})
