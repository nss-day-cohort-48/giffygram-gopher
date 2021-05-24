import {getPosts,getUsers,makeLikedPost,getFavorites} from "../data/provider.js"


document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "favoritePost--1") {
        const currentuser = parseInt(localStorage.getItem("gg_user"))
        // Grab what the user typed into the form fields
        const postId = img.('')

        // Make new object out of the user input
        const newLikeToSendToServer = {
            userId: currentuser,
            postId: parseInt(postId),
        }
        // Send data to the API for permanent storage
        makeLikedPost(newLikeToSendToServer)


    }
})



export const postList = () => {
    const posts = getPosts()
    const users = getUsers()
    // const favorites = getFavorites()
    let html = `<div class="giffygram__feed">`

    const listItems = posts.map(post => {
        
 // converting userId to users name
    let username = null
    for(const user of users){
        if (post.userId === user.id){
            username = user.name
        }
    }


    // for (const favs of favorites){
    //     if (users.id === favs.userId){
    //         usersFavs =  `<img src="/images/favorite-star-yellow.svg" id="favoritePost--1" class="actionIcon" alt="${post.id}"></img>`
    //     }
    // }





        return `
        <div class="post">
        <h3>${post.title}</h3>
        <img class="post__image" src = "${post.imageURL}">
        <div class="">${post.description}</div>${post.id}
       <div class="post__tagline">posted by ${username} on </div>
       <img src="/images/favorite-star-blank.svg" id="favoritePost--1" class="actionIcon"></img>
       </div>
        `
    })

    html += listItems.join("")
    html += `</div>`

    return html
}   




// teams.sort(function (teamA, teamB) {return teamB.score - teamA.score})

    //<img id="blockPost--1" class="actionIcon" src="/images/block.svg" >
    //return formmated posts