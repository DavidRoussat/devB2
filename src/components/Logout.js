export function Logout() {
    sessionStorage.removeItem("token")
    window.location.href = "/";
}
