<<<<<<< HEAD
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
=======
import { getNavBar } from "./nav/Navbar.js"
import { PostEntry } from "./feed/PostEntry.js"
import { postList } from "./feed/PostList.js"


export const GiffyGram = () => {

    // Show main UI
    return `
    <nav class="navigation"> ${getNavBar()} </nav>
    
    <article class="giffygram__feed">
        <div class="newPost">
            ${PostEntry()}
        </div>
    

        <section class="post">${postList()}</section>
    </article>

    <footer class="footer"></footer>
    `
}
>>>>>>> main
