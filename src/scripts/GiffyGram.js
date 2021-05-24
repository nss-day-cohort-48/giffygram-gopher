import { PostEntry } from "./feed/PostEntry.js"
import {postList} from "./feed/PostList.js"


export const GiffyGram = () => {
    
    // Show main UI
    return `<h1>Giffygram</h1>
    <nav class="navigation"></nav>
    
    <article class="giffygram__feed">
        <div class="newPost">
            ${PostEntry()}
        </div>
    

        <section class="post">${postList()}</section>
    </article>

    <footer class="footer"></footer>
    `
}
