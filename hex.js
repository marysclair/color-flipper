const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const cor = document.querySelector(".cor");
const btn = document.querySelector("#btn");

btn.addEventListener('click', function () {
    let hexCor = '#';
    for (let i = 0; i < 6; i++) {
        let randomNum = getRandomNum();
        hexCor += hex[randomNum];
    }
    document.body.style.backgroundColor = hexCor;
    cor.textContent = hexCor;
    });

function getRandomNum(){
    return Math.floor(Math.random()*hex.length);
}