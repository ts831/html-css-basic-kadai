const Btn=document.getElementById('btn');

Btn.addEventListener('click',()=>{

    const textOne=document.getElementById('text');
    setTimeout(()=>{
        textOne.textContent='ボタンをクリックしました';
    },2000);
});
