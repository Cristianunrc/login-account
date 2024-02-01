const postList = document.querySelector('.posts')

export const setupPosts = (data) => {
  if (data.length) {
    let html = ''
    // for each document in the db
    data.forEach(doc => {
      const post = doc.data()
      const li = `
        <li class="list-group-item list-group-item-action list-group-item-dark">
          <h5>${post.title}</h5>
          <p>${post.content}</p>
        </li>
      `
      html += li
    })
    postList.innerHTML = html
  } else {
    postList.innerHTML = '<h1>Login to see the posts</h1>'
  }
}