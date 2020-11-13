const word = document.getElementById('word')
const text = document.getElementById('text')
const scoreEl = document.getElementById('score')
const timeEl = document.getElementById('time')
const endgameEl = document.getElementById('end-game-container')
const settingsBtn = document.getElementById('settings-btn')
const settings = document.getElementById('settings')
const settingsForm = document.getElementById('settings-form')
const difficultySelect = document.getElementById('difficulty')



//游戏单词
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'ples',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'

]

//初始随机单词
let randomWord 

//初始得分
let score = 0

//初始时间
let time = 10

//聚焦到text输入框
text.focus()

//开始倒数
const timeInterval = setInterval(updateTime, 1000);

//设置随机产生单词
function getRandomWord(){
    return words[Math.floor(Math.random()*words.length)]

}

//更新单词到DOM
function addWordToDOM(){
    randomWord = getRandomWord()
    word.innerHTML = randomWord
}
addWordToDOM()


//更新得分
function updateScore(){
    score++
    scoreEl.innerHTML = score
}

//更新剩余时间updateTime
function updateTime(){
    time--
    timeEl.innerHTML = time +'s'
    if(time === 0){
        clearInterval(timeInterval)
        gameOver()
    }
}

//游戏结束
function gameOver(){
    endgameEl.style.display = 'flex'
    endgameEl.innerHTML = `
    <h1>游戏结束</h1>
    <p>您的最终得分为${score}</p>
    <button onclick="location.reload()">再玩一次</button>
    `
}


//设置text的事件监听
text.addEventListener('input',e=>{
    const insertedText = e.target.value
    if(insertedText === randomWord){
        addWordToDOM()
        updateScore()
        e.target.value = ''

        time+=5
        updateTime()
    }
})
