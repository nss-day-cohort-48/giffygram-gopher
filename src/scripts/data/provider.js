const apiURL = "http://localhost:3000"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    users: [],
    posts: [],
    directMessages: [],
    favorites: [],
    follows: [],
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    }
}

//Setter- display messages
export const setDisplayMessages = () => {
    applicationState.feed.displayMessages = true
    applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
}

// Fetch requests
export const fetchUsers = () => {
    return fetch(`${apiURL}/users`)
        .then(response => response.json())
        .then(userData => {
            applicationState.users = userData
        })
}

export const fetchPosts = () => {
    return fetch(`${apiURL}/posts`)
        .then(response => response.json())
        .then(postData => {
            applicationState.posts = postData
        })
}




// Post new giffy post with Fetch

export const sendNewDirectMessage = (userNewMessage) => {
    const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userNewMessage)
        }
        //Re-rendering html with stateChange
    return fetch(`${apiURL}/directMessages`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const sendNewPost = (userNewPost) => {
    const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userNewPost)
        }
        //Re-rendering html with stateChange
    return fetch(`${apiURL}/posts`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const makeLikedPost = (userLikedPost) => {
    const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userLikedPost)
        }
        //Re-rendering html with stateChange
    return fetch(`${apiURL}/favorites`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const fetchDirectMessages = () => {
    return fetch(`${apiURL}/directMessages`)
        .then(response => response.json())
        .then(directMessageData => {
            applicationState.directMessages = directMessageData
        })
}

export const deletePost = (id) => {
    return fetch(`${apiURL}/posts/${id}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const deleteLike = (id) => {
    return fetch(`${apiURL}/favorites/${id}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}




// GETTER functions
export const getUsers = () => {
    return [...applicationState.users]
}

export const getPosts = () => {
    return [...applicationState.posts]
}

export const getFavorites = () => {
    return [...applicationState.favorites]
}


export const getDirectMessages = () => {
    return [...applicationState.directMessages]
}