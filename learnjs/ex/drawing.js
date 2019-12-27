
let canvas= document.createElement('canvas');
document.body.insertBefore(canvas,null);
canvas.width = 700;
canvas.height = 700;

let context = canvas.getContext( '2d' );
let gradient=context.createLinearGradient(10, 10, 1000,500);
gradient.addColorStop(0, 'purple');
gradient.addColorStop(1, 'blue');

context.fillStyle = gradient;
context.fillRect(10,10,1000,1000);




