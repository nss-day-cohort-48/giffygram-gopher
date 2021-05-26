import { LoginForm } from "./auth/Login.js"
import { fetchDirectMessages, fetchPosts, fetchUsers, deletePost, deleteLike, getDisplayMessages } from "./data/provider.js"
import { GiffyGram } from "./GiffyGram.js"
import { DirectMessageList } from "./friends/DirectMessage.js"


const applicationElement = document.querySelector(".giffygram")

// "stateChanged" event listener
applicationElement.addEventListener(
    "stateChanged", customEvent => {
        renderApp()
    })


// On page load 
export const renderApp = () => {
        // Call fetches here before any html loads
    fetchUsers().then(fetchPosts).then(fetchDirectMessages).then(
        () => {
            const user = parseInt(localStorage.getItem("gg_user"))
            const displayMessages = getDisplayMessages() // is displayMessages true or false?

            if (displayMessages) { // if true run this line of code
                applicationElement.innerHTML = DirectMessageList()
            }
            else if (user) {
                applicationElement.innerHTML = GiffyGram()
            } else {
                applicationElement.innerHTML = LoginForm()
            }
        }
    )
}

renderApp()




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