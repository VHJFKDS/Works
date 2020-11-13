const main = document.querySelector('main')
const voicesSelect = document.getElementById('voices')
const textarea = document.getElementById('text')
const readBtn = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.getElementById('close')


//创建data
const data = [
    {
        image:'./img/spring01.jpg',
        text:'春暖花开'
    },
    {
        image:'./img/summer01.jpg',
        text:'夏阳酷暑'
    },
    {
        image:'./img/autumn01.jpg',
        text:'雁过留声'
    },
    {
        image:'./img/winter01.jpg',
        text:'白雪皑皑'
    },
    {
        image:'./img/spring02.jpg',
        text:'草长莺飞'
    },
    {
        image:'./img/summer02.jpg',
        text:'骄阳似火'
    },
    {
        image:'./img/autumn02.jpg',
        text:'一叶知秋'
    },
    {
        image:'./img/winter02.jpg',
        text:'瑞雪纷飞'
    },
    {
        image:'./img/spring03.jpg',
        text:'鸟语花香'
    },
    {
        image:'./img/summer03.jpg',
        text:'艳阳高照'
    },
    {
        image:'./img/autumn03.jpg',
        text:'秋风瑟瑟'
    },
    {
        image:'./img/winter03.jpg',
        text:'雪中送炭'
    },
]
data.forEach(createBox)

//存储语音
let voices = []
function getVoices(){
    voices = speechSynthesis.getVoices()
    voices.forEach(voice=>{
        const option = document.createElement('option')
        option.value = voice.name
        option.innerText = `${voice.name} ${voice.lang}`
        voicesSelect.appendChild(option)
    })
}


//切换语音
speechSynthesis.addEventListener('voiceschanged',getVoices)



//createBox
function createBox(item){
    const box = document.createElement('div')
    const {image,text} = item
    box.classList.add('box')
    box.innerHTML = `
    <img src="${image}" alt="${text}">
    <p class="info">${text}</p>
    `
    main.appendChild(box)
}

//切换文字框事件监听
toggleBtn.addEventListener('click',()=>document.getElementById('text-box').classList.toggle('show'))

//关闭按钮
closeBtn.addEventListener('click',()=>document.getElementById('text-box').classList.remove('show'))

