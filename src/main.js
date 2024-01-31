import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"
import { loginCheck } from './app/loginCheck.js'
import { auth } from './app/firebase.js'
import './app/signupForm.js'
import './app/logout.js'
import './app/signinForm.js'
import './app/googleLogin.js'

onAuthStateChanged(auth, async (user) => {
  loginCheck(user)
})
