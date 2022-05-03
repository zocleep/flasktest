const change_wall = () => {
    let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)wall\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    let form = document.forms["setwall"]
    let url = form.elements["wallurl"].value
    document.cookie = `wall=${url}`
    document.body.style.backgroundImage = `url("${cookieValue}")`
    document.location.reload();

}

const delete_wall = () => {
    document.cookie = "wall="
    document.body.style.backgroundImage = ""
    document.location.reload();
}