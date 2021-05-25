import { getDirectMessages, getUsers } from "../data/provider.js"

export const messageList = () => {
    const messages = getDirectMessages()
    const users = getUsers()
}

let html = `<div id="messages">`

const listItems = messages.map(message => {
    // convert sender id to sender name
    let senderName = null
    for (const sender of senders) {
        if message.
    }
})

html += `</div>`