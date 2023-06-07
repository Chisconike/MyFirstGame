const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const btn1 = document.querySelector('.btnA')
const btn2 = document.querySelector('.btnB')
const reset = document.querySelector('.reset')
const select = document.querySelector('#num')

play1 = 0;
play2 = 0;
winScore = 3;
isGameOver = false;

btn1.addEventListener('click', () => {
    if (!isGameOver) {
        play1 += 1;
        if (play1 === winScore) {
            isGameOver = true;
            p1.style.color = 'green'
            p2.style.color = 'red'
            btn1.disabled = true;
            btn2.disabled = true;
        }
    }
    p1.textContent = play1
})

btn2.addEventListener('click', () => {
    if (!isGameOver) {
        play2 += 1;
        if (play2 === winScore) {
            isGameOver = true;
            p2.style.color = 'green'
            p1.style.color = 'red'
            btn2.disabled = true;
            btn1.disabled = true;
        }
    }
    p2.textContent = play2
})

select.addEventListener('change', () => {
    winScore = parseInt(select.value);
    isGameOver = false;
    p1.textContent = 0;
    p1.style.color = 'black'
    play1 = 0;
    p2.textContent = 0;
    p2.style.color = 'black';
    play2 = 0;
    btn1.disabled = false;
    btn2.disabled = false;
})

reset.addEventListener('click', () => {
    isGameOver = false;
    p1.textContent = 0;
    p1.style.color = 'black'
    play1 = 0;
    p2.textContent = 0;
    p2.style.color = 'black';
    play2 = 0;
    btn1.disabled = false;
    btn2.disabled = false;

})