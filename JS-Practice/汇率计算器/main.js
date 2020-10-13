//获取节点
const currency_one = document.getElementById('currency-one')
const amount_one = document.getElementById('amount-one')
const currency_two = document.getElementById('currency-two')
const amount_two = document.getElementById('amount-two')

const swap = document.getElementById('swap')
const rate = document.getElementById('rate')

//通过fetch获取汇率并实现dom更新
function calculate(){
    const currencyEl_one = currency_one.value
    const currencyEl_two = currency_two.value

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
}
calculate()

//事件监听
currency_one.addEventListener('change',calculate)
amount_one.addEventListener('input',calculate)
currency_two.addEventListener('change',calculate)
amount_two.addEventListener('input',calculate)
