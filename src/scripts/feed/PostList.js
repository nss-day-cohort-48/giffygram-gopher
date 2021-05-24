import { getPosts, getUsers, makeLikedPost, getFavorites, deleteLike } from "../data/provider.js"


document.addEventListener("click", clickEvent => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("favoritePost")) {

        const [, postId] = itemClicked.id.split("--")

        const currentuser = parseInt(localStorage.getItem("gg_user"))

        // Make new object out of the user input
        const newLikeToSendToServer = {
            userId: currentuser,
            postId: parseInt(postId),
        }
        // Send data to the API for permanent storage
        makeLikedPost(newLikeToSendToServer)


    }else{
        deleteLike()
    }
})



export const postList = () => {
    const posts = getPosts()
    const users = getUsers()
    const favorites = getFavorites()
    let html = `<div class="giffygram__feed">`


    const listItems = posts.map(post => {

        // converting userId to users name
        let username = null
        for (const user of users) {
            if (post.userId === user.id) {
                username = user.name
            }
        }

        const currentuser = parseInt(localStorage.getItem("gg_user"))


        let usersFavs = ` `
        for (const favs of favorites){
            let favpost = document.getElementById.startsWith("favoritePost")
            let [, favPostId] = favpost.split("--")
            favoritePostId = parseInt(favPostId)
            if (currentuser === favs.userId && favs.postId === favoritePostId){
                userFavs = `<img src="./images/favorite-star-yellow.svg" id="favoritePost--${post.id}" class="actionIcon" >`
            }
                else{
                    usersFavs =  `<img src="./images/favorite-star-blank.svg" id="favoritePost--${post.id}" class="actionIcon" >`
                }
        }

        let trashcan = ``
        if (post.userId === currentuser){
            trashcan = `<img id="blockPost--${post.id}" class="actionIcon" src="/images/block.svg" >`
        }

        return `
        <div class="post">
        <h3>${post.title}</h3>
        <img class="post__image" src = "${post.imageURL}">
        <div class="">${post.description}</div>${post.id}
       <div class="post__tagline">posted by ${username} on </div>
       ${trashcan}
       <img src="./images/favorite-star-blank.svg" id="favoritePost--${post.id}" class="actionIcon" >
       </div>
        `
    })

    html += listItems.join("")
    html += `</div>`

    return html
}




// teams.sort(function (teamA, teamB) {return teamB.score - teamA.score})
