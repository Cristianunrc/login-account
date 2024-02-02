const postList = document.querySelector('.posts')

export const setupPosts = (data) => {
  if (data.length) {
    // Order the docs by timestamp
    data.sort((a, b) => b.data().timestamp - a.data().timestamp)
    
    let html = ''
    
    // for each document in the db
    data.forEach(doc => {
      const post = doc.data()
      const li = `
        <div class="card text-dark mb-3">
          <h5 class="card-header text-center fw-bold fs-4">${post.title}</h5>
          <div class="card-body">
            <p class="card-text">${post.content}</p>
          </div>
        </div>  
      `
      html += li
    })
    postList.innerHTML = html
  } else {
    postList.innerHTML = '<h1 class="text-white text-center">Login to see the posts</h1>'
  }
}