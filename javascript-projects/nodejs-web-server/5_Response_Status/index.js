/*  Status Code:
    100-199 : informational responses.
    200 - 299 : successful responses.
    300-399 : redirect.
    400-499 : client error.
    500-599 : server errors.
    */

const requestListener = (request, response) => {
    // request resource yg diminta tidak ada
    response.statusCode = 404;

    // mengubah status message 404 (defaultnya 'not found')
    // sebaiknya status message tidak perlu diubah
    response.statusMessage = 'User is not found';
}