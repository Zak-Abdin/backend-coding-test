import * as process from "process";
import app from "./app/app";

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Application running on port ${port}`)
})