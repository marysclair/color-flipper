const cores = ['blue', 'green', 'rgb(0, 255, 255)', 'rgb(139, 0, 0)', 'rgb(139, 0, 139)', '#98fb98', '#4169e1'];

const cor = document.querySelector(".cor");
const btn = document.querySelector("#btn");

btn.addEventListener('click', function () {
    const randomNum = getRandomNum();
    document.body.style.backgroundColor = cores[randomNum];
    cor.textContent = cores[randomNum];
    });

function getRandomNum(){
    return Math.floor(Math.random()*cores.length);
}