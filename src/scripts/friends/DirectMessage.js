import { getDirectMessages, setDisplayMessages, getUsers } from "../data/provider.js"
import { getNavBar } from "../nav/Navbar.js"


const applicationElement = document.querySelector(".giffygram")



// click event to load unread messages
applicationElement.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "readNewMessages") {
            setDisplayMessages() // tell temp state to make displayMessages true
        }
    }
)

export const DirectMessageList = () => {
    const messages = getDirectMessages()
    const users = getUsers()
    const currentUser = parseInt(localStorage.getItem("gg_user"))

    // Filter ALL messages for ONLY messages that meet the requirements and return new array of those messages
    const userInbox = messages.filter(
        (messageObject) => {
            if (messageObject.recipientId === currentUser && messageObject.read === false) {
                return true
            }
        }
    )


    // Build out your DM html
    let html = `${getNavBar()}
         <div class="messages">
            <div class="messageList">`
                userInbox.map(messageObject => { // Then filter new array of messages to render to DOM

                    // converting senderId to users name
                    let username = null
                    for (const user of users) {
                        if (messageObject.senderId === user.id) { 
                            username = user.name 
                        }
                     }

                    html += `
                            <div class="message" id="message--${messageObject.id}">
                                <div class="message__author">From ${username}</div>
                                <div class="message__text">${messageObject.message}</div>
                            </div>`  
        }
    ).join("")

    html += `</div></div>`
    return html
}