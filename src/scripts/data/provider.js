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

export const fetchDirectMessages = () => {
    return fetch(`${apiURL}/directMessages`)
    .then(response => response.json())
    .then(directMessageData => {
        applicationState.directMessages = directMessageData
    })
}



// Post new Giffy Post with Fetch
export const sendNewPost = (userNewPost) => {
    const fetchOptions =  {
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

// Post new Direct Message with Fetch
export const sendNewDirectMessage = (userNewMessage) => {
    const fetchOptions =  {
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



// GETTER functions
export const getUsers = () => {
    return [...applicationState.users]
}

export const getPosts = () => {
    return [...applicationState.posts]
}

export const getDirectMessages = () => {
    return [...applicationState.directMessages]
}