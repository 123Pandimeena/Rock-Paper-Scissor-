let a=['Rock','Paper','Sisser'];
       let b=[];
let c=[];

let system=0;
    let me=0;
    
    let rock="Rock";
    let paper="Paper";
    let sisser="Sisser";
    let s=document.querySelector('#sys');
        let m=document.querySelector('#me');
        let o=document.querySelector('#op');
        let r=document.querySelector('#r');

function Rock() {
            
     let result=a[(Math.floor(Math.random()*a.length))];
   r.textContent=result;
    
    if(paper===result)
    {
        
        system++;
        b.push(system);
    }
    else if(sisser===result)
    {
        me++;
        c.push(me);
    }
   // let barray=document.write(b); 

   if(b.length>1)
   {
    s.textContent="System Points"+"  " +b.length;
   }
   else{
    s.textContent="System Point"+"  " +b.length;
   }
   if(c.length>1)
   {
    m.textContent="Your Points"+"  "+c.length;
   }
   else{
    m.textContent="Your Point"+"  "+c.length;
   }
    
     let l1=b.length;
     let l2=c.length;

     if(l1==3||l2==3)
     {
        s.textContent="";
        m.textContent="";
        if(l1>l2)
        {
            o.textContent="You loss the game !!";
        }
        else{
            o.textContent="You won the game !!";
        }

     }
    
    
}
function Sisser() {
   


    let result=a[(Math.floor(Math.random()*a.length))];
    r.textContent=result;
    
    if(paper===result)
    {
        me++;
        c.push(me);
    }
    else if(rock===result)
    {
     system++;
     b.push(system);
    }
    
    if(b.length>1)
   {
    s.textContent="System Points"+"  " +b.length;
   }
   else{
    s.textContent="System Point"+"  " +b.length;
   }
   if(c.length>1)
   {
    m.textContent="Your Points"+"  "+c.length;
   }
   else{
    m.textContent="Your Point"+"  "+c.length;
   }
    let l1=b.length;
     let l2=c.length;

     if(l1==3||l2==3)
     {
        s.textContent="";
        m.textContent="";
        if(l1>l2)
        {
            o.textContent="You loss the game !!";
        }
        else{
            o.textContent="You won the game !!";
        }

     }
    
}

function Paper() {
   

    
    let result=a[(Math.floor(Math.random()*a.length))];
    r.textContent=result;
    
    if(sisser===result)
    {
        system++;
        b.push(system);
    }
    else if(rock===result)
    {
     me++;
     c.push(me);
    }
    
    if(b.length>1)
   {
    s.textContent="System Points"+"  " +b.length;
   }
   else{
    s.textContent="System Point"+"  " +b.length;
   }
   if(c.length>1)
   {
    m.textContent="Your Points"+"  "+c.length;
   }
   else{
    m.textContent="Your Point"+"  "+c.length;
   }
    let l1=b.length;
     let l2=c.length;

     if(l1==3||l2==3)
     {
        s.textContent="";
        m.textContent="";
        if(l1>l2)
        {
            o.textContent="You loss the game !!";

            
        }
        else{
            o.textContent="You won the game !!";
        }

     }
    
   
}

function load() {
    location.reload();
    
}
 

        