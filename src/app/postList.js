const postList = document.querySelector('.posts')

export const setupPosts = (data, user) => {
  if (data.length && user) {
    // Order the docs by timestamp
    data.sort((a, b) => b.data().timestamp - a.data().timestamp)
    
    let html = ''
    
    // for each document in the db
    data.forEach(doc => {
      const post = doc.data()
      const li = `
                  <div class="card text-dark mb-3">
                    <h5 class="card-header text-center fw-bold fs-3 text-primary">${post.title}</h5>
                    <div class="card-body">
                      <p class="card-text fs-5">${post.content}</p>
                    </div>
                  </div>
                `
      html += li
    })
    postList.innerHTML = html
  } else if (!data.length && user){
    postList.innerHTML = '<h1 class="text-white text-center">There is no post yet!</h1>'
  } else {
    const scriptPath = import.meta.url
    const image = scriptPath.replace('postList.js', '../public/images/imagePost.png')

    postList.innerHTML = `
                          <style>
                            @font-face {
                              font-family: 'PTSerif-Regular';
                              src: url('./public/fonts/PTSerif-Regular.ttf') format('truetype');
                            }
                            .custom-h1 {
                              font-size: 3.5rem;
                              font-family: 'PTSerif-Regular';
                            }
                          </style>
                          <div class="container flex justify-content-center">
                            <img src="${image}" class="flex justify-content-center" alt="Responsive Image">
                            <h1 class="mt-5 text-white custom-h1 text-nowrap">Welcome to the Posts</h1>
                            <p class="mt-4 fs-2">Login to add and see the posts.</p> 
                          </div>  
                        `
  }
}