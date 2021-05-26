import { getNavBar } from "./nav/Navbar.js"
import { PostEntry } from "./feed/PostEntry.js"
import { postList } from "./feed/PostList.js"
import { DirectMessageForm } from "./message/MessageForm.js"
import { Footer } from "./nav/Footer.js"


export const GiffyGram = () => {

    // Show main UI
    return `
    <nav class="navigation">
        ${getNavBar()}
    </nav>
        ${DirectMessageForm()}
    <div class="giffygram__feed">
        ${PostEntry()}
        <section class="post">
        ${postList()}
        </section>
    </div>
    <footer class="footer">
        ${Footer()}
    </footer>
    `
}
