/*For Binary Calculator*/
function fnCalSum(dno1,dno2){
    let sum=dno1+dno2;
    res.innerHTML=sum.toString(2);
}
function fnCalSub(dno1,dno2){
     let sub=dno1-dno2;
    res.innerHTML=sub.toString(2);
}
function fnCalMul(dno1,dno2){
    let mul=dno1*dno2;
    res.innerHTML=mul.toString(2);
}
function fnCalDiv(dno1,dno2){
    let div=dno1/dno2;
    res.innerHTML=div.toString(2);
}
function fnToDec(no1,no2,ch){
    let dn1=0,dn2=0;
    let i=0;
    
    while(no1!=0){
        let a=no1%10;
        dn1+=a*(2**i);
        no1=parseInt(no1/10);
        i++;
    }
    i=0;
    while(no2!=0){
        let a=no2%10;
        dn2+=a*(2**i);
        no2=parseInt(no2/10);
        i++;
    }
    
    if(ch=='+') {
        fnCalSum(dn1,dn2);
    }
    else if(ch=='-') {
        fnCalSub(dn1,dn2);
    }
    else if(ch=='*') {
        fnCalMul(dn1,dn2);
    }
    else if(ch=='/') {
        fnCalDiv(dn1,dn2);
    }
}

function fnad0() {
    let res=document.getElementById('res');
    res.innerHTML +=0;
}
function fnad1(){
     let res=document.getElementById('res');
    res.innerHTML+=1;
}
function fnClr(){
    let res=document.getElementById('res');
    res.innerHTML='';
}
function fnEql(){

    let res=document.getElementById('res');
        try{
            if(res.innerHTML.includes('+')){        
               let operand=res.innerHTML.split('+');
                let n1=Number(operand[0]);
                let n2=Number(operand[1]);
                 
                fnToDec(n1,n2,'+');
               
                
                
             }
            else if(res.innerHTML.includes('-')){        
               let operand=res.innerHTML.split('-');
                let n1=Number(operand[0]);
                let n2=Number(operand[1]);
                fnToDec(n1,n2,'-');
            }
            else if(res.innerHTML.includes('*')){        
               let operand=res.innerHTML.split('*');
                let n1=Number(operand[0]);
                let n2=Number(operand[1]);
                fnToDec(n1,n2,'*');
            }
            else if(res.innerHTML.includes('/')){        
               let operand=res.innerHTML.split('/');
                let n1=Number(operand[0]);
                let n2=Number(operand[1]);
                fnToDec(n1,n2,'/');
            }
        }
        catch(e){
            res.innerHTML=e.message;
        }
}
function fnadSum(){
    let res=document.getElementById('res');
    res.innerHTML+='+';
}
function fnadSub(){
    let res=document.getElementById('res');
    res.innerHTML+='-';
}
function fnadMul(){
    let res=document.getElementById('res');
    res.innerHTML+='*';
}
function fnadDiv(){
    let res=document.getElementById('res');
    res.innerHTML+='/';
}

/*For Normal Calculator*/
function f1(){
    res2=document.getElementById('res2');
    res2.innerHTML+=1;
}
function f2(){
    res2=document.getElementById('res2');
    res2.innerHTML+=2;
}
function f3(){
    res2=document.getElementById('res2');
    res2.innerHTML+=3;
}
function fClr(){
    res2=document.getElementById('res2');
    res2.innerHTML="";


}
function fDel(){
}
function f4(){
    res2=document.getElementById('res2');
    res2.innerHTML+=4;
}
function f5(){
    res2=document.getElementById('res2');
    res2.innerHTML+=5;

}
function f6(){
    res2=document.getElementById('res2');
    res2.innerHTML+=6;

}

function f7(){
    res2=document.getElementById('res2');
    res2.innerHTML+=7;

}
function f8(){
    res2=document.getElementById('res2');
    res2.innerHTML+=8;

}
function f9(){
    res2=document.getElementById('res2');
    res2.innerHTML+=9;

}

function f0(){
    res2=document.getElementById('res2');
    res2.innerHTML+=0;

}

function fEql(){
    let res2=document.getElementById('res2');
        try{

            if(res2.innerHTML.includes('+')){        
               let operand=res2.innerHTML.split('+');
                let n1=Number(operand[0]);
                let n2=Number(operand[1]);
                res2.innerHTML=n1+n2;             
            }

            else if(res2.innerHTML.includes('-')){        
               let operand=res2.innerHTML.split('-');
                let n1=Number(operand[0]);
                let n2=Number(operand[1]);
                res2.innerHTML=n1-n2;
                
            }
            else if(res2.innerHTML.includes('*')){        
               let operand=res2.innerHTML.split('*');
                let n1=Number(operand[0]);
                let n2=Number(operand[1]);
                res2.innerHTML=n1*n2;
                
            }
            else if(res2.innerHTML.includes('/')){        
               let operand=res2.innerHTML.split('/');
                let n1=Number(operand[0]);
                let n2=Number(operand[1]);
                res2.innerHTML=n1/n2;
            }
            else if(res2.innerHTML.includes('%')){        
               let operand=res2.innerHTML.split('%');
                let n1=Number(operand[0]);
                let n2=Number(operand[1]);
                res2.innerHTML=n1%n2;
            }
            else{                
               res2.innerHTML="<h6>SORRY FOR TWO OPERANDS ONLY</h6>"; 
            }
        }
        catch(e){
            res2.innerHTML=e.message;
        }

}
function fSum(){
    let res2=document.getElementById('res2');
    res2.innerHTML+='+';
}
function fSub(){
    let res2=document.getElementById('res2');
    res2.innerHTML+='-';
}
function fMul(){
    let res2=document.getElementById('res2');
    res2.innerHTML+='*';
}
function fDiv(){
    let res2=document.getElementById('res2');
    res2.innerHTML+='/';
}
function fMod(){
let res2=document.getElementById('res2');
    res2.innerHTML+='%';
}