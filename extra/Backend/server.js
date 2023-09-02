import express from "express";
import cors from 'cors'
import fs from 'fs'
import { Transform, pipeline } from "stream";
import { log } from "console";

import os from "os"
import cluster from "cluster";

const cpuNum = os.cpus().length
// app.use(express.json())
// app.use(cors())
if (cluster.isPrimary) {
    for (let i = 0; i < cpuNum; i++) {
        cluster.fork()
    }
    cluster.on("exit", () => { cluster.fork() })
}
else {
    const app = express()


    // const readStream = fs.createReadStream('input.txt')
    // const writeStream = fs.createWriteStream(" output.txt")
    // const replaceWord = new Transform({
    //     transform(chunk, encoding, callback) {
    //         const final = chunk.toString().replaceAll(/ipsum/gi, ' cool').toUpperCase()
    //         // console.log(final.toString())
    //         callback(null, final)
    //     }
    // })


    app.get('/', (req, res) => {
        // readStream.pipe(replaceWord).pipe(writeStream)
        // pipeline(readStream,
        //     replaceWord,
        //     writeStream,
        //     (err) => {
        //         if (err) {
        //             console.log(err.message);
        //         }
        //     })
        res.send(" hello")


    })


    app.listen(4001, () => {

        console.log(` server is runnig on 4001 and os:`);

    })
}