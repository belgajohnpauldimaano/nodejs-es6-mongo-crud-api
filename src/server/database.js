import mongoose from 'mongoose'
import { MONGODB_URL } from './../setup/env'


export default function () {
    console.log(`connecting to ${MONGODB_URL} database...`)

    mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useCreateIndex: true })  
    mongoose.Promise = global.Promise
}