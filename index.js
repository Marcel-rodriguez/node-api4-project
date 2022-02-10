const server = require('./api/server')
require('dotenv').config()

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`\n*** Server running on http://localhost:${PORT} ***\n`)
})