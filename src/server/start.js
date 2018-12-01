import { PORT } from './../setup/env'

export default function (server) {
    server.listen(PORT, (err) => {
        if (err) {
            console.error('error - unable to start server')
        } else {
            console.info('Server started')
        }
    })

    process.on('SIGTERM', function() {
        server.close(function () {
            console.log('finished all requests. Server stopped.')
        })
    })
}