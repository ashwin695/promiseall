const posts = [
    { title: 'Post One', body: 'This is Post One' },
    { title: 'Post Two', body: 'This is Post Two' },
]

function getPosts(){
    setTimeout(() => {
        let output = ''
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            
            const error = false

            if(!error){
                resolve()
            } else {
                reject('Error: Something went wrong')
            }
        }, 2000)
    })
}

/* createPost({ title: 'Post Three', body: 'This is Post three' })
    .then(getPosts)
    .catch(err => console.log(err)) */

const promise1 = Promise.resolve('Hello World')
const promise2 = 10
const promise3 = new Promise((resolve, reject) => 
    setTimeout(resolve, 2000, 'GoodBye')
)

Promise.all([promise1, promise2, promise3]).then(values => console.oog(values))