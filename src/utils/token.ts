
const TOKENKEY = import.meta.env.VITE_TOKENKEY
function setLocalToken (token:string) {
  return localStorage.setItem(TOKENKEY, token)
}

function getLocalToken () {
  return localStorage.getItem(TOKENKEY)
}

function clearLocalToken () {
  return localStorage.removeItem(TOKENKEY)
}

export {
  setLocalToken,
  getLocalToken,
  clearLocalToken
}