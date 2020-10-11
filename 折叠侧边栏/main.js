//获取节点
const toggle = document.getElementById('toggle')
const close = document.getElementById('close')
const open = document.getElementById('open')
const modal = document.getElementById('modal')  //大外框的modal

//Toggle nav
toggle.addEventListener('click',()=>document.body.classList.toggle("show-nav"))


//Show modal
open.addEventListener('click',()=>modal.classList.add('show-modal'))

//Hide modal
close.addEventListener('click',()=>modal.classList.remove('show-modal'))

//Hide modal on outside click
//监听整个窗口，如果点击的是modal(登录框外灰色界面)则为true，执行函数关闭登录框。否则点的是登录框以内则会false，不执行。
window.addEventListener('click',e=>
  e.target == modal ? modal.classList.remove('show-modal'):false
)
