/*  Fungsi handler memiliki parameter request dan h
    request param: objek yg menampung detail dari permintaan client, seperti path, query, payload, headers
    h param: response toolkit (objek yg menampung banyak sekali method yg digunakan untuk menanggapi permintaan client)
    h == response di Node.js native
*/

// 1
server.route({
    method: 'GET',
    path: '/user',
    handler: (request, h) => {
        /*  Hapi bisa langsung mengembalikan nilai dalam bentuk teks, teks HTML, JSON, steam, promise
            return `Homepage`;
            namun, dengan cara di atas, value status response selalu 200 Ok
        */
        return h.response('created').code(201);

        // fungsi handler harus punya kembalian
    },
});


// h juga bisa digunakan untuk menetapkan header response, content type, content length, dsb.

// 2
const handler = (request, h) => {
    const response = h.response('success');
    response.type('text/plain');
    response.header('X-Custom', 'some-value');
    return response;
};
 
// 3
const handler = (request, h) => {
    return h.response('success').type('text/plain').header('X-Custom', 'some-value');
};