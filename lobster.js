
var snd = new Audio("blue-lobster.mp3");
const btn = document.getElementById('button');


btn.addEventListener('click', () => {
    // 👇️ hide button
    btn.style.display = 'none';


     // 👇️ show div
  const box = document.getElementById('box');
  box.style.display = 'block';
});


function buttongo()
{
    snd.play();
    document.getElementById('img1', 'audio1').style.display='block';
    document.getElementById('img1', 'audio1').play()
    document.getElementById("button").style.display='none'


    
}