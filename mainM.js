'use strict';

{
    const btn=document.getElementById('btn');
    const result=document.getElementById('result');

    btn.addEventListener('click',()=>{
        const results=['大吉','中吉','小吉','吉','凶'];
        const n=Math.floor(Math.random()*results.length);
        result.textContent=results[n];
    });

    const btn2=document.getElementById('btn2');
    const coment=document.getElementById('coment');

    btn2.addEventListener('click',()=>{
        const coments=['お稲荷捧げよ','本日狐の嫁入り','言う事はない','油揚げ派じゃ'];
        const n=Math.floor(Math.random()*coments.length);
        coment.textContent=coments[n];
    });



    
}