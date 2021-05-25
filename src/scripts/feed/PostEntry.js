import { getUsers, sendNewPost } from "../data/provider.js"


const applicationElement = document.querySelector(".giffygram")
let postForm = true

// Click event for Post Entry form Save Button
applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newPost__submit") {
        //TODO: Need to find currentUser
        const user = parseInt(localStorage.getItem("gg_user"))
    
        
        // Grab what the user typed into the form fields
        const postTitle = document.querySelector("input[name='postTitle']").value
        const postURL = document.querySelector("input[name='postURL']").value
        const postDescription = document.querySelector("textarea[name='postDescription']").value

        // Checks to see if any fields are empty, if so, event listener returns before sending data to APT
        if (postTitle === "" || postURL === "" || postDescription === "") {
            window.alert("Please fill in all fields")
            return
        }

        // Checks to see if URL is actually a URL
        if (!postURL.startsWith("https://")) {
            window.alert("Please supply a url link that starts with https://")
            return
        }


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
            // postForm is set to TRUE and will hide post form in DOM
            postForm = true
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        }
})

// Click event for Mini Mode HTML box
applicationElement.addEventListener("click",
    clickEvent => {
        if (clickEvent.target.id === "miniMode") {
            // postForm is set to FALSE and will show post form in DOM
            postForm = false
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        }
    })





// Function to show or hide new post form
export const PostEntry = () => {
     // If postForm is TRUE - hide post form (return empty string).. else it is FALSE - show post form
    if (postForm) {
        return `
        <div class="miniMode" id="miniMode">Have a gif to post?</div>
        `
    } else {
        return `
        <div>
            <input value name="postTitle" class="newPost__input newPost__title" type="text" placeholder="Title">
        </div>
        <div>
            <input value name="postURL" class="newPost__input newPost__URL" type="text" placeholder="URL of gif">
        </div>

        <textarea name="postDescription" class="newPost__input newPost__description" placeholder="Story behind your gif..." ></textarea>
        
        <button id="newPost__submit">Save</button>
        <button id="newPost__cancel">Cancel</button>
        `
    }
}
