import { getUsers, sendNewPost } from "../data/provider.js"


const applicationElement = document.querySelector(".giffygram")

// Click event for Post Entry form Save Button
applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newPost__submit") {
        //TODO: Need to find currentUser
        const user = parseInt(localStorage.getItem("gg_user"))
        
        
        // Grab what the user typed into the form fields
        const postTitle = document.querySelector("input[name='postTitle']").value
        const postURL = document.querySelector("input[name='postURL']").value
        const postDescription = document.querySelector("textarea[name='postDescription']").value

        // Make new object out of the user input
        const newPostToSendToServer = {
            title: postTitle,
            imageURL: postURL,
            description: postDescription,
            userId: user,
            timestamp: Date.now()
        }

        // Send data to the API for permanent storage
        sendNewPost(newPostToSendToServer)
    }
})

// Click event for Cancel Button
applicationElement.addEventListener("click",
    clickEvent => {
        if (clickEvent.target.id === "newPost__cancel") {
            const hideEntryForm = document.querySelector(".newPost")
            hideEntryForm.innerHTML = miniMode()
        }
})

// Click event for Mini Mode HTML box
applicationElement.addEventListener("click",
    clickEvent => {
        if (clickEvent.target.id === "miniMode") {
            const showEntryForm = document.querySelector(".newPost")
            showEntryForm.innerHTML = postEntryForm()
        }
    })





// Function to show or hide new post form
export const PostEntry = () => {
    return miniMode() // Need to find a way to keep form showing after saving post
    
}



// Post Mini Mode Html
const miniMode = () => {
    return `
    <div class="miniMode" id="miniMode">Have a gif to post?</div>
    `
}


// Post Entry form Html 
const postEntryForm = () => {
    return `
    <div>
        <input value name="postTitle" class="newPost__input" type="text" placeholder="Title">
    </div>
    <div>
        <input value name="postURL" class="newPost__input" type="text" placeholder="URL of gif">
    </div>

    <textarea name="postDescription" class="newPost__input newPost__description" placeholder="Story behind your gif..." ></textarea>
    
    <button id="newPost__submit">Save</button>
    <button id="newPost__cancel">Cancel</button>
    `
}

