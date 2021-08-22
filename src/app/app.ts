import express, {Express} from 'express'
import router from "../routes/api-v1";

class App {
    public express: Express

    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(): void {
        this.express.use('/api/v1', router)
    }
}


export default new App().express