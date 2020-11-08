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

//showLoading
function showLoading(){
    loading.classList.add('show')
    setTimeout(() => {
        loading.classList.remove('show')
        setTimeout(() => {
            page++;
            showPosts()
        }, 300);
    },800)
}


//filterPosts
function filterPosts(e){
   const term = e.target.value.toUpperCase() 
   const posts = document.querySelectorAll('.post')
   posts.forEach(post=>{  //遍历posts里的每个post
       const tilte = post.querySelector('.post-title').innerText.toUpperCase()
       const body = post.querySelector('.post-body').innerText.toUpperCase()

       //判断tilte和body里的内容是否匹配输入的
       if(tilte.indexOf(term) > -1 || body.indexOf(term) > -1){
          post.style.display = 'flex'
       }else{
           post.style.display = 'none'
       }
   })
}


//初始化页面
showPosts()

//事件监听
window.addEventListener('scroll',()=>{
    const {scrollTop,scrollHeight,clientHeight} = document.documentElement

    //滚动条顶部和视口顶部高度+body视口高度 >=元素内容高度，代表已滚动到底部，-5是为了提高灵敏度
    if(scrollTop+clientHeight >= scrollHeight-5){
       showLoading()
    }
})

filter.addEventListener('input',filterPosts)