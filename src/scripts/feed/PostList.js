import {getPosts,getUsers} from "../data/provider.js"






export const postList = () => {
    const posts = getPosts()
    const users = getUsers()

    let html = `<div class="giffygram__feed">`

    const listItems = posts.map(post => {
 // converting userId to users name
    let username = null
    for(const user of users){
        if (post.userId === user.id){
            username = user.name
        }
    }

        //return formmated posts
        return `
        <div class="post">
        <h3>${post.title}</h3>
        <img class="post__image" src = "${post.imageURL}"></img>
        <div class="">${post.description}</div>
       <div class="post__tagline">posted by ${username} on ${finaldate}</div>
       </div>
        `
    })

    html += listItems.join("")
    html += `</div>`

    return html
}