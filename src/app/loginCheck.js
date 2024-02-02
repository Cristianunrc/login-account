const loggedOutLink = document.querySelectorAll('.logged-out')
const loggedInLink = document.querySelectorAll('.logged-in')

export const loginCheck = (user) => {
  if (user) {
    // Disable signin and signup, enable logout and make post
    loggedInOut('block', 'none')
  } else {
    // Disable logout and make post, enable signin and signup
    loggedInOut('none', 'block')
  }
}

function loggedInOut(fst, snd, trd) {
  loggedInLink.forEach(link => link.style.display = fst)
  loggedOutLink.forEach(link => link.style.display = snd)
}