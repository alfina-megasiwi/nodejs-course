// mendapatkan nilai url
const requestListener = (request, respone) => {
    /*  properti url mengembalikan nilai path secara lengkap, tanpa host dan port yg digunakan server
        contoh:
        http://localhost:5000/about
        maka url akan bernilai
        /about
    */
    const {url} = request;

    if(url === '/'){
        // curl http://localhost:5000/
        if(method === 'GET'){
            // curl -X GET http://localhost:5000/
        }
        // curl -X <any> http://localhost:5000/
    }

    if(url === '/about'){
        // curl http://localhost:5000/about
        if(method === 'GET'){
            // curl -X GET http://localhost:5000/about
        }
        // curl -X <any> http://localhost:5000/about

    }

    // curl http://localhost:5000/about/<any>
};