const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money-minus')
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

//设置addTransaction函数
function addTransaction(e){
    e.preventDefault()

    //验证输入框是否为空
    if(text.value.trim() === "" || amount.value.trim() === ""){
        alert('请输入交易名称和金额')
    }else{
        const transaction = {
            id:generateID(),
            text:text.value,
            amount:+amount.value
        }
        transactions.push(transaction)
        addTransactionDOM(transaction)
        updateValues()
        text.value = ""
        amount.value = ""
    }
}

//创建
function generateID(id){
    return Math.floor(Math.random()*10000000000)
}


//添加transactions交易到DOM list中
function addTransactionDOM(transaction){
    //获得金额前面的符号
    const sign = transaction.amount < 0 ? '-':'+'

    //创建li标签
    const item = document.createElement('li')

    //基于金额的正负添加对应的类名
    item.classList.add(transaction.amount <0 ? "minus" : "plus")
    item.innerHTML = `
    ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span><button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `
    list.appendChild(item)
}

//更新余额，收入，支出的金额
function updateValues(){
    //通过map获得交易金额数组
    const amounts = transactions.map(transaction =>transaction.amount)

    //reduce（）方法得到余额
    const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2)

    //filter过滤reduce累加   收入
    const income = amounts
    .filter(item=>item>0)
    .reduce((acc,item)=>(acc+=item),0)
    .toFixed(2)

    //filter过滤reduce累加   支出
    const expense = (amounts
    .filter(item=>item<0)
    .reduce((acc,item)=>(acc+=item),0)*-1)
    .toFixed(2)
    
    balance.innerText = `$${total}`
    money_plus.innerText = `$${income}`
    money_minus.innerText =`$${expense}`
}


//设置removeTransaction
function removeTransaction(id){  
    //过滤掉没有点击的id
    transactions = transactions.filter(transaction =>transaction.id !== id)
    init()
}
//初始化应用
function init(){
    list.innerHTML = ''
    transactions.forEach(addTransactionDOM)
    updateValues()
}
init()

//事件监听
form.addEventListener('submit',addTransaction)