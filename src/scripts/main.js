import { LoginForm } from "./auth/Login.js"
import { fetchDirectMessages, fetchPosts, fetchUsers, deletePost, deleteLike } from "./data/provider.js"
import { GiffyGram } from "./GiffyGram.js"
// import { DirectMessageList } from "./friends/DirectMessage.js"


const applicationElement = document.querySelector(".giffygram")

// On page load 
export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))

    // Call fetches here before any html loads
    fetchUsers().then(fetchPosts).then(fetchDirectMessages).then(
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


// "stateChanged" event listener
applicationElement.addEventListener(
    "stateChanged", customEvent => {
        renderApp()
    })


document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("blockPost--")) {
        const [, postId] = clickEvent.target.id.split("--")
        deletePost(parseInt(postId))
    }
})



document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("favoritePost--")) {
        const [, likeId] = clickEvent.target.id.split("--")
        deleteLike(parseInt(likeId))
    }
})