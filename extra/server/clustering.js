import cluster from 'cluster';
import os from 'os'
import express from 'express'
import { log } from 'console';


const num = os.cpus.length
console.log(num);

const PORT = 8080;
if (cluster.isPrimary) {
    for (let i = 0; i < num; i++) {
        cluster.fork()
    }

    // cluster.on('exit', () => {

    //     cluster.fork()

    // })
}
else {
    const app = express()
    app.get("/", (req, res) => {
        res.send("Hello there !!")
    })
    // app.get('/t', (req, res) => {
    //     let count = 0
    //     for (let i = 0; i < 10000; i++) {
    //         count++
    //     }
    //     return res.status(200).json({ process: process.pid, count })
    // })


    app.listen(PORT, () => {
        console.log(`listeing on server:${PORT}`);

    })

}