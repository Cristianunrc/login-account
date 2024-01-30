const loggedOutLink = document.querySelectorAll('.logged-out')
const loggedInLink = document.querySelectorAll('.logged-in')

export const loginCheck = (user) => {
  if (user) {
    // Disable signin and signup, enable signout
    loggedInOut('block', 'none')
  } else {
    // Disable logout, enable signin and signup
    loggedInOut('none', 'block')
  }
}

function loggedInOut(fst, snd) {
  loggedInLink.forEach(link => link.style.display = fst)
  loggedOutLink.forEach(link => link.style.display = snd)
}