import { getUsers } from "../data/provider.js"

//! Need to find current user and NOT show that user in dropdown list
export const DirectMessageForm = () => {
    const users = getUsers()
    const userArray = filterOutCurrentUser(users)
    let messageHTML = ` `

    messageHTML += `
    <div class="directMessage">
        <h3>Direct Message</h3>
        <div>
            Recipient
            <select name="directMessage__userSelect" class="message__input">
                <option>Choose a recipient...</option>
                ${
                    userArray.map(
                        user => {
                            return `<option value="${user.id}">${user.name}</option>`
                        }
                    ).join("")
                }
            </select>
        </div>
        <div>
            <label for="message">Message:</label>
            <input name="message" class="message__input" type="text" placeholder="Message to user">
        </div>

        <button id="directMessage__submit">Save</button>
        <button id="directMessage__cancel">Cancel</button>
        <button id="directMessage__close">x</button>
    </div>`

    return messageHTML
}


// Function to filter out Current User and return array of users to DM
const filterOutCurrentUser = (userArray) => {
    const currentUserId = parseInt(localStorage.getItem("gg_user"))
    let newUserArray = userArray.filter(user => user.id !== currentUserId)
    return newUserArray
}

