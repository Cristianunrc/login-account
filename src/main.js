import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js"
import { auth, db } from './app/firebase.js'
import { loginCheck } from './app/loginCheck.js'
import { setupPosts } from './app/postList.js'

import './app/signupForm.js'
import './app/signinForm.js'
import './app/googleLogin.js'
// import './app/facebookLogin.js'
// import './app/githubLogin.js'
import './app/logout.js'
import './app/posts.js'

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const querySnapshot = await getDocs(collection(db, 'posts'))
    setupPosts(querySnapshot.docs, user)
  } else {
    setupPosts([], user)
  }
  loginCheck(user)
})
