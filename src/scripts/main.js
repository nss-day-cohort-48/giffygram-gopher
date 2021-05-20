
import { LoginForm } from "./auth/Login.js"
import { fetchPosts, fetchUsers } from "./data/provider.js"
import { GiffyGram } from "./GiffyGram.js"


const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))

    // Call fetches here before any html loads
    fetchUsers().then(fetchPosts).then(
        () => {
            if (user) {
                applicationElement.innerHTML = GiffyGram()
            } else {
                applicationElement.innerHTML = LoginForm()
            }
        }
    )
}

renderApp()