 let li=Array.from(document.getElementsByTagName('li'));
 let buttons=Array.from(document.getElementsByTagName('button'));
 let selection=document.getElementById('selection');
 let ul=Array.from(document.getElementsByTagName('ul'));
 let turn =true;
 let grid=document.getElementById('container')
 let c='';
 let counterx=0;
 let countery=0;
 let Turn=document.getElementById('turn');
 let winner=document.getElementById('Winner');

buttons.forEach(btn => {

    btn.addEventListener('click',()=>{
            selection.style.display='none';
            winner.style.display='block';
            document.getElementById('vs').style.display='block';
            grid.style.display='block';
            if(btn.innerText=="1 VS 1"){
                Turn.style.display='block';
                li.forEach(ele=>{
                    ele.addEventListener('click',()=>{
                        if(ele.innerText!='X'&&ele.innerText!='O'){
                          turn?ele.innerText='X': ele.innerText='O';
                          turn=!turn;

                    checkWin()&&Reset();
                    }
                    if(turn){
                        Turn.innerText="Turn Of X";
                    }
                    else{
                        Turn.innerText="Turn Of O";
                    }
                    if(draw()){
                        winner.innerText='DRAW';
                        Reset();
                    }
                    })
                     })
               }
               else{
                li.forEach(ele=>{
                    ele.addEventListener('click',()=>{
                        if(ele.innerText!='X'&&ele.innerText!='O'){
                          turn?ele.innerText='X': ele.innerText='O';

                          turn=!turn;
                    checkWin()&&Reset();
                    if(draw()){
                        winner.innerText='DRAW';
                    }
                    let a=li[Math.floor(Math.random()*9)];
                    let t=0;
                    while(!(a.innerText!='X'&&a.innerText!='O')&&t<200){
                        a=li[Math.floor(Math.random()*9)];
                        t++;
                    }
                    console.log(t);
                    if(t>=198){
                        t=0
                        li.forEach(ele=>{
                            if(ele.innerText!='X'&&ele.innerText!='O'){
                                a=ele;
                                console.log(a);
                            }
                        })
                    }
                    if (a.innerText!='X'&&a.innerText!='O'){
                        turn?a.innerText='X': a.innerText='O';
                        turn=!turn;
                        checkWin()&&Reset();
                    }
                    if(draw()){
                        winner.innerText='DRAW';
                        Reset();
                    }
                }
                    })
                    
                })
            }
            
        })
    })
    

 const Reset=()=>{
    setTimeout(()=>{
        let i=1;
        li.forEach(ele=>{
       ele.innerText=i;
        i++;
       
        })
    },1000)
   }
    
const draw=()=>{
let d=true;

    li.forEach(ele=>{
    if(ele.innerText!='X'&&ele.innerText!='O'){
       d=false;
    }
})
return d;
}

const checkWin=()=>{
let c=checkRow()||checkCol()||checkzigzag()||'';
if(c){
    winner.innerText=`Winner is :${c} `;
}
return c;

}
const checkRow=()=>{
    c=''
    ul.forEach(row=>{  
        row.childNodes.forEach(e=>{
         if(e.innerText){
         e.innerText=='X'&&counterx++;
         e.innerText=='O'&&countery++;
         }
        })
        checkCounter(); 
     })
     return c;
}
const checkCol=()=>{
    c=''
    for (let i = 0; i < 3; i++) {   
        ul.forEach(row=>{ 
          if(row.childNodes[1+2*i].innerText){
            row.childNodes[1+2*i].innerText=='X'&&counterx++;
            row.childNodes[1+2*i].innerText=='O'&&countery++;
          }
         
         })
         checkCounter();
        }
     
         return c;
    }
    const checkzigzag=()=>{

      c= (ul[0].childNodes[1].innerText== ul[1].childNodes[3].innerText&&ul[0].childNodes[1].innerText== ul[2].childNodes[5].innerText)?ul[0].childNodes[1].innerText:'';
        if(c==''){
            c= (ul[0].childNodes[5].innerText== ul[1].childNodes[3].innerText&&ul[0].childNodes[5].innerText== ul[2].childNodes[1].innerText)?ul[0].childNodes[5].innerText:'';

        }
        
             return c;
        }
const checkCounter=()=>{
    if(counterx==3){
        c='X'
       }
       if(countery==3){
        c='O'  
    }
    counterx=0;
    countery=0;
}
document.getElementById('vs').addEventListener('click',()=>{
    location.reload();

})