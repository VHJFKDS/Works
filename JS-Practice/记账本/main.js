const balance = document.getElementById('balance')
const money_plus = document.getElementById('money_plus')
const money_minus = document.getElementById('money_minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

//创建虚拟交易数组
const dummyTransactions = [
    {id:1,text:'鲜花',amount:-20},
    {id:2,text:'书籍',amount:-50},
    {id:3,text:'相机',amount:150},
    {id:4,text:'工资',amount:300},
]

let transactions = dummyTransactions

//添加transactions交易到DOM list中
function addTransactionDOM(transaction){
    //获得金额前面的符号
    const sign = transaction.amount < 0 ? '-':'+'

    //创建li标签
    const item = document.createElement('li')

    //基于金额的正负添加对应的类名
    item.classList.add(transaction.amount <0 ? "minus" : "plus")
    item.innerHTML = `
    ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span><button class="delete-btn">x</button>
    `
    list.appendChild(item)
}

//初始化应用
function init(){
    list.innerHTML = ''
    transactions.forEach(addTransactionDOM)
}
init()