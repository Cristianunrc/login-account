import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js"
import { closeModal, showMessage } from './exportsFunctions.js'
import { db, auth } from './firebase.js'

const postForm = document.querySelector('#post-form')

postForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const title = postForm['post-title'].value
  const content = postForm['post-text'].value

  try {
    if (!title || !content) {
      throw new Error('Title or content inputs cannot be empty')
    }

    const user = auth.currentUser

    if (user.displayName) { // add doc with google, fb or gh
      await addDoc(collection(db, 'posts'), {
        title,
        content,
        username: user.displayName,
        timestamp: serverTimestamp(),
      })
    } else if (user.email) { // add doc with email
      await addDoc(collection(db, 'posts'), {
        title,
        content,
        username: user.email,
        timestamp: serverTimestamp(),
      })
    }

    closeModal('#postModal')
    window.location.reload()
  } catch (error) {
   if (error.code || error.message) {
    showMessage("Algo no esta bien", "error")
   }
   console.log(error.message)
  }
})