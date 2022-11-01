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
let promise1;
function createPost(post){
    return promise1 = new Promise((resolve,reject)=>{
        
        posts.push(post);
        if(posts.length==3){
            resolve();
        }else{
            reject();
        }
    })
}

createPost({title : "post three", body : "My third post"})
.then(()=>{
    console.log("hurray your new post added successfully at "+ new Date().toUTCString())
    getPost();
})
.catch(()=>{
    console.log("There's something wrong with your code check it once.")
})

let promise2;
function deletePost(){
    
    return promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
        posts.pop();
        if(posts.length==2){
            resolve();
        }else{
            reject();
        }
    },3000);
    })
}
deletePost().then(()=>{
    console.log("your post deleted successfully.")
    getPost();
})
.catch(()=>{
    console.log("your post didn't deleted,pls.check it why it was happened.")
})

Promise.all([promise1,promise2]).then(()=>{
    console.log("Both operations done successfully.");
})
.catch(()=>{
    console.log("Neither of the two failed to execute.")
})