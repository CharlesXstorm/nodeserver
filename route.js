
const file = require('fs')

const routeHandler = (req,res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write("<h1>Enter Your Request Message Here</h1>")
        res.write("<form action='/message' method='POST'>")
        res.write("<textarea name='message' rows='4' cols='50'>send a message to CharlesXstorm</textarea><br>")
        //res.write("<br>")
        res.write("<button type='submit'>Submit</button>")
        res.write('</form>')
        return res.end()
    }
    if (url === '/message' && method === 'POST') {
        const body = []

        req.on('data', (chunk) => {
            body.push(chunk)
        })
        return req.on('end', () => {
            const parsedbody = Buffer.concat(body).toString()
            //console.log(parsedbody)
            const message = parsedbody.split('=')[1]
            file.writeFile('Messages.txt', message, err => {
                res.statusCode = '302'
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My Node App</title></head>')
    res.write('<body><h1>Hello User</h1><p>This is an HTML page supplied from the server</p></body>')
    res.write('</html>')
    res.end()
}

module.exports = routeHandler