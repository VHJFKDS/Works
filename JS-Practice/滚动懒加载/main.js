const postsContainer = document.getElementById('posts-container')
const loading = document.querySelector('.loader')
const filter = document.getElementById('filter')

let limit = 5
let page = 1

//fetch posts from API接口
async function getPosts(){ 
    //通过fetch得到想要的数据，await等待fetch请求
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${page}`)
    //对以上结果进行转换，再返回出去
    const data = await res.json()
    return data
}

//show posts in DOM
async function showPosts(){
    //posts获取上面返回的data
    const posts = await getPosts()

    posts.forEach(post => {
        const postEl = document.createElement('div')
        postEl.classList.add('post')
        postEl.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
        </div>
        `;
        postsContainer.appendChild(postEl)
    });
}

//初始化页面
showPosts()