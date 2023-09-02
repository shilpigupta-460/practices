
// import { fork } from 'child_process'
// import { log } from 'console';
// console.log('child process', process.pid);

// let count = 0
// for (let i = 0; i < 10000000000; i++) {
//     count++
// }
// process.on('message', (message) => {
//     // res.status(200).json({ total: data })
//     console.log(message)

// })

import { spawn } from 'child_process'
const listFile = spawn('ls', [' / b'], { shell: true });
listFile.stdout.on('data', (data) => {
    console.log(data.toString())

})

listFile.stderr.on('error', (error) => {
    console.log(error.message)

})
listFile.on('error', (error) => {
    console.log(error.message)

})