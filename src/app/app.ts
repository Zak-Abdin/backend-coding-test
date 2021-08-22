import express, {Express} from 'express'
import router from "../routes/api-v1";
import {Connection} from "typeorm";
import dbConnection from '../db/db';

class App {
    public express: Express
    private db: Connection;

    constructor() {
        this.db = dbConnection
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(): void {
        this.express.use('/api/v1', router)
    }
}


export default new App().express