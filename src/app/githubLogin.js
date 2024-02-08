import { GithubAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"
import { closeModal, wellcomeMessage, handleError } from './exportsFunctions.js'
import { auth } from './firebase.js'

const githubButton = document.querySelector('#githubLogin')

githubButton.addEventListener('click', async (e) => {
  e.preventDefault()
  try {
    const provider = new GithubAuthProvider()
    const userCredential = await signInWithPopup(auth, provider)
    console.log(userCredential)
    closeModal('#signinModal')
    wellcomeMessage(userCredential.user.displayName)
  } catch (error) {
    handleError(error)
  }
})
