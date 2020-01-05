let sleep = function (milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

let canvas= document.createElement('canvas');
document.body.insertBefore(canvas,null);
canvas.width = 800;
canvas.height = 700;

let context = canvas.getContext( '2d' );
let gradient=context.createLinearGradient(10, 10, 1000,500);
gradient.addColorStop(0, 'purple');
gradient.addColorStop(1, 'blue');

context.fillStyle = gradient;
context.fillRect(10,10,1000,1000);



let globoimage = new Image();
globoimage.src='/Users/martin/code/gitwork/winterbook/learnjs/ex/globohappy.png';
globoimage.onload=function(){
    context.drawImage(globoimage,15,600,100,100);
}

document.addEventListener('mouseup',async()=>{
let top=600;
let frame=0;
    while(frame<6){
        frame=frame+1;
        context.fillRect(10,10,1000,1000);
    context.drawImage(globoimage,15,top,100,100);
    await sleep(50);
    top=top-50;
    }

frame=0
    while(frame<7){
        frame=frame+1;
        context.fillRect(10,10,1000,1000);
    context.drawImage(globoimage,15,top,100,100);
    await sleep(50);
    top=top+50;
    }
})

