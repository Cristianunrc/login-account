import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"
import { closeModal, showMessage, wellcomeMessage } from './exportsFunctions.js'
import { auth } from './firebase.js'

const googleButton = document.querySelector('#googleLogin')

googleButton.addEventListener('click', async (e) => {
  e.preventDefault()
  try {
    const provider = new GoogleAuthProvider()
    const userCredential = await signInWithPopup(auth, provider)
    closeModal('#signinModal')
    wellcomeMessage(userCredential.user.displayName)

  } catch (error) {
    if (error.code === 'auth/account-exists-with-different-credential') {
      console.log(error.email)
    }
  }
})