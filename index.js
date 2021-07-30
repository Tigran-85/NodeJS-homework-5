const os = require('os');

const fs = require('fs').promises;

const fsExtra = require('fs-extra')



//Homework1

// const data = JSON.stringify(os.userInfo());
// const dataUser = os.userInfo().username;

// fs.writeFile(`${dataUser}.txt`, data, (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log(data);
// });

//Homework2

// const date = new Date();

// const dateFile = `./${date.getMonth()}_${date.getDay()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}.txt` 

// fs.rename('./user.txt', dateFile, () => {
//     console.log('file renamed');
// });

//Homework3


// fs.open('./homework3.txt', 'r+', (err, openedFile) => {
//     const buffer = Buffer.alloc(65536);
//     fs.read(openedFile, buffer, 0, buffer.length, 0, (err, byteRead) => {
//          let text = buffer.slice(0, byteRead).toString();
//          let textDeleted = text.replaceAll(',', '');
//          fs.write(openedFile, textDeleted, function() {
//             console.log('commons deleted');
//         });
//         fs.writeFile('./replace.txt', textDeleted, () => {
//             console.log('file writed');
//         });
//         fs.unlink('./homework3.txt', () => {
//             console.log('file deleted');
//         });
//     });
    
// });

//Homework4

// const web = ['html','css','js','txt'];

// fs.mkdir('web', () => {
//     console.log('folder created');
//     for(let key in web){
//         fs.writeFile(`./web/${web[key]}.${web[key]}`, web[key], () => {
//             console.log('ok');
//         }); 
//     }
  
// });

//Homework5-version-1-callback

// fs.readdir('homework5', (err, data) => {
//     console.log(data);
//     fs.mkdir('newDir', () => {
//         console.log('The new folder is created');
        
//     });
//     for(let i = 0; i < data.length; i++){
//         fs.stat(`${data[i]}`, (err, stats) => {
//             if(stats.size > 1024){
//                 fsExtra.move(`./homework5/${data[i]}`, `./newDir/${data[i]}`, () => {
//                     console.log('file moved');
//                 })
//             }
//         })
//     }
// });

//version-2-promises

fs.readdir('./Homework5').then((data) => {
    console.log(data);
    fs.mkdir('./newDir').then(() => {
        console.log('he new folder is created');
        for(let i = 0; i < data.length; i++){
            fs.stat(`${data[i]}`).then((stats) => {
                if(stats.size > 1024){
                    fsExtra.move(`homework5/${data[i]}`, `newDir/${data[i]}`).then(() => {
                        console.log('ok');
                    }) 
                }
            })
        }
        
    })
})