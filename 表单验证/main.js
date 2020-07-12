//get element
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//show input error message
function showError(input,message){
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}
//show success
function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}
//check email is valid
function checkEmail(input){
    const re = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input,'邮箱格式错误')
    }
}

//checkRequired input
function checkRequired(inputArr){
   inputArr.forEach(function(input){    //遍历input标签，获取四个的value值，
       if(input.value.trim() ===''){    //trim()去掉头尾空格
           showError(input,`${input.placeholder}为必填项`)
       }else{
           showSuccess(input)
       }
   });
}

//checkLength
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${input.placeholder}至少需要${min}个字符`)
    }else if(input.value.length > max){
        showError(input,`${input.placeholder}不得超过${max}个字符`)
    }else{
        showSuccess(input)
    }
}
//checkPasswordsMatch
function checkPasswordsMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'密码不匹配')
    }
}

//event listener
form.addEventListener('submit',function(e){
    e.preventDefault()   
    checkRequired([username,email,password,password2])
    // checkRequired(username)
    // checkRequired(email)
    // ...
    checkLength(username,3,15)
    checkLength(password,6,12)
    checkEmail(email)
    checkPasswordsMatch(password,password2)
})













// //event listener
// form.addEventListener('submit',function(e){
//     e.preventDefault()    //取消默认刷新
//     if(username.value === ''){
//         showError(username,'用户名为必填项')
//     }else{
//         showSuccess(username)
//     }
//     if(email.value === ''){
//         showError(email,'邮箱为必填项')
//     }else if(!isValidEmail(email.value)){   //如果不符合格式
//         showError(email,'邮箱格式错误')
//     }else{
//         showSuccess(email)
//     }
//     if(password.value === ''){
//         showError(password,'密码为必填项')
//     }else{
//         showSuccess(password)
//     }
//     if(password2.value === ''){
//         showError(password2,'确认密码为必填项')
//     }else{
//         showSuccess(password2)
//     }
// })