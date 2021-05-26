import { LoginForm } from "./auth/Login.js"
import { fetchDirectMessages, fetchPosts, fetchUsers, deletePost, deleteLike } from "./data/provider.js"
import { GiffyGram } from "./GiffyGram.js"
// import { DirectMessageList } from "./friends/DirectMessage.js"


const applicationElement = document.querySelector(".giffygram")
@ @ - 15, 7 + 15, 9 @ @
export const renderApp = () => {
    () => {
        if (user) {
            applicationElement.innerHTML = GiffyGram()
        } else {
            applicationElement.innerHTML = LoginForm()
        }
    }
    @ @ - 32, 18 + 34, 18 @ @ applicationElement.addEventListener(
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