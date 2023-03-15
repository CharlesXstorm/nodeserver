//const file = require("fs");
//file.writeFileSync('hello.txt','hello from node changed file here!!')

const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    res.setHeader('content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My Node Server</title></head>')
    res.write('<body>')
    res.write('<h1>My First Node Server Response</h1><p>This is an interesting skill to learn.<br>Now I have super NODEjs powers</p><hr/>')
    res.write('</body>')
    res.write('</html>')
    setTimeout(() => {
        process.exit();
    }, [1000])

})

server.listen(3000);