import fetch from 'node-fetch';

async function testfetch(){
    for(let i; i < 70; i++){
        const response = await fetch("'http://localhost:3001/download")
        console.log("ok")
    }
}

testfetch()