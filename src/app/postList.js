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
        <li class="list-group-item flex justify-content-between list-group-item-action text-dark">
          <h5>${post.title}</h5>
          <p>${post.content}</p>
        </li>
      `
      html += li
    })
    postList.innerHTML = html
  } else {
    postList.innerHTML = '<h1 class="text-white text-center">Login to see the posts</h1>'
  }
}