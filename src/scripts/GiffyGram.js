import { getNavBar } from "./nav/NavBar.js"
import { PostEntry } from "./feed/PostEntry.js"
import { postList } from "./feed/PostList.js"
import { DirectMessageForm } from "./message/MessageForm.js"


export const GiffyGram = () => {

    // Show main UI
    return `
    <nav class="navigation"> ${getNavBar()} </nav>
    ${DirectMessageForm()}
    <article class="giffygram__feed">
        <div class="newPost">
            ${PostEntry()}
        </div>
    

        <section class="post">${postList()}</section>
    </article>

    <footer class="footer"></footer>
    `
}