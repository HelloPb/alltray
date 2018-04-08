const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./../databases/db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    // Continue to JSON Server router
    next()
})

// Add custom routes before JSON Server router
router.get('/api/c', function (req, res, next) {

    const c = mock.db.get('c').value();

    let r = [];

    if (req.query.name) {
        c.forEach(element => {
            if (element.name.indexOf(req.query.name) !== -1) {
                r.push(element);
            }
        });
    } else {
        r = c;
    }

    res.send(r);
});

server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))

// Use default router
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})
