
function recRunInner(n,delay,afunc){
    afunc()
    if (n>1){
        setTimeout(recRunInner,delay,n-1,delay,afunc);
    }
}
 
function recursiveDelay(n,delay,todo){
    setTimeout(recRunInner,delay,n,delay,todo);
}

var change=0
var a=[0,1,2,3,4]

function whatever(){
    console.log("changing "+change)
    a[change]+=1
    change++;
    console.log(a[change-1])
}


recursiveDelay(5,500,whatever)
