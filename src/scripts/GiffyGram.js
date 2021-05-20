import { getNavBar } from "./nav/NavBar.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
    <nav class="navigation"> ${getNavBar()} </nav>

    <article class="giffygram__feed">
        <div class="newPost"></div>

        <section class="post"></section>
    </article>

    <footer class="footer"></footer>
    `
}