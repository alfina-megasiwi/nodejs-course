// Teknik Path Parameter seperti di Twitter atau Github
server.route({
    method: 'GET',
    // path: '/users/{username}',
    // agar path parameter bersifat opsional, tambahkan tanda "?"
    path: '/users/{username?}',
    handler: (request, h) =>{
        // const {username} = request.params;
        // untuk yg opsional
        const {username = 'stranger'} = request.params;
        return `Hello, ${username}!`;

        // bisa lebih dari satu prameter, namun optional path hanya bisa di akhir bagian path saja
    }
});