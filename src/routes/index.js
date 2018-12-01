import user from './user'
export default async function (server) {
    server.use('/users', user)
}