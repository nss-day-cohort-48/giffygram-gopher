import { getDirectMessages, setDisplayMessages, getDisplayMessages } from "../data/provider.js"
import { getNavBar } from "../nav/NavBar.js"


const applicationElement = document.querySelector(".giffygram")



// click event to load unread messages
applicationElement.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "readNewMessages") {
            setDisplayMessages()
        }
    }
)

export const DirectMessageList = () => {
    const messages = getDirectMessages()
    const currentUser = parseInt(localStorage.getItem("gg_user"))

    const userInbox = messages.filter(
        (messageObject) => {
            if (messageObject.recipientId === currentUser && messageObject.read === false) {
                return true
            }
        }
    )

    let html = `${getNavBar()}
         <div class="messages">
            <div class="messageList">`
                userInbox.map(messageObject => {
                    html += `
                            <div class="message" id="message--${messageObject.id}">
                                <div class="message__author">From ${messageObject.senderId}</div>
                                <div class="message__text">${messageObject.message}</div>
                            </div>`  
        }
    ).join("")

    html += `</div>
        </div>`
    return html
}