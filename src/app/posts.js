import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js"
import { closeModal, showMessage } from './exportsFunctions.js'
import { db } from './firebase.js'


const postForm = document.querySelector('#post-form')

postForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  try {

    const title = postForm['post-title'].value
    const content = postForm['post-text'].value
    
    await addDoc(collection(db, 'posts'), {
      title,
      content
    })

    closeModal('#postModal')
    showMessage('You post was successfully!')
    window.location.replace('/src/index.html')
    
  } catch (error) {
   console.log(error.message) 
  }

})
