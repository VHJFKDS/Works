var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('方方说：含查询字符串的路径\n' + pathWithQuery)

  if(path === '/'){      //如果用户请求的路径是根目录
    var string = fs.readFileSync('./index.html','utf8')  
    var amount = fs.readFileSync('./db','utf8')    //读取这两个文件里的内容
    string = string .replace('&&&amount&&&',amount)  //把db数据库文件里的内容替换进文中&&&amount&&&处
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(string)
    response.end()
  }else if(path === '/server.js'){
    var string = fs.readFileSync('./server.js','utf8')
    response.setHeader('Content-Type', 'application/javascrip')
    response.write(string)
    response.end()
  }else if(path === '/pay'){  //如果路径是pay
    var amount = fs.readFileSync('./db','utf8') //100
    var newAmount = amount - 1
    fs.writeFileSync('./db',newAmount)
    response.setHeader('Content-Type', 'application/javascript')
    response.write(`
      amount.innerText = amount.innerText - 1`)   //这段代码为什么会被当做js执行，是因为它基于http协议，上面就声明了是js代码，而且我们以script引入
    response.end()
  }else{
    response.statusCode = 400
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('找不到对应路径，你需要自行修改index.js')
    response.end()
  }



  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)


