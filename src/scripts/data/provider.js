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



// GETTER functions
export const getUsers = () => {
    return [...applicationState.users]
}