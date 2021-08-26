const routes = ([
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!'
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page'
        },
    },
]);

module.exports = routes;