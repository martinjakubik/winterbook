
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
document.addEventListener('mouseup',()=>{
    context.fillRect(10,10,1000,1000);
    context.drawImage(globoimage,15,450,100,100);
 
})