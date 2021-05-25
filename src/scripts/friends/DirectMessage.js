import { getDirectMessages, getUsers } from "../data/provider.js"

//generating message list
// 1. identify new (unread) messages
// 2. iterate/compare user.id to recipientId to get user's DMs
// 3. iterate/compare senderId to user.id to get sender name
// 4. render html of sender name and text of new messages
// 5. change current rendered messages' status to "read" in db


export const messageList = () => {
        const messages = getDirectMessages()
        const users = getUsers()


        let html = `<div id="messages">`

        const listItems = messages.map(message => {
            // convert sender id to sender name
            let senderName = null
            for (const message of messages) {
                if

                if message.recipientId === user.Id
                else if
            }
        })


        html += `</div>`