import { getUsers, setChosenUser } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

// Change event for Year


// Change event for Posts by User
applicationElement.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "userSelection") {
        const [, userId] = changeEvent.target.value.split("--")
        setChosenUser(parseInt(userId))

        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})





export const Footer = () => {
    const users = getUsers()
    
    return `
    <div class="footer__item">
    Posts since
    <select id="yearSelection">
        <option>2020</option>
        <option>2019</option>
        <option>2018</option>
        <option>2017</option>
    </select>
    <span id="postCount"></span>
    </div>
    <div class="footer__item">
    Posts by user
    <select id="userSelection">
        <option value="user--0">Choose a user...</option>
        ${
            users.map(
                user => {
                    return `<option value="user--${user.id}">${user.name}</option>`
                }
            ).join("")
        }
    </select>
    </div>
    <div class="footer__item">
    Show only favorites
    <input id="showOnlyFavorites" type="checkbox">
    </div>
    `
}

