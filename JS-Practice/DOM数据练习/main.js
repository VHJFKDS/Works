//获取节点
const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionairesBtn = document.getElementById('show-millionaires')
const sort = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate-wealth')

//创建data用来存用户信息
let data = []

//fetch random user and add money
function getRandomUser(){
    fetch('https://randomuser.me/api').then(res=>res.json())
    .then(data=>console.log(data))
}