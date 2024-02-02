import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js"
import { closeModal, showMessage } from './exportsFunctions.js'
import { db } from './firebase.js'

const postForm = document.querySelector('#post-form')

postForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const title = postForm['post-title'].value
  const content = postForm['post-text'].value

  try {
    if (!title || !content) {
      throw new Error('Title or content inputs cannot be empty')
    }
    // add new document in the data base
    await addDoc(collection(db, 'posts'), {
      title,
      content,
      timestamp: serverTimestamp(),
    })

    closeModal('#postModal')
    window.location.replace('/src/index.html')
  } catch (error) {
   if (error.code || error.message) {
    showMessage("Something went wrong", "error")
   }
   console.log(error.message)
  }
})