const AUTH_STORAGE = '@wallet:token'

exports.saveToken = (token) => {
    localStorage.setItem(AUTH_STORAGE, token);
}

exports.getToken = () => {
    localStorage.getItem(AUTH_STORAGE);
}

exports.clearToken = () => {
    localStorage.removeItem(AUTH_STORAGE)
}
