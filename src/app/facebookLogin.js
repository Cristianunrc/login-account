import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"
import { closeModal, wellcomeMessage, handleError } from './exportsFunctions.js'
import { auth } from './firebase.js'

const fbButton = document.querySelector('#fbLogin')

fbButton.addEventListener('click', async (e) => {
  e.preventDefault()
  try {
    const provider = new FacebookAuthProvider()
    const userCredential = await signInWithPopup(auth, provider)
    closeModal('#signinModal')
    wellcomeMessage(userCredential.user.displayName)
  } catch (error) {
    handleError(error)
  }
})
