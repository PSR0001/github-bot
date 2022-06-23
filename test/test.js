const jsonfile = require ('jsonfile')
const moment = require('moment')
const random=require('random')

const FILE_PATH='./data.json';

//create a function

const makeCommit = n => {
    if(n===0) return "end" ///recursive call end .... git push

    const x = random.int(0,8)
    const y = random.int(0,6)
    const DATE = moment().subtract(2,'months').add(x,'w').add(y,'d').format();

    const data = {
        date:DATE
    }

    console.log(`Date : ${DATE}`);

    jsonfile.writeFile(FILE_PATH,data,()=>{
        makeCommit(--n)
    }) 
    
}

makeCommit(50) // create 100 commit


