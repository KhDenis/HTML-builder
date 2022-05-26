const fs  = require("fs")
const path = require("path");
const { stdout,stdin } = require("process");
const output = fs.createWriteStream(path.join(__dirname,'destination.txt'));

stdout.write("Write your data \n")
stdin.on('data', chunk => {
    if(chunk.toString().trim()=="exit")
    {
        process.exit()
    }
    output.write(chunk)
})
stdin.on('error', error => console.log('Error', error.message));