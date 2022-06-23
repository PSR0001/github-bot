/*******************************************
 * Key Concept:
 *      git commit --date = "Sun 19th july"
 *      
 * 
 * 
 * 
 * 
 *******************************************/

'use strict'; //use in strict mode
//Import modules
const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')
const random = require('random')

const FILE_PATH = './data.json';

//create a function :: Function expressions
const makeCommit = n => {
    if (n === 0) return simpleGit().push(); ///recursive call end .... git push 

    const x = random.int(0, 8) // 2months have 8 week 
    const y = random.int(0, 6) // week have 7days for that 0-6 use here

    /*For better understanding goto https://momentjs.com */
    const DATE = moment().subtract(2, 'months').add(x, 'w').add(y, 'd').format(); // back to 2 months ago 

    const data = {
        date: DATE
    }

    console.log(DATE);

    jsonfile.writeFile(FILE_PATH, data, () => {
        simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }, makeCommit.bind(this, --n)) //recursive call
    })
}

makeCommit(100) // create 100 commit


