import { getUsers, sendNewDirectMessage } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")
// Setting form value
let messageForm = true

// Click event for Pen Icon to render DM form
applicationElement.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "directMessageIcon") {
            // messageForm becomes false which will SHOW DM form until changed by another click event
            messageForm = false
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        }
    })


// Click event for Direct Message Form save Button
applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessage__submit") {
        // Need to find currentUser
        const user = parseInt(localStorage.getItem("gg_user"))
    
        
        // Grab what the user typed into the form fields
        const directMessageRecipientId = parseInt(document.querySelector("#directMessage__userSelect").value)
        const directMessage = document.querySelector("input[name='message']").value
        

        // Checks to see if message field is empty, if so, event listener returns before sending data to APT
        if (directMessage === "") {
            window.alert("Please supply a message.")
            return
        }

        // Checks to see if user chose a recipient 
        if (directMessageRecipientId === 0) {
            window.alert("Please choose a recipient")
            return
        }


        // Make new object out of the user input
        const newDirectMessageToSendToServer = {
            message: directMessage,
            read: false,
            recipientId: directMessageRecipientId,
            senderId: user
        }

        // Send data to the API for permanent storage
        sendNewDirectMessage(newDirectMessageToSendToServer)
    }
})



// Click event for Cancel Button
applicationElement.addEventListener("click",
    clickEvent => {
        if (clickEvent.target.id === "directMessage__cancel") {
            // messageForm becomes true which will HIDE DM form until changed by another click event
            messageForm = true
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        }
})

// Click event for X on form
applicationElement.addEventListener("click",
    clickEvent => {
        if (clickEvent.target.id === "directMessage__close") {
            // messageForm becomes true which will HIDE DM form until changed by another click event
            messageForm = true
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        }
    })





export const DirectMessageForm = () => {
    const users = getUsers()
    const userArray = filterOutCurrentUser(users)
    let messageHTML = ` `

    // If messageForm is TRUE - hide DM form (return empty string)...  else it is FALSE - show DM form
    if (messageForm) {
        return ""
    } else {
        messageHTML += `
    <div class="directMessage">
        <h3>Direct Message</h3>
        <div>
            Recipient
            <select id="directMessage__userSelect" class="message__input">
                <option value="0">Choose a recipient...</option>
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
}



// Function to filter out Current User and return array of users to DM
const filterOutCurrentUser = (userArray) => {
    const currentUserId = parseInt(localStorage.getItem("gg_user"))
    let newUserArray = userArray.filter(user => user.id !== currentUserId)
    return newUserArray
}
