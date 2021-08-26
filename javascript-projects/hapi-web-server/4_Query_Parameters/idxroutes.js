// Teknik yg digunakan pada perminttan yg membutuhkan query dari client (example: filter data)
// Data yg dikirim melalui query berformat key = value
// localhost:5000?name=harry&location=bali

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        const {name, location} = request.query;
        return `Hello ${name} from ${location}`;
    },
});