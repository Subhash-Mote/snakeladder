const btn1=this.document.getElementById('btn');
btn1.addEventListener('click',myfun);

function myfun(){

let q1="workship";
let q2=" one more thind";
let q3="assign value";
let q4="open line 4";
let q5="five num";
let q6="close all ";
let q7="num all close to 10";
let q8="eight";
let q9="nine no";
let q10="dsfgh";
const quotenum=Math.floor(Math.random()*10+1);
console.log(quotenum);

switch(ch)
{
    case 1:
        document.body.innerText=q1;
        break;

    case 2:
        document.body.innerText=q2;
        break;
        
        case 3:
        document.body.innerText=q3;
        break;

        case 4:
        document.body.innerText=q4;
        break;

        case 5:
        document.body.innerText=q5;
        break;

        case 6:
        document.body.innerText=q6;
        break;

        case 7:
        document.body.innerText=q7;
        break;

        case 8:
        document.body.innerText=q8;
        break;
        case 9:
        document.body.innerText=q9;
        break;
        case 10:
        document.body.innerText=q10;
        break;
}
}