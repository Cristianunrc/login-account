import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"
import { closeModal, showMessage, wellcomeMessage } from './exportsFunctions.js'
import { auth } from './firebase.js'

const fbButton = document.querySelector('#fbLogin')

fbButton.addEventListener('click', async (e) => {
  e.preventDefault()
  try {
    const provider = new FacebookAuthProvider()
    const userCredential = await signInWithPopup(auth, provider)
    console.log(userCredential)
    closeModal('#signinModal')
    wellcomeMessage(userCredential.user.displayName)
  } catch (error) {
    console.log(error.message)
  }
})
