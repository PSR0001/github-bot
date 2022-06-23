/**************************
 * Key Concept:
 *      git commit --date = "Sun 19th july"
 *      
 * 
 * 
 * 
 * 
*/



const jsonfile = require ('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')
const random=require('random')

const FILE_PATH='./data.json';

//create a function

const makeCommit = n => {
    if(n===0) return simpleGit().push(); ///recursive call end .... git push

    const x = random.int(0,12)
    const y = random.int(0,6)
    const DATE = moment().subtract(6,'m').add(x,'w').add(y,'d').format();

    const data = {
        date:DATE
    }

    console.log(DATE);

    jsonfile.writeFile(FILE_PATH,data,()=>{
        simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE},makeCommit.bind(this,--n)) //recursive call
    })
}

makeCommit(200) // create 100 commit


