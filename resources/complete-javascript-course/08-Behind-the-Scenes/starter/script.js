'use strict';

function calcAge(birthYear){
    const demoYear = 2037
    const age = demoYear - birthYear
    function printAge(){
        const firstName = 'GG'
        let  output  = `${firstName} you are ${age} born in ${birthYear} in the year ${demoYear}`
        console.log(output)
        if(birthYear >= 1981 && birthYear<= 1996){
            const str = `Oh you are a millennial, ${firstName}`
            console.log(str);
            function add(a, b){
                return a+ b
            }
            output = 'NEW'
            console.log(output);
        }
        console.log(output);
    }
    printAge()
    return age
}
const firstName = 'Gergely'
calcAge(1983)