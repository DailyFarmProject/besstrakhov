const getBadWords=(badWord:string[])=>(currentWord:string)=>{
    let check=false;
    let isChecked=false;
    badWord.forEach((word:string)=>{
        if(currentWord.length-word.length<2&&!check) {
            check = word.includes(currentWord.toLowerCase())
            isChecked=true;
        }})
    return !isChecked?true:!check;
}

export const checkBadWords=getBadWords(["very","bad"])

export const checkLenght=(str:string,count:number)=>{
    return str.length>count;
}

export const checkMail=(email:string)=>{
    const pattern=/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email)
}



