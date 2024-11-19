const Btn=document.getElementById('btn');

Btn.addEventListener('click',()=>{

    const Text=document.getElementById('text');
    Text.textContent='ボタンをクリックしました';

    console.log(Text);

});