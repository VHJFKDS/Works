const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')
let ticketPrice = +movieSelect.value   //变成number

populateUI()
//更新座位数及总票价
function undateSeletedCount(){ 
    const selectedSeats = document.querySelectorAll('.row .seat.selected')   //选取所有被点击的座位

    //下面获取索引数组
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))  //通过map返回新数组
    // const seatsIndex = [...selectedSeats].map(function(seat){
    //     return [...seats].indexOf(seat)  //筛选出第一次出现的索引值
    // })

    //将获得的索引值进行本地存储
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex))  //运用json来变成字符串

    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex))
    const selectedSeatsCount = selectedSeats.length  //选中座位计数
    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount*ticketPrice
}
//保存电影索引值和票价
function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex)
    localStorage.setItem('selectedMoviePrice',moviePrice)
}

//获取本地数据并渲染样式
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1){  //如果本地索引值出现的话
                 seat.classList.add('selected')
            }
        })
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')
    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex
    }
}
//电影下拉框事件监听
movieSelect.addEventListener('change',e=>{
    ticketPrice = +e.target.value
    setMovieData(e.target.seatsIndex,e.target.value)
    undateSeletedCount()
})
//座位点击事件
container.addEventListener('click',e=>{   //选中整个座位区域
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        //选中class名有seat，但不包含occupied的类
        e.target.classList.toggle('selected')  //toggle切换，开关
        undateSeletedCount()
    }
})

//设置初始座位和总票价
undateSeletedCount()