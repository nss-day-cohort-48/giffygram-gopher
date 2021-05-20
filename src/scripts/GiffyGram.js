import {postList} from "./feed/PostList.js"

export const GiffyGram = () => {
    return `<h1>Giffygram</h1>
    <nav class="navigation"></nav>

    <article class="giffygram__feed">
        <div class="newPost"></div>

        <section class="post">${postList()}</section>
    </article>

    <footer class="footer"></footer>
    `

}
