import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import { NODE_ENV } from './../setup/env'

export default function (server) {
    server.use(cors())

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))

    server.use(express.static(path.join(__dirname, '..', '..', 'public')))

    if(NODE_ENV !== 'production') {
        server.use(morgan('tiny'))
    }
}