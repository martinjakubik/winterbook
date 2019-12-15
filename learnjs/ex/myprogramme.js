let colorlist=['#f849cc','red','#f48720','yellow','#0cc656','#37a6eb','#940bda'];

let move = 1;

let changeColors=function(event) {
    let x = 0;
    while (x <= 900){
        let paragraphId = 'p' + x;
        let paragraphe = document.getElementById(paragraphId);
        paragraphe.style='color:' + colorlist[(x - move) % 7];
        x = x + 1;
    };
    move = (move + 1) % 7;
}

let x = 0;
while (x <= 900) {
    console.log(x + ' hello,loly');

    let paragraphe= document.createElement('p');

    paragraphe.innerHTML ='hello,loly';
    paragraphe.style='color:' + colorlist[x%7];
    paragraphe.onclick = changeColors;
    paragraphe.id = 'p' + x;

    document.body.insertBefore(paragraphe,null);
    x = x + 1;
};
