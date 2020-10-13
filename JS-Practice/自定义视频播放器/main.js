const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

//点击或暂停播放
function toggleVideoStatus(){
    if(video.paused){  //视频暂停就播放，反之暂停
        video.play()
        play.className = 'active'
    }else{
        video.pause()
        play.className = 'btn'
    }
}
//点击video更新进度条和时间戳
function updateProgress(){
    //进度条=（视频播放进度/视频总长度）*100
    progress.value = (video.currentTime / video.duration) * 100

    //获取分钟数
    let mins = Math.floor(video.currentTime/60)  //向下取整
    if(mins <10){
        mins = '0' + String(mins)
    }
    //获取秒数
    let secs = Math.floor(video.currentTime%60)  //向下取整
    if(secs < 10){
        secs = '0'+String(secs)
    }
    //插入时间戳
    timestamp.innerHTML = `${mins}:${secs}`
}

//停止视频
function stopVideo(){
    video.currentTime = 0
    video.pause()
    play.className = 'btn'
}

//拖动进度条的时候改变播放内容和时间戳
function setVideoProgress(){
    //当前进度=进度条的值*视频总长/100
    video.currentTime = (+progress.value*video.duration)/100
}
//添加事件监听
video.addEventListener('click',toggleVideoStatus)
video.addEventListener('timeupdate',updateProgress)

play.addEventListener('click',toggleVideoStatus);
stop.addEventListener('click',stopVideo);
progress.addEventListener('change',setVideoProgress)