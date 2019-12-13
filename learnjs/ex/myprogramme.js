let x = 0;
let colorlist=['#f849cc','red','#f48720','yellow','#0cc656','#37a6eb','#940bda'];
while (x <= 900){
    console.log(x + ' hello,loly');
    let paragraphe= document.createElement('p');
    paragraphe.innerHTML ='hello,loly';
    paragraphe.style='color:' + colorlist[x%7];
    
    document.body.insertBefore(paragraphe,null);
    x = x + 1;
};

