let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)wall\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if(cookieValue) {
    document.body.style.backgroundImage = `url("${cookieValue}")`
    let body = document.body
    body.style.backgroundImage = `url("${cookieValue}")`
    console.log(cookieValue)
}