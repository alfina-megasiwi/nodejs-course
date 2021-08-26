// Tidak usah menggunakan stream untuk mendapatkan data
// Hapi secara default akan mengubah payload JSON menjadi objek JavaScript
// jadi gausah lagi pakai JSON.parse()
server.route({
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
        const {username, password} = request.payload;
        return `Welcome ${username}!`;
    }
});

// client mengitimkan data login dengan struktur:
// { "username": "harrypotter", "password": "encryptedpassword" }
