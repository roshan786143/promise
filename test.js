const posts = [
    {title : "post one", body : "My first post"},
    {title : "post two", body : "My second post"}
]

function getPost(){
    let output = "";
    posts.forEach((post)=>{
        output += `<li>${post.title} and this is ${post.body}</li>`
    })
    document.body.innerHTML = output;
}

getPost();
let createPost,deletePost;

const main = async(post)=>{
    createPost = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(post),3000);
    })

    deletePost = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(post),5000);
    })
    let create_post = await createPost;
    posts.push(post);
        console.log(posts);
        console.log(posts.length);
    console.log("hurray your new post added successfully at "+ new Date().toUTCString())
    getPost();

    let delete_post = await deletePost;
    posts.pop();
    console.log(posts);
    console.log(posts.length);
    console.log("your post deleted successfully.")
    getPost();
}

main({title : "post three", body : "My third post"})
.then(()=>{
    console.log("Both operations Done successfully.");
})
.catch(()=>{
console.log("Neither of the two failed to execute.");
})