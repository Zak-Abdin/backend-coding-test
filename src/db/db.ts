import "reflect-metadata"
import { createConnection, Connection } from "typeorm";


class DB {
    public connection: Connection;

    constructor() {
        this.init().then(r => this.checkConnection())
    }

    private async init() {
        this.connection  = await createConnection({
            type: "mysql",
            database: 'node_test_app',
            username: 'admin',
            password: 'admin123',
            synchronize: true,
            logging: false,
            entities: []
        });
    }

    private checkConnection(): void {
        console.log('Db connection is success: ', typeof this.connection !== 'undefined')
    }
}

export default new DB().connection;