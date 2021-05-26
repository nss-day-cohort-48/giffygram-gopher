import { getPosts, getUsers, makeLikedPost, getFavorites, deleteLike, getFeed } from "../data/provider.js"

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
        const currentuser = parseInt(localStorage.getItem("gg_user"))
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("favoritePost")){
            if(currentuser === favorites.userId){
                deleteLike(favorites.id)
            }
        
    }
    }
})



export const postList = () => {
    const posts = getPosts()
    const users = getUsers()
    const favorites = getFavorites()
    const currentuser = parseInt(localStorage.getItem("gg_user"))
    const feed = getFeed()
    const chosenUser = feed.chosenUser
    const chosenYear = feed.chosenYear

    if (chosenYear !== null) {
        const postsByYear = posts.filter(post => {
            const date = new Date(post.timestamp)
            const postYear = date.getFullYear()
            if (postYear >= chosenYear) {
                return post
            }

        })
        return `<div class="post">
        ${
            postsByYear.map(
                post => {
                    return `
                    <h3>${post.title}</h3>
                    <img class="post__image" src = "${post.imageURL}">
                    <div class="">${post.description}</div>${post.id}
                    <div class="post__tagline">posted by user name here </div>`
                }
            ).join("")
        }
        `
    }

    if (chosenUser) {
        const filteredPosts = posts.filter(post => post.userId === chosenUser)
        
        return `<div class="post">
        ${
            filteredPosts.map(
                post => {
                    return `
                    <h3>${post.title}</h3>
                    <img class="post__image" src = "${post.imageURL}">
                    <div class="">${post.description}</div>${post.id}
                    <div class="post__tagline">posted by user name here </div>`
                }
            ).join("")
        }
        `
    }


    let html = `<div class="giffygram__feed">`

    const listItems = posts.map(post => {

        //Formatting Time
        const unixTimestamp = post.timestamp
        const milliseconds = parseInt(unixTimestamp) * 1000 
        const dateObject = new Date(milliseconds)
        const timeStamp = dateObject.toLocaleString("en-US", {timeZoneName: "short"})

        // converting userId to users name
        let username = null
        for (const user of users) {
            if (post.userId === user.id)
                 { username = user.name }}

            
  

        //Rendering The Trashcan Depending On The Current User
        let trashcan = ``
        if (post.userId === currentuser) {trashcan = `<img id="blockPost--${post.id}" class="actionIcon" src="/images/block.svg" >`}


        //Render The Posts
        return `
        <div class="post">
        <h3>${post.title}</h3>
        <img class="post__image" src = "${post.imageURL}">
        <div class="">${post.description}</div>
       <div class="post__tagline">posted by ${username} on ${timeStamp} </div>
       ${trashcan}
       <img src="/images/favorite-star-blank.svg" " id="favoritePost--${post.id}" class="actionIcon" >
       </div>
        `
    })

    html += listItems.join("")
    html += `</div>`

    return html
}




// teams.sort(function (teamA, teamB) {return teamB.score - teamA.score})
